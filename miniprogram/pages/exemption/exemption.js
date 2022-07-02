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
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false
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
  open3() {
    this.setData({
      dialog3: true,
    });
  },
  open4() {
    this.setData({
      dialog4: true,
    });
  },
  open5() {
    this.setData({
      dialog5: true,
    });
  },
  open6() {
    this.setData({
      dialog6: true,
    });
  },
  open7() {
    this.setData({
      dialog7: true,
    });
  },
});
