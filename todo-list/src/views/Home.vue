<template>
  <div class="home flex-row jcc">
    <md-card class="elem flex-grow-1">
      <Weather />
    </md-card>
    <md-card class="elem flex-grow-5">
      <Todo />
    </md-card>
  </div>
</template>

<style>
  div.home {
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
  }

  .elem {
    margin: 8px;
  }

/* Text align */
  .tal {text-align: left;}
  .tac {text-align: center;}
  .tar {text-align:right;}
  .taj {text-align: justify}
/* Flexbox */
  .flex-col, .flex-row {display: flex;}
  .flex-col {flex-direction: column;}
  .flex-row {flex-direction: row;}
  .jcc {justify-content: center;}
  .jcfs {justify-content: flex-start;}
  .jcfe {justify-content: flex-start;}
  .jcsa {justify-content: space-around;}
  .jcsb {justify-content: space-between;}
  .jcse {justify-content: space-evenly;}
  .flex-grow-1 {flex-grow:1}
  .flex-grow-2 {flex-grow:2}
  .flex-grow-3 {flex-grow:3}
  .flex-grow-4 {flex-grow:4}
  .flex-grow-5 {flex-grow:5}
  .flex-grow-6 {flex-grow:6}
  .flex-grow-7 {flex-grow:7}
  .flex-grow-8 {flex-grow:8}
  .flex-grow-9 {flex-grow:9}
  .flex-grow-10 {flex-grow:10}
</style>

<script>
import Todo from '@/components/todo/Todo'
import Weather from '@/components/weather/Weather'

export default {
  name: 'home',
  components: {
    Todo,
    Weather
  }
};
</script>
