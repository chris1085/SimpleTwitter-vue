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
            <a href="#" class="tweet-icon"
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
            <a href="#" class="tweet-icon"
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
            <a href="#" class="tweet-icon"
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
            <a href="#" class="tweet-icon"
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
            <a href="#" class="tweet-icon"
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
            <a href="#" class="tweet-icon"
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
            <a href="#" class="tweet-icon"
              ><i class="far fa-comment mr-3"></i>13</a
            >
            <a href="#" class="tweet-icon"
              ><i class="far fa-heart mr-3"></i>76</a
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainTweetsCard',
  props: {
    isReplyPage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
