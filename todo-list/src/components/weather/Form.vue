<template>
  <div>
    <div class="flex-row">
      <md-field>
        <label for="input">Chercher une localisation</label>
        <md-input name="input" id="input" :value="text" @input="setText" @keyup.enter="addTask"  />
      </md-field>
      <md-button class="md-raised md-primary md-icon-button" @click="addTask">Add</md-button>
    </div>
    <div class="flex-row">
      
    </div>
  </div>
</template>

<style>
.flex-col, .flex-row {
  display: flex;
  padding: 0 8px;
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
        this.$emit('addWeather',this.text);
        this.text = ''
      }
    }
  }
};
</script>
