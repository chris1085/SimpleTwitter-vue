<template>
  <div class="followingsCard-container">
    <div class="followingsCard">
      <h3 class="followings-title">跟隨誰</h3>
      <ul class="followingList">
        <li
          class="following-item d-flex justify-content-between"
          v-for="topUser in users"
          :key="topUser.id"
        >
          <router-link
            :to="`/user/${topUser.id}`"
            class="following-info-container d-flex"
            href=""
          >
            <img
              class="following-img rounded"
              :src="topUser.avatar | emptyImage"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">{{ topUser.name }}</h4>
              <span class="following-id">@{{ topUser.account }}</span>
            </div>
          </router-link>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              type="button"
              class="btn btn-primary btn-followingsCard"
              v-if="topUser.isFollowed && currentUser.id !== topUser.id"
              @click.stop.prevent="deleteFollowing(topUser.id)"
            >
              正在跟隨
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!topUser.isFollowed && currentUser.id !== topUser.id"
              @click.stop.prevent="addFollowing(topUser.id)"
            >
              跟隨
            </button>
          </div>
        </li>
      </ul>

      <a
        class="more"
        href="#"
        @click.stop.prevent="isMore = !isMore"
        v-if="!isMore"
        >顯示更多</a
      >
      <span class="more" v-if="isMore && users.length <= 5"
        >目前沒有更多使用者</span
      >

      <ul class="followingList" v-if="isMore && users.length > 5">
        <li
          class="following-item d-flex justify-content-between"
          v-for="topUser in users"
          :key="topUser.id"
        >
          <router-link
            :to="`/user/${topUser.id}`"
            class="following-info-container d-flex"
            href=""
          >
            <img
              class="following-img rounded"
              :src="topUser.avatar | emptyImage"
              alt=""
            />
            <div
              class="following-info d-flex flex-column justify-content-center"
            >
              <h4 class="following-name">{{ topUser.name }}</h4>
              <span class="following-id">@{{ topUser.account }}</span>
            </div>
          </router-link>
          <div class="btn-followingsCard-container d-flex align-items-center">
            <button
              type="button"
              class="btn btn-primary btn-followingsCard"
              v-if="topUser.isFollowed && currentUser.id !== topUser.id"
              @click.stop.prevent="deleteFollowing(topUser.id)"
            >
              正在跟隨
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-outline-followingsCard"
              v-if="!topUser.isFollowed && currentUser.id !== topUser.id"
              @click.stop.prevent="addFollowing(topUser.id)"
            >
              跟隨
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initTopUsers: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  mixins: [emptyImageFilter],
  watch: {
    initTopUsers(newValue) {
      this.users = [...this.users, ...newValue]
    }
  },
  data() {
    return {
      users: this.initTopUsers,
      isMore: false
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法追隨，請稍後再試'
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        console.log(userId, { userId })
        const { data } = await usersAPI.deleteFollowing({ userId })

        console.log('data', data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error
        })
      }
    }
  }
}
</script>
