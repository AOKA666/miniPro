// pages/acca/passport/passport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    has_passport:{
      yes: "我有护照",
      no: "我没有护照"
    }
  },
  toResult:function(e){
    let has = e.currentTarget.dataset.has;
      wx.navigateTo({
        url: '/pages/resultFIA1/resultFIA1?has='+has,
      })
  },
  toResultAcca:function(e){
    let has = e.currentTarget.dataset.has;
    let abroad = e.currentTarget.dataset.abroad;
      wx.navigateTo({
        url: '/pages/resultACCA1/resultACCA1?has='+has+'&abroad='+abroad,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData(options)
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