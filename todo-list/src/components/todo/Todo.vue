<template>
  <div class="todo flex-col">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h2>ToDo</h2>
    <Form class="todo-form" @addTask="insertTask" @refresh="reloadList" />
    <md-divider></md-divider>
    <List class="task-list" :list="taskList" @deleteTask="delTask" @toggleCheck="toggleCheck" />
  </div>
</template>

<style>
img {
  display: block;
  margin: 0 auto;
}

div.todo {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
div.todo > .task-list {
  overflow-y: auto;
}

.tac {
  text-align: center;
}

.flex-col, .flex-row {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}
</style>

<script>
import axios from 'axios'
// @ is an alias to /src
import Form from './Form';
import List from './List';

const ENDPOINT_TASK = "http://localhost:3000/task"
const ENDPOINT_DEL = "http://localhost:3000/delete"
const ENDPOINT_EDIT = "http://localhost:3000/edit"

export default {
  name: 'todo',
  components: {
    Form,
    List
  },
  data: ()=>({
    taskList: []
  }),
  methods: {
    insertTask: async function(typedText) {
        const res = await axios.post(ENDPOINT_TASK,{typedText,done:false})
        this.reloadList()
    },
    toggleCheck: async function(id) {
      let target = this.taskList.find(task => task._id == id)
      target.done = !target.done
      const res = await axios.put(ENDPOINT_EDIT,target)
    },
    delTask: async function(id) {
      const target = this.taskList.find(task => task._id == id)
      const res = await axios.put(ENDPOINT_DEL,target)
      this.taskList = this.taskList.filter(task=>task._id!=target._id)
    },
    async reloadList() {
      this.taskList = []
      const { data } = await axios.get(ENDPOINT_TASK)
      this.taskList = data
      console.log(this.taskList)
    }
  },
  async mounted() {
    await this.reloadList()  
  }
};
</script>
