// pages/home.js
import request from '../../services/network';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //     url: 'http://httpbin.org',
    //     success: (res) => {
    //       console.log(res);
    //     }
    //   }),
    wx.request({
        url: 'http://httpbin.org/post',
        method: "post",
        success: (res) => {
          console.log(res);
        },
        data: {
          name: "coder",
          age: 20
        }
      }),
      request({
        url: 'http://httpbin.org/post',
        method: "post"
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
  },
  showToast() {
    wx.showToast({
      title: 'loading',
      mask: true,
      duration: 3000,
      icon: "error"
    })
  },
  showModal() {
    wx.showModal({
      cancelColor: 'red',
      title: "牛逼",
      content: "真的吗？",
      cancelText: "退出",
      showCancel: false,
      editable: true,
      placeholderText: "牛逼plus"
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['拍照', '相册', '转发'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "第一个小程序",
      path: "/pages/about/about",
      imageUrl: "https://webpack.js.org/site-logo.1fcab817090e78435061.svg"
    }
  }
})