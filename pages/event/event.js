// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  start(e) {
    console.log("bindtouchstart",e);
  },
  end() {
    console.log("bindtouchend");
  },
  move() {
    console.log("bindtouchmove");
  },
  tap() {
    console.log("bindtap");
  },
  longpress() {
    console.log("longpress");
  },
  father(){
    console.log("father");
  },
  son(){
    console.log("son");
  },
  gradson(){
    console.log("grapson");
  },
  fatherp(){
    console.log("fatherp");
  },
  sonp(){
    console.log("sonp");
  },
  gradsonp(e){
    console.log("gradsonp",e);
    const name=e.currentTarget.dataset;
    console.log(name);
  },
  inner(e){
    console.log("inner",e);
  },
  outer(e){
    console.log("outer",e);
  }
})