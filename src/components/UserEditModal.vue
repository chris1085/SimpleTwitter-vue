<template>
  <div>
    <div
      class="modal fade editModal"
      id="editModal"
      tabindex="-1"
      aria-labelledby="editModalLabel"
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

            <span class="ml-8 font-bold">編輯個人資料</span>
            <button type="submit" class="btn btn-primary btn-save">
              儲存
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="img-container">
                <img class="coverImg" src="https://fakeimg.pl/598x200" alt="" />

                <div class="photo position-absolute rounded">
                  <img
                    class="rounded"
                    src="https://fakeimg.pl/120x120"
                    alt=""
                  />

                  <span class="edit-camera text-white"
                    ><i class="fas fa-camera fa-2x"></i
                  ></span>
                </div>

                <span class="edit-camera text-white"
                  ><i class="fas fa-camera fa-2x"></i
                ></span>
                <span class="edit-across text-white"
                  ><i class="fas fa-times fa-2x"></i
                ></span>
              </div>
              <div class="edit-content-container">
                <div class="title-container">
                  <h3 class="title">名稱</h3>
                  <input
                    type="text"
                    class="title-name"
                    placeholder="John Doe"
                  />
                </div>
                <span class="text-count">8/50</span>

                <div class="selfIntro-container">
                  <textarea
                    type="text"
                    class="selfIntro"
                    placeholder="自我介紹"
                  />
                </div>
                <span class="text-count">0/160</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
