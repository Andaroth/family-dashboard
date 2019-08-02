<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="tac">
      <Form @addTask="insertTask" @refresh="reloadList" />
      <List :list="taskList" />
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
        const res = await axios.post('http://localhost:3000/task',{typedText})
        this.reloadList()
    },
    async reloadList() {
      this.taskList = []
      const { data } = await axios.get('http://localhost:3000/task')
      this.taskList = data
    }
  },
  async mounted() {
    await this.reloadList()  
  }
};
</script>
