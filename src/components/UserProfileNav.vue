<template>
  <div>
    <ul class="tweetMenu d-flex">
      <li
        class="tweetMenu-item text-center"
        :class="{ tweetActive: selected === 'tweeters' }"
        @click="submitTweeter()"
      >
        推文
      </li>
      <li
        class="tweetMenu-item text-center"
        :class="{ tweetActive: selected === 'replies' }"
        @click="selected = 'replies'"
      >
        推文回覆
      </li>
      <li
        class="tweetMenu-item text-center"
        :class="{ tweetActive: selected === 'favorites' }"
        @click="submitFavorite()"
      >
        喜歡的內容
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'tweeters'
    }
  },
  methods: {
    submitFavorite() {
      this.selected = 'favorites'
      this.$emit('changeNavPage', this.selected)
    },
    submitTweeter() {
      this.selected = 'tweeters'
      this.$emit('changeNavPageTweeter', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped></style>
