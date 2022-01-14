// components/my-mslot/my-mslot.js
Component({
  options:{
    multipleSlots:true
  },
  lifetimes:{
    attached(){
      console.log('attached');
    },
    created(){
      console.log("created");
    }
  }
})
