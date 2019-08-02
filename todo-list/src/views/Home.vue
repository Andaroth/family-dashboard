<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <Form @addTask="insertTask" />

    <button @click="reloadList" >Reload</button>
    
    <List :list="taskList" />

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Form from '@/components/Form.vue';
import List from '@/components/List.vue';

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
        console.log("insert",typedText);
        const res = await axios.post('http://localhost:3000/task',{typedText})
        console.log('add',res)
        this.reloadList()
    },
    async reloadList() {
      const { data } = await axios.get('http://localhost:3000/task')
      this.taskList = data
      console.log('res',data)
    }
  },
  async mounted() {
    console.log('mounted')
    await this.reloadList()  
  }
};
</script>
