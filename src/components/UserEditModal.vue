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
          <form @submit.stop.prevent="handleSubmit">
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
              <button
                type="submit"
                class="btn btn-primary btn-save"
                data-bs-dismiss="modal"
              >
                儲存
              </button>
            </div>
            <div class="modal-body">
              <div class="img-container">
                <img
                  class="coverImg"
                  :src="user.cover | emptyCoverImage"
                  alt="coverImage"
                />

                <div class="edit-photo position-absolute rounded">
                  <img
                    class="rounded edit-avatar"
                    :src="user.avatar | emptyImage"
                    alt="selfPhoto"
                  />

                  <button
                    class="btn edit-camera text-white rounded"
                    @click.stop.prevent="onPickFile('avatar')"
                  >
                    <i class="fas fa-camera fa-2x"></i>
                  </button>
                  <input
                    type="file"
                    class="d-none"
                    ref="avatarInput"
                    accept="image/*"
                    name="userAvatar"
                    @change="handleFileChange"
                  />
                </div>

                <button
                  class="btn edit-camera text-white rounded"
                  @click.stop.prevent="onPickFile('cover')"
                >
                  <i class="fas fa-camera fa-2x"></i>
                </button>
                <input
                  type="file"
                  class="d-none"
                  ref="coverInput"
                  accept="image/*"
                  name="userCover"
                  @change="handleCoverChange"
                />

                <button
                  class="btn edit-across text-white rounded"
                  @click.stop.prevent="user.cover = initUser.cover"
                >
                  <i class="fas fa-times fa-2x"></i>
                </button>
              </div>
              <div class="edit-content-container">
                <div class="title-container">
                  <h3 class="title">名稱</h3>
                  <input
                    type="text"
                    class="title-name"
                    :placeholder="user.name"
                    v-model="user.name"
                    name="userName"
                    maxlength="50"
                    required
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
                    name="userIntro"
                  />
                </div>
                <span class="text-count">{{ calcContentLength }}/160</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter, dateFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'
// import usersAPI from '../apis/users'

export default {
  name: 'UserEditModal',
  mixins: [emptyImageFilter, dateFilter],
  props: {
    initUser: { type: Object, required: true }
  },
  watch: {
    initUser(newValue) {
      this.user = JSON.parse(JSON.stringify(newValue))
    }
  },
  data() {
    return {
      user: {
        name: '',
        tempCover: ''
      },
      nameLength: 0,
      content: '',
      name: '',
      image: null
    }
  },
  methods: {
    onPickFile(imageFile) {
      if (imageFile === 'avatar') {
        this.$refs.avatarInput.click()
      } else {
        this.$refs.coverInput.click()
      }
    },
    handleFileChange(event) {
      const files = event.target.files

      if (files.length > 0) {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.avatar = imageURL
      } else {
        Toast.fire({
          icon: 'error',
          title: '無法上傳圖片，請稍後再試'
        })
      }
    },
    handleCoverChange(event) {
      const files = event.target.files

      if (files.length > 0) {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.cover = imageURL
      } else {
        Toast.fire({
          icon: 'error',
          title: '無法上傳圖片，請稍後再試'
        })
      }
    },
    async handleSubmit(e) {
      try {
        // const request = {
        //   name: this.uer.name
        //   intro: this.content,
        //   avatar: this.user.avatar,
        //   cover: this.user.cover
        // }

        // console.log(this.user.avatar, this.user.cover)
        // if (this.name === '') {
        //   this.name = this.user.name
        // }
        const form = e.target // <form></form>
        const formData = new FormData(form)

        for (const [name, value] of formData.entries()) {
          console.log(name + ': ' + value)
        }

        // const { data } = await usersAPI.updateUserProfile({
        //   userId: this.user.id,
        //   request
        // })

        // console.log(data)

        // if (data.status !== 'success') {
        //   throw new Error(data.message)
        // }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法上傳編輯資料，請稍後再試'
        })
      }
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
