<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <div v-if="!isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  // props: ['path', 'activeColor'],
  props: {
    path: String,
    activeColor: {
      //type: [String, Number]
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isactive: true
    }
  },

  components: {},

  computed: {
    isactive() {
      // if (this.$route.path.indexOf(this.path) !== -1) {
      //   return true
      // } else {
      //   return false
      // }
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {}
    }
  },

  mounted() {},

  methods: {
    itemClick() {
      this.$router.push(this.path)
      // console.log('wcxshishen')
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6f6;
  font-size: 14px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>