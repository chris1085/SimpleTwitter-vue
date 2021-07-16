<template>
  <div class="d-flex">
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />

    <SideNavBarDC @after-create-tweet="updateTweetCard" />

    <div class="userProfile-container w-100">
      <user-profile-info :init-user="user" />
      <user-profile-Nav
        :init-selected="selected"
        @changeNavPage="changeNavPage"
      />
      <user-profile-card
        :user-card-content="userCardContent"
        :selected="selected"
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
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfileNav from '../components/UserProfileNav.vue'
import UserProfileCard from '../components/UserProfileCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter, dateFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'UserProfile',
  mixins: [emptyImageFilter, dateFilter],
  components: {
    UserProfileInfo,
    UserProfileNav,
    UserProfileCard,
    FollowingsCardDC,
    SideNavBarDC,
    Loading
  },
  data() {
    return {
      topUsers: [],
      user: {
        id: -1,
        account: '',
        avatar: '',
        cover: '',
        followerCount: 0,
        followingCount: 0,
        introduction: '',
        isFollowed: false,
        name: '',
        tweetCount: 0
      },
      userCardContent: [],
      selected: 'tweeters',
      isLoading: false,
      fullPage: true
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.getUser(to.params.id)
    this.changeNavPage(this.selected)
    this.selected = 'tweeters'
    this.getUserTweets(to.params.id)
    // this.getRepies(to.params.id)

    next()
  },
  watch: {
    userCardContent(newValue) {
      this.userCardContent = newValue
    }
  },
  methods: {
    changeUserPage(selected, userId) {
      this.selected = selected
      if (selected === 'tweeters') {
        this.getUserTweets(userId)
      } else if (selected === 'replies') {
        this.getUserRepliedTweets(userId)
      } else {
        this.getUserLikeTweets(userId)
      }
    },
    changeNavPage(selected) {
      this.selected = selected
      if (selected === 'tweeters') {
        this.getUserTweets(this.user.id)
      } else if (selected === 'replies') {
        this.getUserRepliedTweets(this.user.id)
      } else {
        this.getUserLikeTweets(this.user.id)
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
    async getUserTweets(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUserTweets(userId)

        this.userCardContent = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法取得推文內容'
        })
      }
    },
    async getUserRepliedTweets(userId) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.getUserRepliedTweets(userId)
        this.userCardContent = data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法取得回覆推文內容'
        })
      }
    },
    async getUserLikeTweets(userId) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.getUserLikeTweets(userId)
        this.userCardContent = data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法取得喜愛推文內容'
        })
      }
    },
    async getUser(userId) {
      try {
        this.isLoading = true

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

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    updateFollowing(topUserId) {
      const { id } = this.$route.params

      if (this.user.id === this.currentUser.id) {
        this.user.followingCount -= 1
      } else if (topUserId === parseInt(id)) {
        this.user.isFollowed = false
        this.user.followerCount -= 1
      }
    },
    updateFollower(topUserId) {
      const { id } = this.$route.params

      if (this.user.id === this.currentUser.id) {
        this.user.followingCount += 1
      } else if (topUserId === parseInt(id)) {
        this.user.followerCount += 1
        this.user.isFollowed = true
      }
    },
    updateTweetCard() {}
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  created() {
    const { id } = this.$route.params
    this.getTopUser()
    this.getUser(id)
    this.getUserTweets(id)
  }
}
</script>

<style lang="scss" scoped></style>
