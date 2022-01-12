// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    NowTime: new Date().toLocaleString()
  },
  handleIsActive() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        NowTime: new Date().toLocaleString()
      })
    }, 1000)
  },


})