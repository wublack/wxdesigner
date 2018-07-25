// pages/orderList/orderList.js
import { dealTime} from '../../utils/util.js'
const getOrderList = '/order/findOrderListPage'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: wx.getSystemInfoSync().windowHeight + 50,
    title: '设计中',
    page: 1,
    orderList: [],
  },

  scroll: function() {
    console.log('asdfasdf--scroll')
  },

  upper: function() {
    console.log('asdfasdf--upper')
    this.setData({
      page: 1,
      orderList: []
    })
    this.getOrderList();
  },

  lower: function() {
    console.log('asdfasdf--lower')
    this.getOrderList();
  },

  getOrderList: function() {
    let userId = app.globalData.ptyUserInfo?app.globalData.ptyUserInfo.id:''
    let result = {
      p: this.data.page++, //当前页
      pageSize: 10, //每页记录数
      nPages: 10, //页码数
      insert_time_search_store: 'desc',
      // designer_id: userId,
      designer_id: userId,
      status: this.status
    };
    let self = this;
    wx.request({
      url: app.globalData.config.baseUrl + getOrderList,
      method: "POST",
      data: result,
      success: function(res) {
        console.log("success", res)
        res.data.datas.list.forEach((item) => {
          if (item.patient_sex == null || item.patient_sex == '0') {
            item.patient_sex = null
          }
          item.createTime = dealTime(item.insert_time,null)
        })
        self.setData({
          orderList: self.data.orderList.concat(res.data.datas.list)
        })
        console.log(self.data.orderList)
      }
    })
  },

  lookDetail: function(e) {
    // console.log(e.currentTarget.dataset.orderid)
    let orderId = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '../../pages/orderdetail/orderdetail?orderId=' + orderId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    this.getOrderList();
    wx.setNavigationBarTitle({
      title: this.data.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})