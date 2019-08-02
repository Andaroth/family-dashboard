<template>
  <ul id="list">
      <li class="entryXXX" v-for="(i, index) of list" :key="index">
        <div class="col 8s">
          <span>{{i.typedText}}</span>
        </div>
        <div class="col 2s">
          <button>
            Edit
          </button>
          <button>
            Del
          </button>
        </div>
      </li>
    </ul>
</template>


<script>
import axios from 'axios'

export default {
  name: 'List',
  props: {
    list: {type:Array},
  }
};
</script>
