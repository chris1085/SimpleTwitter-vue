<template>
  <div>
    <ul class="follows w-100" v-if="follows.length > 0">
      <li class="follow d-flex" v-for="(follow, index) in follows" :key="index">
        <div class="follow-img-container">
          <img
            :src="follow.avatar | emptyImage"
            alt=""
            class="follow-img rounded"
          />
        </div>
        <div class="follow-content-container d-flex flex-column">
          <div class="follow-header">
            <span class="follow-userName">{{ follow.name }}</span>
          </div>
          <span class="follow-userId">@{{ follow.account }}</span>
          <p class="follow-intro">
            {{ follow.introduction }}
          </p>

          <div class="btn-container">
            <!-- <button class="btn btn-primary btn-follow">正在跟隨</button> -->
            <button
              type="button"
              class="btn btn-primary btn-follow"
              v-if="
                follow.isFollowed &&
                  follow.followerId !== currentUser.id &&
                  follow.followingId !== currentUser.id
              "
              @click.stop.prevent="deleteFollowing(follow)"
            >
              正在跟隨
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-follow"
              v-if="
                !follow.isFollowed &&
                  follow.followerId !== currentUser.id &&
                  follow.followingId !== currentUser.id
              "
              @click.stop.prevent="addFollowing(follow)"
            >
              跟隨
            </button>
          </div>
        </div>
      </li>
    </ul>
    <h3 class="text-center mt-3" v-if="follows.length === 0">
      目前沒有跟蹤名單喔！
    </h3>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter, dateFilter } from '../utils/mixins'
import { mapState } from 'vuex'

export default {
  props: {
    initFollows: {
      type: Array,
      required: true
    }
  },
  mixins: [emptyImageFilter, dateFilter],

  watch: {
    initFollows(newValue) {
      this.follows = newValue
    }
  },
  data() {
    return {
      follows: []
    }
  },
  methods: {
    async addFollowing(follow) {
      try {
        const id =
          typeof follow.followerId !== 'undefined'
            ? follow.followerId
            : follow.followingId

        const { data } = await usersAPI.addFollowing({ userId: id })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        follow.isFollowed = true
        this.$emit('after-click-follow', {
          id,
          isFollowed: true
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法追隨，請稍後再試'
        })
      }
    },
    async deleteFollowing(follow) {
      try {
        const id =
          typeof follow.followerId !== 'undefined'
            ? follow.followerId
            : follow.followingId

        const { data } = await usersAPI.deleteFollowing({ userId: id })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        follow.isFollowed = false

        this.$emit('after-click-follow', {
          id,
          isFollowed: false
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>
