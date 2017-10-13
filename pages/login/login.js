// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userPassword:'',
  },

  formSubmit:function(e){
    console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}
    var objData = e.detail.value;
    if(objData.userName && objData.userPassword){
      wx.setStorageSync("userName", objData.userName);
      wx.setStorageSync("userPassword", objData.userPassword);
      wx.navigateTo({
        url: '../index2/index2',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userName = wx.getStorageSync("userName");
    var userPassWord = wx.getStorageSync("userPassword");
    console.log(userName);
    console.log(userPassWord);

    if(userName){
      this.setData({userName:userName});
    }
    if(userPassWord){
      this.setData({userPassword:userPassWord});
    }
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