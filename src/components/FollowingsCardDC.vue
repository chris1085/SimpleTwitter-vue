<template>
  <div class="followingsCard-container">
    <div class="followingsCard">
      <h3 class="followings-title">跟隨誰</h3>
      <ul class="followingList">
        <li class="following-item d-flex justify-content-between">
          <a class="following-info-container d-flex" href="">
            <img
              class="following-img rounded"
              src="https://fakeimg.pl/50x50"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">PizzaHut</h4>
              <span class="following-id">@pizzahut</span>
            </div>
          </a>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              class="btn btn-primary btn-followingsCard"
              v-if="isFollowing"
            >
              正在跟隨
            </button>
            <button
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!isFollowing"
            >
              跟隨
            </button>
          </div>
        </li>
        <li class="following-item d-flex justify-content-between">
          <a class="following-info-container d-flex" href="">
            <img
              class="following-img rounded"
              src="https://fakeimg.pl/50x50"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">PizzaHut</h4>
              <span class="following-id">@pizzahut</span>
            </div>
          </a>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              class="btn btn-primary btn-followingsCard"
              v-if="isFollowing"
            >
              正在跟隨
            </button>
            <button
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!isFollowing"
            >
              跟隨
            </button>
          </div>
        </li>
        <li class="following-item d-flex justify-content-between">
          <a class="following-info-container d-flex" href="">
            <img
              class="following-img rounded"
              src="https://fakeimg.pl/50x50"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">PizzaHut</h4>
              <span class="following-id">@pizzahut</span>
            </div>
          </a>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              class="btn btn-primary btn-followingsCard"
              v-if="isFollowing"
            >
              正在跟隨
            </button>
            <button
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!isFollowing"
            >
              跟隨
            </button>
          </div>
        </li>
        <li class="following-item d-flex justify-content-between">
          <a class="following-info-container d-flex" href="">
            <img
              class="following-img rounded"
              src="https://fakeimg.pl/50x50"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">PizzaHut</h4>
              <span class="following-id">@pizzahut</span>
            </div>
          </a>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              class="btn btn-primary btn-followingsCard"
              v-if="isFollowing"
            >
              正在跟隨
            </button>
            <button
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!isFollowing"
            >
              跟隨
            </button>
          </div>
        </li>
        <li class="following-item d-flex justify-content-between">
          <a class="following-info-container d-flex" href="">
            <img
              class="following-img rounded"
              src="https://fakeimg.pl/50x50"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">PizzaHut</h4>
              <span class="following-id">@pizzahut</span>
            </div>
          </a>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              class="btn btn-primary btn-followingsCard"
              v-if="isFollowing"
            >
              正在跟隨
            </button>
            <button
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!isFollowing"
            >
              跟隨
            </button>
          </div>
        </li>
        <li class="following-item d-flex justify-content-between">
          <a class="following-info-container d-flex" href="">
            <img
              class="following-img rounded"
              src="https://fakeimg.pl/50x50"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">PizzaHut</h4>
              <span class="following-id">@pizzahut</span>
            </div>
          </a>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              class="btn btn-primary btn-followingsCard"
              v-if="isFollowing"
            >
              正在跟隨
            </button>
            <button
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!isFollowing"
            >
              跟隨
            </button>
          </div>
        </li>
      </ul>

      <a class="more" href="#">顯示更多</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFollowing: true
    }
  }
}
</script>
