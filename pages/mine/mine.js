// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telNumber: '400-016-8988'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onMakePhone: function () {
    console.log("dd")
    wx.makePhoneCall({
      phoneNumber: this.data.telNumber 
    })
  }
})