// pages/home/home.js
import IMEventHandler from '../../utils/imeventhandler.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allOrderTypes: [{
        imgType: '../../resource/img/fengeing.png',
        typeTitle: '设计中'
      },
      {
        imgType: '../../resource/img/design_finish.png',
        typeTitle: '设计完成'
      },
      {
        imgType: '../../resource/img/producting.png',
        typeTitle: '生产中'
      },
      {
        imgType: '../../resource/img/fahuo.png',
        typeTitle: '发货中'
      },
      {
        imgType: '../../resource/img/comment.png',
        typeTitle: '待评价'
      },
      {
        imgType: '../../resource/img/trade_finish.png',
        typeTitle: '交易完成'
      },
    ]
  },

  gotoOrderList:function(e){
    console.log(e.currentTarget.dataset.itemTitile)
    wx.navigateTo({
      url: '../../pages/orderList/orderList?id=1',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: ''
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