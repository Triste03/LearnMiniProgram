// components/my-example/my-example.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(e) {
      // console.log(e);
      var index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("itemClick", {
        index,
        title: this.properties.titles[index]
      }, {})
    },
    handleCounter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})