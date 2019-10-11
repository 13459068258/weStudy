;(function(){
    const template = ` <tr>
    <td>{{ emp.id }}</td>
    <td>{{ emp.name }}</td>
    <td>{{ emp.salay }}</td>
    <td>
        <a href="#" @click="deleteItem">删除</a>
    </td>
  </tr>`

  window.Item = {
      props:{
        emp:{
            type:Object,
            required:true
        },
        deleteEmp:Function,
        index:Number
      },
      methods: {
        deleteItem(){
          this.deleteEmp(this.index)
        }
      },
      template
  }
})()