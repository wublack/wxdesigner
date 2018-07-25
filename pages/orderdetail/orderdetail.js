// pages/orderdetail/orderdetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      orderDetail:{},
      createTime:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情'
    })
    this.getOrderDetail('')
  },

  getOrderDetail: function (orderid) {
    let self = this
    wx.request({
      url: app.globalData.config.baseUrl + '/order/findByOrder',
      method: 'POST',
      data: {
        order_id: '1786'
      },
      success: function (res) {
        // console.log(res)
        self.setData({
          orderDetail: res.data.datas.serviceInfo
        })
        console.log(self.data.orderDetail.design_nickname)
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})