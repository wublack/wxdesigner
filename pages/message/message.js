// pages/message/message.js
import IMEventHandler from '../../utils/imeventhandler.js'
import {
  calcTimeHeader,
  clickLogoJumpToCard
} from '../../utils/util.js'
import {
  iconNoMessage
} from '../../utils/imageBase64.js'
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatList: [],
    chatAccount: {},
    loginUserAccount: '',
    chatAccount: {},
    accountUnreadMap: {},
    server_room: ''
  },

  gotoChat: function(options) {
    console.log(options)
    let roomid = options.currentTarget.dataset.chatRoom
    wx.navigateTo({
      url: '../chatroom/chatroom?chatTo=' + roomid,
    })
  },

  lookOrderNotice: function(options) {
    wx.navigateTo({
      url: '../noticeList/noticeList',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let self = this
    if (app.globalData.ptyUserInfo) {
      this.setData({
        server_room: app.globalData.ptyUserInfo.server_room
      })
    }
    // new IMEventHandler({
    //   token: 'e8iok5627goqu5emw2sk',
    //   account: 'yxdcrphypvp'
    // })
    app.globalData.subscriber.on('UPDATE_USER_MESSAGE', (user) => {
      // console.log("recentChatList",app.globalData.recentChatList)

      self.data.chatList = app.globalData.recentChatList
    })
    app.globalData.subscriber.on('UPDATE_SESSION', (sessions) => {
      // console.log(sessions)
      sessions.forEach((item, index) => {
        if (item.to === '0000' || item.to === '0001' || (app.globalData.ptyUserInfo && item.to === app.globalData.ptyUserInfo.server_room)) {
          //删除系统通知和交易信息
          sessions.splice(index, 1);
        }
        if (item.lastMsg.attach) {
          item.serverCustom = JSON.parse(item.lastMsg.attach.team.serverCustom)
        } else {
          if (item.lastMsg.content) {
            console.log('item.content')
            let orderId = JSON.parse(item.lastMsg.content).orderId
            self.getOrderDetail(orderId)
          }
        }
        item['formateTime'] = calcTimeHeader(item.updateTime)
        // console.log(item)
      })
      sessions.sort(self.sortNum)
      self.setData({
        chatList: sessions
      })
    })
  },

  sortNum: function(a, b) {
    return b.updateTime - a.updateTime
    //升序，如降序，把“a - b”该成“b - a”
  },

  getOrderDetail: function(orderid) {
    console.log("orderid", orderid)
    wx.request({
      url: app.globalData.config.baseUrl + '/order/findByOrder',
      method: 'POST',
      data: {
        order_id: orderid
      },
      success: function(res) {
        console.log(res)
      }

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