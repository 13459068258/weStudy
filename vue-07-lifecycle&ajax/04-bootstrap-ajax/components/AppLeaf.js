; (function () {

  const template = `<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active"><a href="#">删除条数 
      <span v-show="delNum">{{ delNum }} 条</span>
      </a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
    </ul>
  </div>`


  window.AppLeaf = {
    template,

    data() {
      return {
        delNum: 0
      }
    },

    created() {
      PubSub.subscribe('changeNum', (event,num) =>{
        // 统计
        this.delNum = this.delNum + num
      })
    },

  }
})()