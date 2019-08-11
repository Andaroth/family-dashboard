<template>
  <div class="home flex-row jcc">
    <div class="flex-col flex-grow-1">
      <md-card class="elem">
        <Todo class="Todo" />
      </md-card>
      <md-card class="elem">
        <Weather class="Weather" />
      </md-card>
    </div>
    <div class="flex-col flex-grow-4 flex-col">
      <md-card class="elem elem-calendar">
        <Calendar class="Calendar" />
      </md-card>
    </div>
  </div>
</template>

<style>
* {font-family: "Avenir", Helvetica, Arial, sans-serif;}

  div.home {
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
  }

  .elem {
    margin: 8px;
  }

  .Todo, .Weather {
    height: calc(50vh - 32px);
  }

  .elem-calendar {
    height: calc(100vh - 32px);
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
/* superpadding supermargin */
  .p08 {
    padding: 0 8px;
  }
/* Media queries */
@media screen and (max-width: 800px) {
  div.home {
    flex-direction: column;
  }
  .Todo {
    max-height: 50vh;
  }
}
</style>

<script>
import Todo from '@/components/todo/Todo'
import Weather from '@/components/weather/Weather'
import Calendar from '@/components/calendar/Calendar'

export default {
  name: 'dashboard',
  components: {
    Todo,
    Weather,
    Calendar
  }
};
</script>
