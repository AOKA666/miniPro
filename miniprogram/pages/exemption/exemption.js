Page({
  mixins: [require('../../mixin/common')],
  data: {
    dialog2: false,
    wrap: false,
    wrap1: false,
  },
  onShow() {
    const promise1 = new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#js_btn1_1')
        .boundingClientRect((rect) => {
          resolve(rect.height);
        })
        .exec();
    });
    const promise2 = new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#js_btn1_2')
        .boundingClientRect((rect) => {
          resolve(rect.height);
        })
        .exec();
    });
    Promise.all([promise1, promise2]).then((values) => {
      if (values[0] != values[1]) {
        this.setData({ wrap: true });
      }
    });
  },
  close() {
    this.setData({
      dialog2: false,
    });
  },
  open2() {
    this.setData({
      dialog2: true,
    });
  },
});
