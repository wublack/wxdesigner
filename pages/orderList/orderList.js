// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: wx.getSystemInfoSync().windowHeight + 50,
    title:'设计中'
  },

  scroll:function(){
    console.log('asdfasdf--scroll')
  },

  upper:function(){
    console.log('asdfasdf--upper')
  },

  lower:function(){
    console.log('asdfasdf--lower')
  },

  lookDetail:function(e){
    console.log('lookdetail')
    // console.log(e.currentTarget.dataset.id)
    // let orderId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/orderdetail/orderdetail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: this.data.title
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