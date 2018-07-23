import MD5 from '../../utils/md5.js'
import IMEventHandler from '../../utils/imeventhandler.js'

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '登录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  useridInput: function(e) {
    this.setData({
      userInfo: {
        userId: e.detail.value,
        password: this.data.userInfo.password
      }
    })
  },
  pwdInput: function(e) {
    this.setData({
      userInfo: {
        userId: this.data.userInfo.userId,
        password: e.detail.value
      }
    })
  },
  userLogin: function() {
    let userId = this.data.userInfo.userId;
    let password = MD5.createHash(this.data.userInfo.password);
    let result = {
      userName: userId,
      password: password
    }
    console.log(JSON.stringify(result))
    wx.request({
      url: 'https://designerapp.1sju.com/yishuju-back-end/user/login',
      method: 'POST',
      data: result,
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res)
        console.log(res.data.error_code === 'Y10000')
        if (res.data.error_code === 'Y10000') {
          app.globalData.ptyUserInfo = res.data.datas
          let token = res.data.datas.token
          let account = res.data.datas.accid
          console.log(token)
          new IMEventHandler({
            token: token,
            account: account
          })
          wx.switchTab({
            url: '../message/message',
          })
          
        }
      }
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '登录账户'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})