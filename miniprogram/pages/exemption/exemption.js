Page({
  mixins: [require('../../mixin/common')],
  data: {
    dialog1: false,
  },
  onShow() {
    
  },
  close() {
    this.setData({
      dialog1: false,
      dialog2: false
    });
  },
  open1() {
    this.setData({
      dialog1: true,
    });
  },
  open2() {
    this.setData({
      dialog2: true,
    });
  },
});
