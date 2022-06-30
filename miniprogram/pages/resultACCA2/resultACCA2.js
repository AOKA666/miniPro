// pages/resultACCA2/resultACCA2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{
      first:{
        id: 1,
        document: "在读证明原件",
        tips: "带有盖章或签名"
      },
      second:{
        id: 2,
        document: "在读证明翻译件",
        tips: "带有盖章或签名"
      },
      third:{
        id: 3,
        document: "成绩单原件",
        tips: "带有盖章或签名"
      },
      fourth:{
        id: 4,
        document: "成绩单翻译件",
        tips: "带有盖章或签名"
      }
    },
    extra1:{
      fifth: {
        id: 5,
        document: "护照原件",
        tips: "需在有效期内"
      }
    },
    extra2:{
      sixth: {
        id: 6,
        document: "身份证原件",
        tips: "需在有效期内"
      },
      seventh: {
        id: 7,
        document: "身份证翻译件",
        tips: "带有盖章或签名"
      }
    },
    abroadData:{
      sixth: {
        id: 8,
        document: "在读证明原件",
        tips: "需在有效期内"
      },
      seventh: {
        id: 9,
        document: "成绩单原件",
        tips: "带有盖章或签名"
      }
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
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