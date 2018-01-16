// pages/placeorder/placeorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    weightInfo: [
      { "id": 1, "name": "20斤~40斤" },
      { "id": 2, "name": "40斤~80斤" },
      { "id": 3, "name": "80斤~150斤" },
      { "id": 4, "name": "150斤以上" },
    ],
    recycler: "",
    remarked: "",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onLeaveMsg: function (event) {
    wx.navigateTo({
      url: '../leavemsg/leavemsg'
    })

  },
  onSelectRecycle: function () {
    wx.navigateTo({
      url: '../selectrecycler/selectrecycler?recycler=' + this.data.recycler
    })
  },
  onSelectedWeight: function (event) {
    var id = event.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(id)
    this.setData({
      id: id
    })
  },
  onPlaceOrder:function(){
    wx.navigateTo({
      url: '../orderinfo/orderinfo'
    })
  },
  onModfiyAddress:function(){

    wx.chooseAddress({
      success: function (res) {
        console.log(JSON.stringify(res))
      },
      fail: function (err) {
        console.log(JSON.stringify(err))
      }
    })
  }



})