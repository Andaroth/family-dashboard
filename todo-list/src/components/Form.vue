<template>
  <div>
    <div class="flex-row">
      <label for="input">Ajouter une task</label>
      <input id="input" :value="text" @input="setText" @keyup.enter="addTask" />
      <button @click="addTask">+</button>
    </div>
    <div class="flex-row">
      <button @click="reloadList" >Reload</button>
    </div>
  </div>
</template>

<style>
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
export default {
  name: 'Form',
  data: () => ({
    text: '',
  }),
  methods: {
    setText: function(e) {
      this.text = e.target.value;
    },
    addTask: function() {
      this.$emit('addTask',this.text);
      this.text = ''
    },
    reloadList: function() {
      this.$emit('refresh',{})
    }
  }
};
</script>
