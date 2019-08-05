<template>
  <div class="todo flex-col">
    <Spinner class="spinner-component" :active="this.loadingList" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h2>ToDo</h2>
    <Form class="todo-form" @addTask="insertTask"/>
    <md-divider></md-divider>
    <List class="task-list" :list="taskList" 
      @deleteTask="delTask" 
      @toggleCheck="toggleCheck" 
      @editEntry="editTask"
      @refresh="reloadList" 
    />
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

.spinner-component {
  position: relative;
  top: 50%;
  z-index: 10;
}
</style>

<script>
import axios from 'axios'

import Form from './Form';
import List from './List';

import Spinner from '@/components/Spinner';

const SERVER_ADDRESS = "http://localhost:3000"

export default {
  name: 'todo',
  components: {
    Form,
    List,
    Spinner
  },
  data: ()=>({
    taskList: [],
    loadingList: false
  }),
  methods: {
    insertTask: async function(typedText) {
        const res = await axios.post(SERVER_ADDRESS+'/task',{typedText,done:false})
        this.reloadList()
    },
    toggleCheck: async function(id) {
      let target = this.taskList.find(task => task._id == id)
      target.done = !target.done
      const res = await axios.put(SERVER_ADDRESS+'/edit',target)
    },
    editTask: async function(id,newText) {
      let target = this.taskList.find(task => task._id == id)
      target.typedText = newText;
      const res = await axios.put(SERVER_ADDRESS+'/edit',target)
    },
    delTask: async function(id) {
      const target = this.taskList.find(task => task._id == id)
      const res = await axios.put(SERVER_ADDRESS+'/delete',target)
      this.taskList = this.taskList.filter(task=>task._id!=target._id)
    },
    async reloadList() {
      this.loadingList = true
      this.taskList = []
      const { data } = await axios.get(SERVER_ADDRESS+'/task')
      this.taskList = data
      this.loadingList = false
      console.log(this.taskList)
    }
  },
  async mounted() {
    await this.reloadList()  
  }
};
</script>
