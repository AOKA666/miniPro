// pages/nation/nation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toDocument:function(e){
    let abroad = e.currentTarget.dataset.abroad;
    wx.navigateTo({
      url: '/pages/document/acca-1/acca-1?abroad='+abroad,
    })
  },
  toBachelor:function(e){
    let abroad = e.currentTarget.dataset.abroad;
    wx.navigateTo({
      url: '/pages/document/acca-bachelor/acca-bachelor?abroad='+abroad,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData(options);
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