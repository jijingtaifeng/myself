
import { Home } from 'home-model.js';

var home = new Home();
Page({

  data: {

    leftData: [
      { "id": 1, "imgurl": "https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E7%BA%B8%E7%B1%BB.png", "title": "纸类" },
      { "id": 2, "imgurl": "	https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E6%97%A7%E5%AE%B6%E7%94%B5.png", "title": "旧家电" },
    ],
    rightData: [
      { "id": 3, "imgurl": "	https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E9%87%91%E5%B1%9E%E7%B1%BB.png", "title": "金属类" },
      { "id": 4, "imgurl": "	https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E5%A1%91%E6%96%99%E7%B1%BB.png", "title": "塑料类" },
      { "id": 5, "imgurl": "	https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E6%97%A7%E5%AE%B6%E7%94%B5.png", "title": "泡沫类" },
    ],
    bannerArr:[

      { "id": 1, "imgurl": "https://icon-1252864111.cos.ap-shanghai.myqcloud.com/zbanner1.png", "title": "纸类" },
      { "id": 2, "imgurl": "	https://icon-1252864111.cos.ap-shanghai.myqcloud.com/zbanner2.png", "title": "旧家电" },
    ],
    
  },

  onLoad: function (options) {
    this._loadData();
  },
  _loadData: function () {
    var that = this;
    // 获得bannar信息

    home.getBannerData((data) => {
      console.log(data.data.items)
      that.setData({
        //bannerArr: data.data.items,
      });
    });

  },

  onItemTap:function(event){
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../classify/classify?id=' + id + '&name=' + name
    })
  }
})