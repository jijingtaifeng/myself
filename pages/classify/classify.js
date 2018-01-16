// pages/classify/classify.js

import { Classify } from '../classify/classify-model.js';

var classify = new Classify
Page({
  data: {
    leftData: [
      { "id": 1, "imgurl": "		https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E5%BA%9F%E7%BA%B8%E6%9D%BF.png", "title": "废纸板" },
      { "id": 2, "imgurl": "https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E5%BA%9F%E6%8A%A5%E7%BA%B8.png", "title": "废报纸" },
      { "id": 3, "imgurl": "https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E5%B9%BF%E5%91%8A%E7%BA%B8.png", "title": "广告纸" },
      { "id": 3, "imgurl": "https://icon-1252864111.cos.ap-shanghai.myqcloud.com/%E6%97%A7%E4%B9%A6%E6%9C%AC.png", "title": "旧书本" },
    ],
  },
  onLoad: function (option) {

    this.data.titleName = option.name;
    this.data.id = option.id;
    wx.setNavigationBarTitle({
      title: option.name
    });
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.titleName
    });
  },
  onOrderItem: function (event) {
    console.log("ssd");
    var id = classify.getDataSet(event, 'id');
    var name = classify.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../placeorder/placeorder?id=' + id + '&name=' + name
    })
  }
})