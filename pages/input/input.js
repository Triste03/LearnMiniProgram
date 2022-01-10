// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event) {
    console.log("输入时", event);
  },
  handleFocus(event) {
    console.log("获得焦点时", event);
  },
  handleBlur(event) {
    console.log("失去焦点时", event);
  }
})