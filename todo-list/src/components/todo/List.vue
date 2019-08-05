<template>
  <div>
    <md-list class="list">
      <md-list-item class="entry flex-row jcfs tal" v-for="(i, index) of list" :key="index" @click="toggleCheck(i._id)">
        <md-checkbox :v-model="i.done" :value="!i.done" @change="toggleCheck(i._id)"></md-checkbox>
        <input :id="i._id" :class="'name striked-'+i.done" @click.stop="" @keyup.stop="editTask" :value="i.typedText" :disabled="i.done" />
        <div>
          <md-button class="md-icon-button" @click.stop="deleteTask(i._id)"><md-icon class="fa fa-times"></md-icon></md-button>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: bolder;
  font-size: 1em;
  z-index: 10;
  cursor: text;
  width: 100%;
  height: 100%;
  border: 0;
  box-sizing: border-box;
  transition: all .5s;
}
.name:disabled {
  background: transparent;
  pointer-events: none;
}
.name:focus,.name:target {
  border-bottom: 2px solid darkgray;
}
.striked-true {
  font-weight: normal;
  text-decoration: line-through;
  font-weight: normal;
  color: grey;
  cursor: pointer;
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
    deleteTask: function(id) {
      this.$emit('deleteTask',id);
    },
    toggleCheck: function(id) {
      this.$emit('toggleCheck',id)
    },
    editTask: function(e) {
      const id = e.target.getAttribute('id')
      console.log('edit',id,e.target.value)
      const match = this.list.find(task => task._id == id)
      if (e.target.value != match.typedText) {
        this.$emit('editEntry',id,e.target.value)
      }
    },
    reloadList: function() {
      this.$emit('refresh',{})
    }
  }
};
</script>
