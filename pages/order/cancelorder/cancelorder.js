// pages/order/cancelorder/cancelorder.js
Page({
  data: {
    btStatus: false,
  },
  bindInputBlur: function (e) {
    console.log(e.detail.value)
    if (e.detail.value.length > 5) {
      this.setData({
        btStatus: true,
      })
    } else {
      this.setData({
        btStatus: false,
      })
    }
  },
  onLoad: function (options) {
  },
  onConfirmed: function () {
    if (this.data.btStatus) {
  

    }
  }
})