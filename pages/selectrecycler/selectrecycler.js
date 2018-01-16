// pages/selectrecycler/selectrecycler.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recyclerInfo: [
      { "id": 1, "name": "李大力" },
      { "id": 2, "name": "冯宝宝" },
      { "id": 3, "name": "李三" },
      { "id": 4, "name": "冯提莫" },
    ],
    selectedRecycler: "",
    currId: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onEnterSelected(options.recycler);
  },

  onEnterSelected: function (recycler) {
    var that=this.data
    for (var i = 0; i < that.recyclerInfo.length; i++) {
      if (recycler == that.recyclerInfo[i].name) {
        this.setData({
          currId:i
        })
      }
    }

  },


  onSelectedRecycler: function (event) {
    var id = event.currentTarget.dataset.id;  //获取自定义的ID值 
    this.data.selectedRecycler = this.data.recyclerInfo[id].name
    this.setData({
      currId: this.data.currId == id ? -1 : id
    })
  },

  onConfirmed: function (event) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    var prevPage = pages[pages.length - 2];
    prevPage.setData({ recycler: this.data.selectedRecycler });
    wx.navigateBack({
      delta: 1
    })

  }
})