<template>
  <div class="d-flex">
    <SideNavBarDC
      :currentUser="currentUser"
      @after-create-tweet="updateTweetCard"
    />

    <div class="userFollower-container w-100">
      <header class="">
        <div class="d-flex align-items-center">
          <router-link :to="`/user/${user.id}`" class="leftArrow"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
          <div class="header-title">
            <h3 class="font-bold">{{ user.name }}</h3>
            <span class="subInfo">{{ user.tweetCount }}推文</span>
          </div>
        </div>
      </header>
      <ul class="followMenu d-flex">
        <li
          class="followMenu-item"
          :class="{ followActive: selected === 'UserFollowers' }"
          @click.stop.prevent="fetchFollowed('UserFollowers', user.id)"
        >
          跟隨者
        </li>
        <li
          class="followMenu-item"
          :class="{ followActive: selected === 'UserFollowings' }"
          @click.stop.prevent="fetchFollowed('UserFollowings', user.id)"
        >
          正在跟隨
        </li>
      </ul>

      <UserFollowCard :init-follows="follows" />
    </div>

    <FollowingsCardDC :init-top-users="topUsers" :current-user="currentUser" />
  </div>
</template>

<script>
import UserFollowCard from '../components/UserFollowCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter, dateFilter } from '../utils/mixins'

export default {
  name: 'UserFollowers',
  mixins: [emptyImageFilter, dateFilter],
  components: {
    UserFollowCard,
    FollowingsCardDC,
    SideNavBarDC
  },
  data() {
    return {
      selected: 'followers',
      topUsers: [],
      currentUser: {
        avatar: '',
        id: -1,
        name: '',
        account: ''
      },
      user: {
        id: -1,
        account: '',
        avatar: '',
        cover: '',
        followerCount: 1,
        followingCount: 0,
        introduction: '',
        isFollowed: false,
        name: '',
        tweetCount: 0
      },
      follows: []
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.getUser(to.params.id)
    // this.getRepies(to.params.id)

    next()
  },
  methods: {
    async getCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser()
        const { avatar, id, name, account } = response.data
        this.currentUser = {
          avatar,
          id,
          name,
          account
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得當前使用者，請稍後再試'
        })
      }
    },
    async getTopUser() {
      try {
        const response = await usersAPI.getTopUsers()
        this.topUsers = response.data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得Top跟隨者'
        })
      }
    },
    async getUser(userId) {
      try {
        const { data } = await usersAPI.get(userId)

        const {
          id,
          account,
          avatar,
          cover,
          followerCount,
          followingCount,
          introduction,
          isFollowed,
          name,
          tweetCount
        } = data

        this.user = {
          id,
          account,
          avatar,
          cover,
          followerCount,
          followingCount,
          introduction,
          isFollowed,
          name,
          tweetCount
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    async fetchFollowed(followType, userId) {
      try {
        this.selected = followType
        const functionName =
          followType === 'UserFollowings' ? 'getFollowings' : 'getFollowers'
        const { data } = await usersAPI[functionName](userId)

        this.follows = data.message ? [] : data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得跟隨資料，請稍後再試'
        })
      }
    },
    updateTweetCard() {}
  },
  created() {
    const { name } = this.$route
    const { id } = this.$route.params
    this.selected = name
    this.fetchFollowed(name, id)
    this.getTopUser()
    this.getCurrentUser()
    this.getUser(id)
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 6px 20px 10px 20px;
}
</style>
