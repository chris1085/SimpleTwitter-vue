<template>
  <div>
    <div class="userProfileInfo-container d-flex flex-column">
      <header class="">
        <div class="d-flex align-items-center">
          <router-link to="/main" class="leftArrow"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
          <div class="header-title">
            <h3 class="font-bold">{{ user.name }}</h3>
            <span class="subInfo">{{ user.tweetCount }}推文</span>
          </div>
        </div>
      </header>
      <div class="img-container w-100">
        <img
          class="coverImg w-100"
          :src="user.cover | emptyCoverImage"
          alt=""
        />

        <div
          class="photo position-absolute rounded d-flex justify-content-center align-items-center"
        >
          <img
            class="rounded photo-avatar"
            :src="user.avatar | emptyImage"
            alt=""
          />
        </div>
      </div>

      <div class="d-flex flex-column userProfileInfo-content-container">
        <h3 class="content-username">{{ user.name }}</h3>
        <span class="content-userId">@{{ user.account }}</span
        ><span class="content-intro">{{ user.introduction }}</span>
        <div class="follow-container d-flex">
          <router-link class="follow-link" :to="`/user/${user.id}/follow`"
            >{{ user.followingCount }} 個<span class="follow-unit"
              >跟隨中</span
            ></router-link
          ><router-link class="follow-link" :to="`/user/${user.id}/follow`"
            >{{ user.followerCount }} 位<span class="follow-unit"
              >跟隨者</span
            ></router-link
          >
        </div>

        <button
          class="btn btn-outline-primary btn-profile position-absolute"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          v-if="currentUser.id === user.id"
        >
          編輯個人資料
        </button>

        <div class="otherUser-btn-container position-absolute" v-else>
          <button class="btn btn-outline-primary btn-profile-rounded rounded">
            <i class="far fa-envelope fa-lg"></i>
          </button>
          <button class="btn btn-outline-primary btn-profile-rounded rounded">
            <i class="far fa-bell fa-lg"></i>
          </button>
          <button
            type="button"
            class="btn btn-primary btn-profile"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            正在跟隨
          </button>
          <button
            type="button"
            class="btn btn-outline-primary btn-profile"
            v-if="!user.isFollowed"
            @click.stop.prevent="addFollowing(user.id)"
          >
            跟隨
          </button>
        </div>
      </div>
    </div>
    <UserEditModal :init-user="user" @after-edit="updateUserProfile" />
  </div>
</template>

<script>
import UserEditModal from '../components/UserEditModal.vue'
// import { Toast } from '../utils/helpers'
import { emptyImageFilter, dateFilter } from '../utils/mixins'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'UserProfileInfo',
  mixins: [emptyImageFilter, dateFilter],

  props: {
    initUser: { type: Object, required: true }
  },
  watch: {
    initUser(newValue) {
      this.user = newValue
    }
  },
  components: { UserEditModal },
  data() {
    return {
      isCurrentUser: true,
      user: this.initUser,
      temp: {}
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user.followerCount += 1
        this.user.isFollowed = true
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error
          // '無法追隨，請稍後再試'
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user.followerCount -= 1
        this.user.isFollowed = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    },
    updateUserProfile(data) {
      console.log(data)
      this.user = { ...this.user, ...data }
      // console.log('temp:' + this.temp)
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 122px !important;
  height: 40px !important;
}
</style>
