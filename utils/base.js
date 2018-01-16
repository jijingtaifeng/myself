
class Base {

  constructor() {
    this.baseUrl = 'http://www.zerg.com/api/v1/'
  }

  request(parms) {
    var url = this.baseUrl + parms.url;
    if (!parms.type) {
      parms.type = 'GET';
    }
    wx.request({
      url: url,
      data: parms.data,
      header: {
        'content-type':'application/json',
        //'token':wx.getStorageInfoSync('token')
      },
      method: parms.type,
      success: function (res) {
        parms.sCallback && parms.sCallback(res.data);
      },

      fail: function (res) {
        console.log(res.data)
      },
     
    })
  }
  /*获得元素上的绑定的值*/
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };
};

export{Base};