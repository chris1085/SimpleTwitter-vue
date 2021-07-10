<template>
  <div>
    <div
      class="modal fade"
      id="newTweetModal"
      tabindex="-1"
      aria-labelledby="newTweetModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content newTweet-modal-content">
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
            <div class="content d-flex">
              <img class="content-img" src="https://fakeimg.pl/50x50/" alt="" />
              <p class="content-text">有什麼新鮮事？</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-tweet">
              推文
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
