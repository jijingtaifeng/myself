// pages/leavemsg/leavemsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgInfo: [
      { "id": 1, "name": "来前联系", "status": false },
      { "id": 2, "name": "无电梯", "status": false },
      { "id": 3, "name": "需爬楼梯", "status": false },
      { "id": 4, "name": "废品较多", "status": false },
    ],
    currId: -1,
    selectedMsg:[],
    otherMsg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onConfirmed: function () {

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    var prevPage = pages[pages.length - 2];

    prevPage.setData({ remarked: this.data.selectedMsg.toString()});
    wx.navigateBack({
      delta: 1
    })
  },
  onSelectedMsg: function (event) {
    var id = event.currentTarget.dataset.id;  //获取自定义的ID值 
    var that=this.data
    if (!that.msgInfo[id].status) {
      that.msgInfo[id].status = true
      that.selectedMsg.push(that.msgInfo[id].name)
      console.log(that.selectedMsg)
    } else {
      that.msgInfo[id].status = false;
      for (var i = 0; i < that.selectedMsg.length; i++) {
        if (that.selectedMsg[i] == that.msgInfo[id].name){
          that.selectedMsg.splice(i,1);
        }
        console.log(that.selectedMsg)
      }
    }
    var msgInfo = that.msgInfo
    this.setData({
      msgInfo
    })
  }
})