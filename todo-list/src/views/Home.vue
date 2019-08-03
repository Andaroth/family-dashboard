<template>
  <div class="home flex-col">
    <img src="../assets/logo.png" alt="Vue logo" width="200" />
    <Form @addTask="insertTask" @refresh="reloadList" />
    <List class="task-list" :list="taskList" @deleteTask="delTask" @toggleCheck="toggleCheck" />
  </div>
</template>

<style>
img {
  display: block;
  margin: 0 auto;
}

div.home {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: rgb(219, 219, 219);
}
div.home > .task-list {
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
import Form from '@/components/Form.vue';
import List from '@/components/List.vue';
import { setTimeout } from 'timers';

const ENDPOINT_TASK = "http://localhost:3000/task"
const ENDPOINT_DEL = "http://localhost:3000/delete"
const ENDPOINT_EDIT = "http://localhost:3000/edit"

export default {
  name: 'home',
  components: {
    Form,
    List
  },
  data: ()=>({
    taskList: []
  }),
  methods: {
    insertTask: async function(typedText) {
        const res = await axios.post(ENDPOINT_TASK,{typedText,pending:true})
        this.reloadList()
    },
    toggleCheck: async function(index) {
      const target = this.taskList[index]
      // const res = await axios.put(ENDPOINT_EDIT,target)
    },
    delTask: async function(index) {
      const target = this.taskList[index]
      console.log('delTask',target)
      const res = await axios.put(ENDPOINT_DEL,target)
      this.taskList = this.taskList.filter(task=>task!==target)
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
