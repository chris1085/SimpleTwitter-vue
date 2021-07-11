<template>
  <div>
    <ul class="tweets">
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
      <li class="tweet d-flex">
        <div class="tweet-img-container">
          <img
            src="https://fakeimg.pl/50x50"
            alt=""
            class="tweet-img rounded"
          />
        </div>
        <div class="tweet-content-container d-flex flex-column">
          <div class="tweet-header d-flex">
            <span class="tweet-userName">Apple</span
            ><span class="tweet-userInfo">@apple・3小時</span>
          </div>
          <span class="tweet-replyFormat" v-if="isReplyPage"
            >回覆<a class="ml-1" href="">@apple</a></span
          >
          <p class="tweet-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            nihil iure molestiae nostrum nisi atque voluptates assumenda labore
            explicabo sunt?
          </p>
          <div class="tweet-icons-container d-flex">
            <a
              href=""
              class="tweet-icon"
              data-bs-toggle="modal"
              data-bs-target="#repliedModal"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
    </ul>
    <RepliedModal />
  </div>
</template>

<script>
import RepliedModal from '../components/RepliedModal.vue'

export default {
  name: 'MainTweetsCard',
  components: { RepliedModal },
  props: {
    isReplyPage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>

<style lang="scss" scoped></style>
