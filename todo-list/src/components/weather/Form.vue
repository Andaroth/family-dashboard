<template>
  <div>
    <div class="flex-row p08">
      <md-field>
        <label for="input">Chercher une localisation</label>
        <md-input name="input" id="input" :value="text" @input="setText" @keyup.enter="addTask"  />
      </md-field>
      <div class="flex-col jcc">
        <div>
          <md-button class="md-raised md-primary md-icon-button md-dense" @click="addTask"><md-icon class="fa fa-plus"></md-icon></md-button>
          <md-tooltip md-direction="left">Ajouter</md-tooltip>
        </div>
      </div>
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
        this.$emit('addWeather',this.text);
        this.text = ''
      }
    }
  }
};
</script>
