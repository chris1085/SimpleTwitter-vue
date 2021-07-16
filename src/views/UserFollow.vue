<template>
  <div class="d-flex">
    <SideNavBarDC @after-create-tweet="updateTweetCard" />

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

      <UserFollowCard
        :init-follows="follows"
        @after-click-follow="updateFollowStatus"
      />
    </div>

    <FollowingsCardDC
      :init-top-users="topUsers"
      @after-delete-following="updateFollowing"
      @after-add-follower="updateFollower"
    />
  </div>
</template>

<script>
import UserFollowCard from '../components/UserFollowCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter, dateFilter } from '../utils/mixins'
import { mapState } from 'vuex'

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
    this.fetchFollowed(this.followType, to.params.id)
    this.selected = 'UserFollowers'
    // this.getRepies(to.params.id)

    next()
  },
  methods: {
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
    updateFollowing(topUserId) {
      const id = this.$route.params.id
      const intId = parseInt(id)

      if (intId === this.currentUser.id && this.selected === 'UserFollowings') {
        this.follows = this.follows.filter(follow => {
          return follow.followingId !== topUserId
        })
      }

      if (intId === topUserId && this.selected === 'UserFollowers') {
        this.follows = this.follows.filter(follow => {
          return follow.followerId !== this.currentUser.id
        })
      }
    },
    async updateFollower(topUserId) {
      try {
        const routerId = this.$route.params.id
        const intId = parseInt(routerId)

        if (intId === topUserId && this.selected === 'UserFollowers') {
          this.follows.push({
            followerId: this.currentUser.id,
            account: this.currentUser.account,
            avatar: this.currentUser.avatar,
            name: this.currentUser.name,
            introduction: this.currentUser.introduction,
            isFollowed: true
          })
        }

        if (
          intId === this.currentUser.id &&
          this.selected === 'UserFollowings'
        ) {
          const { data } = await usersAPI.get(topUserId)

          if (data.status !== 'success') {
            throw new Error(data.message)
          }

          const { id, account, avatar, introduction, name } = data

          this.follows.push({
            followingId: id,
            account,
            avatar,
            name,
            introduction,
            isFollowed: true
          })
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入喜愛使用者，請稍後再試'
        })
      }
    },
    updateFollowStatus({ id, isFollowed }) {
      this.topUsers.forEach(user => {
        if (user.id === id) {
          user.isFollowed = isFollowed
        }
      })
    },
    updateTweetCard() {}
  },
  created() {
    const { name } = this.$route
    const { id } = this.$route.params
    this.selected = name
    this.fetchFollowed(name, id)
    this.getTopUser()
    this.getUser(id)
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 6px 20px 10px 20px;
}
</style>
