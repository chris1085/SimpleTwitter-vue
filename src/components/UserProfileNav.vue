<template>
  <div>
    <ul class="tweetMenu d-flex">
      <li
        class="tweetMenu-item text-center"
        :class="{ tweetActive: selected === 'tweeters' }"
        @click.stop.prevent="changeNav('tweeters')"
      >
        推文
      </li>
      <li
        class="tweetMenu-item text-center"
        :class="{ tweetActive: selected === 'replies' }"
        @click.stop.prevent="changeNav('replies')"
      >
        推文回覆
      </li>
      <li
        class="tweetMenu-item text-center"
        :class="{ tweetActive: selected === 'favorites' }"
        @click.stop.prevent="changeNav('favorites')"
      >
        喜歡的內容
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    initSelected: { type: String, required: true }
  },
  watch: {
    initSelected(newValue) {
      this.selected = newValue
    }
  },
  data() {
    return {
      selected: this.initSelected
    }
  },
  methods: {
    changeNav(selected) {
      this.selected = selected
      this.$emit('changeNavPage', selected)
    }
  }
}
</script>

<style lang="scss" scoped></style>
