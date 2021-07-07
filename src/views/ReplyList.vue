<template>
  <div class="reply-container">
    <header class="d-flex align-items-center">
      <a href="#" class="leftArrow"><i class="fas fa-arrow-left"></i></a>
      <h3 class="font-bold">推文</h3>
    </header>
    <section class="main-tweet">
      <div class="tweet-header d-flex">
        <img
          class="content-img rounded"
          src="https://fakeimg.pl/50x50/"
          alt=""
        />
        <div class="content-user d-flex flex-column justify-content-center">
          <span class="tweet-userName">Apple</span>
          <span class="tweet-userInfo">@apple</span>
        </div>
      </div>
      <div class="reply-content-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          cupiditate reiciendis inventore cum, minus dolore rerum, atque vero
          deleniti asperiores molestias distinctio nam veritatis. Facilis libero
          accusamus totam tempore molestiae.
        </p>
        <div class="reply-contentTime-container">
          <span class="reply-contentTime">上午 10:05・2020年6月10日</span>
        </div>
        <div class="reply-userResponse d-flex">
          <div class="comments"><span>34</span> 回覆</div>
          <div class="likes"><span>808</span> 喜歡次數</div>
        </div>
        <div class="reply-userIcons-container">
          <a href="" class="reply-userIcon"
            ><i class="far fa-comment mr-3"></i
          ></a>
          <a href="" class="reply-userIcon"
            ><i class="far fa-heart mr-3"></i
          ></a>
        </div>
      </div>
    </section>
    <MainTweetsCard :is-reply-page="isReplyPage" />
  </div>
</template>

<script>
import MainTweetsCard from '../components/MainTweetsCard.vue'
export default {
  name: 'ReplyList',
  components: {
    MainTweetsCard
  },
  data() {
    return {
      isReplyPage: true
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
