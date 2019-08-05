<template>
  <div>
    <md-list class="list">
      <md-list-item class="entry flex-row jcfs" v-for="(i, index) of list" :key="index" @click="toggleCheck(i._id)">
        <md-checkbox :v-model="i.done" :value="!i.done" @change="toggleCheck(i._id)"></md-checkbox>
        <span :class="'name striked-'+i.done">{{i.typedText}}</span>
        <div>
          <md-button class="md-icon-button" @click="deleteEntry(i._id)"><md-icon class="fa fa-times"></md-icon></md-button>
          <md-tooltip md-direction="left">Supprimer</md-tooltip>
        </div>
      </md-list-item>
    </md-list>
    <div class="refresh-btn">
      <md-button class="md-icon-button md-dense" @click="reloadList"><md-icon class="fa fa-rss"></md-icon></md-button>
      <md-tooltip md-direction="left">Rafraîchir</md-tooltip>
    </div>
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
  right: 8px;
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
