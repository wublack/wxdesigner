// components/detailitem/detailitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showLine: {
      type: Boolean,
      value: true,
      observer:function(newV,oldV,changePath){

      }
    },
    leftTitle:{
      type:String,
      value:'',
    },
    rightTitle:{
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})