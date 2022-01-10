// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ""
  },
  handleChoosedAlbum() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        const path = res.tempFilePaths;
        this.setData({
          imagePath: path
        })
      }
    })
  }
})