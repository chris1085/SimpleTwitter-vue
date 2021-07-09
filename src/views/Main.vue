<template>
  <div>
    <header><h3 class="font-bold">首頁</h3></header>
    <section class="main-tweet">
      <FollowingsCard />
      <div class="content d-flex">
        <img class="content-img" src="https://fakeimg.pl/50x50/" alt="" />
        <p class="content-text">有什麼新鮮事？</p>
      </div>
      <div class="btn-container">
        <button class="btn btn-primary btn-tweet">推文</button>
      </div>
    </section>
    <MainTweetsCard :is-reply-page="isReplyPage" />
  </div>
</template>

<script>
import MainTweetsCard from '../components/MainTweetsCard.vue'
import FollowingsCard from '../components/FollowingsCard.vue'

export default {
  name: 'MainTweetsPage',
  components: {
    MainTweetsCard,
    FollowingsCard
  },
  data() {
    return {
      isReplyPage: false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}
</style>
