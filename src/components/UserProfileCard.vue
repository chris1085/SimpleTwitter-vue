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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
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
            <a href="#" class="tweet-icon" v-if="!initIsFavorite"
              ><i class="far fa-heart mr-3"></i>76</a
            >
            <a href="#" class="tweet-icon pink" v-if="initIsFavorite"
              ><i class="fa fa-heart mr-3 pink"></i>76</a
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    initIsFavorite: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      isFavorite: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
