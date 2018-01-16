
import { Base } from '../../utils/base.js';
class Home extends Base {
  constructor() {
    super();
  }

  /*banner图片信息*/
  getBannerData(callback) {
    var that = this;

    var param = {
      url: 'banner?id=1',
      sCallback: function (res) {
        callback && callback(res);
      }
    };

    this.request(param);
  }


};
export { Home };