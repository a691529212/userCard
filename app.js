//app.js
App({
  data: {
    code: '',
    iv: "",
    encryptedData: ""
  },
  /**
   * what need know  first
   *  No.1 : .json 是配置文件
   *        .js 是脚本文件
   *        .wxss 是样式表文件 类似.css
   *        .wxml 是结构文件 类似.html
   * 
   *  // 默认以 app.json 内pages 目录第一个路径为入口
   * 每个页面会自动生成一个 目录 每个目录自动生成 .js  .json  .wxml .wxss 文件
   */
  onLaunch: function () {
    var that = this
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        console.log(res)
      var code  = res.code
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  console.log(res)
                  // 可以将 res 发送给后台解码出 unionId
                  
                  this.globalData.userInfo = res.userInfo
                  wx.setStorageSync("userInfo", res.userInfo)
                  iv: res.iv;

                  encryptedData: res.encryptedData;
                  wx.request({
                    url: "http://192.168.1.55:80/home/ProcessRequest",
                    data: {
                      iv: res.iv,
                      encryptedData: res.encryptedData,
                      code: code
                    },
                    method: ('GET'),
                    header: { 'content-type': 'application/json' },
                    success: function (res) {
                      console.log("openid --> " + res.data)
                      wx.setStorageSync("openid", res.data)
                    }
                  })
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  },
})