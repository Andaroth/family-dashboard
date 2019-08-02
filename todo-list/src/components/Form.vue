<template>
  <div>
    <input type="text" id="input" :value="text" @input="setText" @keyup.enter="addTask">
    <label for="input">Ajouter une task</label>
    <button @click="addTask">+</button>
  </div>
</template>

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
      console.log(this.text)
      this.$emit('addTask',this.text);
    }
  }
};
</script>
