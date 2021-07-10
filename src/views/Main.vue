<template>
  <div class="d-flex">
    <!-- <SideNavBar /> -->
    <SideNavBarDC />
    <section>
      <header><h3 class="font-bold">首頁</h3></header>
      <div class="main-tweet">
        <div class="content d-flex">
          <img class="content-img" src="https://fakeimg.pl/50x50/" alt="" />
          <p class="content-text">有什麼新鮮事？</p>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary btn-tweet">推文</button>
        </div>
      </div>
      <MainTweetsCard :is-reply-page="isReplyPage" />
    </section>

    <FollowingsCard />
  </div>
</template>

<script>
import MainTweetsCard from '../components/MainTweetsCard.vue'
import FollowingsCard from '../components/FollowingsCard.vue'
// import SideNavBar from '../components/SideNavBar.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'

export default {
  name: 'MainTweetsPage',
  components: {
    MainTweetsCard,
    FollowingsCard,
    // SideNavBar,
    SideNavBarDC
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
