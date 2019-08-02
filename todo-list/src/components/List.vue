<template>
  <md-list>
      <md-list-item class="entry flex-row" v-for="(i, index) of list" :key="index">
        <div class="s8">
          <span>{{i.typedText}}</span>
        </div>
        <div class="">
          <button>
            Edit
          </button>
          <button>
            Del
          </button>
        </div>
      </md-list-item>
    </md-list>
</template>

<style>
.s8 {
  width: 80%;
}

ul {
  list-style-type: none;
  padding: 0;
}
.entry {
  display: block;
  border-top: 1px solid rgba(0,0,0,.3);
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
  }
};
</script>
