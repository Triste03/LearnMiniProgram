// pages/home.js
Page({
  data: {
    counter: 0,
    list:[]
  },
  handleIncrement(e){
    console.log(e);
    const data=e.detail;
    this.setData({
      counter:this.data.counter+1,
      list:[data.name,data.age]
    })
  
  }
})