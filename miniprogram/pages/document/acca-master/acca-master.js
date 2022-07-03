// pages/document/acca-master/acca-master.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{
      first:{
        id: 1,
        document: "本科毕业证原件",
        tips: "带有盖章"
      },
      second:{
        id: 2,
        document: "本科学位证原件",
        tips: "带有盖章"
      },
      third:{
        id: 3,
        document: "本科毕业证翻译件",
        tips: "带有盖章"
      },
      fourth:{
        id: 4,
        document: "本科学位证翻译件",
        tips: "带有盖章"
      }
    },
    dataList2:{
      first:{
        id: 1,
        document: "研究生毕业证原件",
        tips: "带有盖章"
      },
      second:{
        id: 2,
        document: "研究生学位证原件",
        tips: "带有盖章"
      },
      third:{
        id: 3,
        document: "研究生毕业证翻译件",
        tips: "带有盖章"
      },
      fourth:{
        id: 4,
        document: "研究生学位证翻译件",
        tips: "带有盖章"
      },
      fifth:{
        id: 5,
        document: "研究生成绩单原件",
        tips: "带有盖章"
      },
      sixth:{
        id: 6,
        document: "研究生成绩单翻译件",
        tips: "带有盖章"
      }
    },
    dataList3:{
      first:{
        id: 1,
        document: "本科毕业证原件",
        tips: "签名或盖章"
      },
      second:{
        id: 2,
        document: "本科成绩单原件",
        tips: "签名或盖章"
      },
    },
    dataList4:{
      first:{
        id: 1,
        document: "研究生毕业证原件",
        tips: "签名或盖章"
      },
      second:{
        id: 2,
        document: "研究生成绩单原件",
        tips: "签名或盖章"
      },
    }
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