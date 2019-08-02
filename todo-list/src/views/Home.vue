<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div>
      <Form @addTask="insertTask" @refresh="reloadList" />
      <List :list="taskList" @deleteTask="delTask" @toggleCheck="toggleCheck" />
    </div>


    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style>
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
import HelloWorld from '@/components/HelloWorld.vue';
import Form from '@/components/Form.vue';
import List from '@/components/List.vue';
import { setTimeout } from 'timers';

const ENDPOINT_TASK = "http://localhost:3000/task"
const ENDPOINT_DEL = "http://localhost:3000/delete"
const ENDPOINT_EDIT = "http://localhost:3000/edit"

export default {
  name: 'home',
  components: {
    HelloWorld,
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
