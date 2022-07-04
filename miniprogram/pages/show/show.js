// pages/document/show/show.js
Page({
  mixins: [require('../../mixin/common')],
  /**
   * 页面的初始数据
   */
  data: {
    ID: false,
    Enrollment: false,
    CMA_Trans: false,
    Working_Exp: false,
    CPA: false,
    Accelerate: false
  },
  close1() {
    this.setData({
      ID: false,
    });
  },
  close2() {
    this.setData({
      Enrollment: false,
    });
  },
  close3() {
    this.setData({
      CMA_Trans: false,
    });
  },
  close4() {
    this.setData({
      Working_Exp: false,
    });
  },
  close5() {
    this.setData({
      CPA: false,
    });
  },
  close6() {
    this.setData({
      Accelerate: false,
    });
  },
  open1() {
    this.setData({
      ID: true,
    });
  },
  open2() {
    this.setData({
      Enrollment: true,
    });
  },
  open3() {
    this.setData({
      CMA_Trans: true,
    });
  },
  open4() {
    this.setData({
      Working_Exp: true,
    });
  },
  open5() {
    this.setData({
      CPA: true,
    });
  },
  open6() {
    this.setData({
      Accelerate: true,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})