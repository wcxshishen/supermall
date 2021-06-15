<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  flex-direction: row;

  position: fixed;
  /* 保证占据整个宽度 */
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -1px 5px rgba(100, 100, 100, 0.3);
}
</style>