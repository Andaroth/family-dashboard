<template>
  <div>
    <md-list class="list">
      <md-list-item class="entry flex-row jcfs" v-for="(i, index) of list" :key="index" @click="toggleCheck(i._id)">
        <md-checkbox :v-model="i.done" :value="!i.done">
          <span :class="'name striked-'+i.done">{{i.typedText}}</span>
        </md-checkbox>
        <md-button class="md-raised md-accent md-icon-button" @click="deleteEntry(i._id)">delete</md-button>
      </md-list-item>
    </md-list>
    <md-button class="refresh-btn md-raised md-icon-button md-dense" @click="reloadList"><md-icon>refresh</md-icon></md-button>
  </div>
</template>

<style>
.list {
  height: 100%;
}
.li-elem {
  width: 100%;
}
.refresh-btn {
  position: absolute !important;
  left: 8px;
  top: 8px;
}

.name {
  font-weight: bolder;
  z-index: 10;
  width: 100%;
}
.striked-true {
  font-weight: normal;
  text-decoration: line-through;
  font-weight: normal;
  color: grey;
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
  cursor: pointer;
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
    deleteEntry: function(id) {
      console.log('emit delete',id)
      this.$emit('deleteTask',id);
    },
    toggleCheck: function(id) {
      this.$emit('toggleCheck',id)
    },
    reloadList: function() {
      this.$emit('refresh',{})
    }
  }
};
</script>
