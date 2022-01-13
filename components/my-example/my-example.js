// components/my-example/my-example.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(e){
      const index=e.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("itemClick",{index,title:this.properties.title[index]},{})
    }
  }
})