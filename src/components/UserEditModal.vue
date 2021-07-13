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
                <img
                  class="coverImg"
                  :src="user.cover | emptyCoverImage"
                  alt="coverImage"
                />

                <div class="photo position-absolute rounded">
                  <img
                    class="rounded"
                    :src="user.avatar | emptyImage"
                    alt="selfPhoto"
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
                    :placeholder="user.name"
                    v-model="name"
                    maxlength="50"
                  />
                </div>
                <span class="text-count">{{ calcNameLength }}/50</span>

                <div class="selfIntro-container">
                  <textarea
                    type="text"
                    class="selfIntro"
                    placeholder="自我介紹"
                    maxlength="160"
                    v-model="content"
                  />
                </div>
                <span class="text-count">{{ calcContentLength }}/160</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter, dateFilter } from '../utils/mixins'

export default {
  name: 'UserEditModal',
  mixins: [emptyImageFilter, dateFilter],
  props: {
    initUser: { type: Object, required: true }
  },
  watch: {
    initUser(newValue) {
      this.user = newValue
      this.nameLength = this.user.name.length
    }
  },
  data() {
    return {
      user: {
        name: ''
      },
      nameLength: 0,
      content: '',
      name: ''
    }
  },
  computed: {
    calcNameLength() {
      if (this.name === '') return this.user.name.length
      else {
        return this.name.length
      }
    },
    calcContentLength() {
      return this.content.length
    }
  }
}
</script>
