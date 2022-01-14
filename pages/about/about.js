// pages/about/about.js
Page({
  data: {
    title: "hhh嚯嚯嚯"
  },
  onLoad: function (options) {
  },
  onUnload: function () {},
  handleNav(){
    wx.navigateTo({
      url: '/pages/detail/detail?详情页="牛逼"',
    })
  }
})