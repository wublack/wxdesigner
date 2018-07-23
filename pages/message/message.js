// pages/message/message.js
import IMEventHandler from '../../utils/imeventhandler.js'
import { calcTimeHeader, clickLogoJumpToCard } from '../../utils/util.js'
import { iconNoMessage } from '../../utils/imageBase64.js'
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  gotoChat:function(options){
    console.log(options)
    let roomid = options.currentTarget.dataset.chatRoom
    wx.navigateTo({
      url: '../chatroom/chatroom?chatTo='+roomid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new IMEventHandler({
      token: 'n0yhjlbvlob175g5s88o',
      account: 'mfij3dgsiui1lxurydl3ugrvso'
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