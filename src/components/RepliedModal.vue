<template>
  <div>
    <div
      class="modal fade"
      id="repliedModal"
      tabindex="-1"
      aria-labelledby="repliedModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fas fa-times fa-lg"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex replyModal-container">
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
                <span class="tweet-replyFormat"
                  >回覆<a class="ml-1" href="">@apple</a></span
                >
                <p class="tweet-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa nihil iure molestiae nostrum nisi atque voluptates
                  assumenda labore explicabo sunt?
                </p>
                <span class="tweet-replyFormat"
                  >回覆<a class="ml-1" href="">@apple</a></span
                >
              </div>
            </div>
            <div class="d-flex replyModal-container">
              <div class="tweet-img-container">
                <img
                  src="https://fakeimg.pl/50x50"
                  alt=""
                  class="tweet-img rounded"
                />
              </div>
              <div class="tweet-content-container d-flex flex-column">
                <p class="tweet-content replyModal-content">
                  推你的回覆
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-tweet">
              回覆
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
