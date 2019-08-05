<template>
  <div :class="'spinner-container tac active-'+this.active">&#10084;</div>
</template>
<style>
  @keyframes beat {
    0% {transform: scale(.7);}
    20%{transform: scale(.7);}
    30%{transform: scale(1);}
    40%{transform: scale(.7);}
    100% {transform: scale(.7);}
  }
  .spinner-container {
    animation: beat 1s infinite;
    position: absolute;
    transition: transform ease-in-out 1s;
    pointer-events: none;
    opacity: 0;
    font-size: 64px;
  }
  .spinner-container.active-true { opacity: .5; }
</style>
<script>
export default {
  name: 'Spinner',
  props: {active: Boolean}
};
</script>
