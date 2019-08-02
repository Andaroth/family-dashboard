<template>
  <md-list>
      <md-list-item class="entry flex-row" v-for="(i, index) of list" :key="index">
        <div class="s8">
            <md-checkbox :checked="i.checked" @change="toggleCheck">
              <span v-if="i.pending" class="name bold">{{i.typedText}}</span> 
              <span v-else class="name striked">{{i.typedText}}</span> 
              <span class="small">id:({{i._id}})</span></md-checkbox>
        </div>
        <div class="flex-row">
          <button class="md-raised md-accent" @click="deleteEntry" :id="index">delete</button>
        </div>
      </md-list-item>
    </md-list>
</template>

<style>
.s8 {
  width: 80%;
}
span.bold {
  font-weight: bolder;
}
span.striked {
  text-decoration: line-through;
}
span.small {
  font-style: italic;
  font-size: .75em;
}

ul {
  list-style-type: none;
  padding: 0;
}
.entry {
  display: block;
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

export default {
  name: 'List',
  props: {
    list: {type:Array},
  },
  data: () => ({
    litems: []
  }),
  methods: {
    deleteEntry: function(e) {
      console.log('emit delete',e.target.id)
      this.$emit('deleteTask',e.target.id);
    },
    toggleCheck: function(e) {
      console.log('check',e)
      this.$emit('toggleCheck',e)
    }
  }
};
</script>
