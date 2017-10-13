// pages/index2/index2.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    date : 'this_is_a_date',
    userInfo:{},
    list : [{name : 'bob' ,age:11},{name : 'tom',age :14},{name : 'alex',age:19}],
    resultDate :'',
    mypic : '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.request({
      url: 'https://raw.githubusercontent.com/jiangzy27/how_to_react/master/score.json',
      header:{
        'content-type': 'application/json'
      },
      
      success:function(res){
        console.log("success")
        that.setData({resultDate : res.data.data})
      }
    })
  },
  myEventHandle :function(){
    var that = this;
    wx.chooseImage({
      count :1,
      sizeType :['original','compressed'],//original 原图 , compressed 压缩图 默认两者都有
      sourceType:['album','camera'] ,//album 从相册选图 camera 使用相机  默认两者都有
      success: function(res) {
      that.setData({mypic:res.tempFilePaths});
      },
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