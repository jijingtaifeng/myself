Page({
  data: {
    dialog: { content: '18016064185', confirmtext: "呼叫" },
    btStatus: false,
    codeStatus: "获取验证码",

  },
  // tosat测试
  onLoad: function () {
    let app = getApp();
    new app.ToastPannel();
  },
  // 触发toast组件
  openToastPannel: function () {
    this.showDialog(this.data.dialog);
  },
  closeDialog: function () {
    this.closedialog()
  },

  bindInputBlur: function (e) {
    if (e.detail.value.length >= 11) {
      this.setData({
        btStatus: true,
      })
    } else {
      this.setData({
        btStatus: false,
      })
    }
  },

  onGetCode: function () {
    var that =this.data;
    if (that.btStatus) {
      this.setData({
        codeStatus: 60,
        btStatus: false
      })
      let time = setInterval(() => {
        let codeStatus = that.codeStatus
        codeStatus--
        this.setData({
          codeStatus: codeStatus
        })
        if (codeStatus == 0) {
          clearInterval(time)
          this.setData({
            codeStatus: "重新获取",
            btStatus: true
          })
        }
      }, 1000)

    }
  }

})  