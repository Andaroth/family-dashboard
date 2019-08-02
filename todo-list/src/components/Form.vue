<template>
  <div>
    <div class="flex-row">
      <md-button class="md-raised md-accent md-icon-button" @click="reloadList"><md-icon>refresh</md-icon></md-button>
      <md-field>
        <label for="input">Ajouter une tâche</label>
        <md-input name="input" id="input" :value="text" @input="setText" @keyup.enter="addTask"  />
      </md-field>
      <md-button class="md-raised md-primary" @click="addTask">Add</md-button>
    </div>
    <div class="flex-row">
      
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
      this.text = e;
    },
    addTask: function() {
      if (this.text.length) {
        this.$emit('addTask',this.text);
        this.text = ''
      }
    },
    reloadList: function() {
      this.$emit('refresh',{})
    }
  }
};
</script>
