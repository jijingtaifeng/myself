// pages/address/addresslist/addresslist.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    address: [{ "id": 1, "name": "毛尖", "phone": "18016064185", "detailaddress": "上海市徐汇区虹梅路街道 虹梅路1535号星联科研大厦2号楼11楼" },
      { "id": 2, "name": "毛尖", "phone": "18016064185", "detailaddress": "上海市徐汇区虹梅路街道虹梅路1535号星联科研大厦2号楼11楼 " },
      { "id": 3, "name": "毛尖", "phone": "18016064185", "detailaddress": "上海市徐汇区虹梅路街道虹梅路1535号星联科研大厦2号楼11楼 " },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  onDelAddress: function (event) {


  },

  onEditAddress:function(event) {


  },

  onNewAddress: function () {
    wx.navigateTo({
      url: '../newaddress/newaddress'
    })


  }
})