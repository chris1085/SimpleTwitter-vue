<template>
  <div class="d-flex">
    <SideNavBarDC
      :currentUser="currentUser"
      @after-create-tweet="updateTweetCard"
    />

    <div class="userProfile-container w-100">
      <user-profile-info :init-user="user" :current-user="currentUser" />
      <user-profile-Nav
        :init-selected="selected"
        @changeNavPage="changeNavPage"
      />
      <user-profile-card
        :user-card-content="userCardContent"
        :current-user="currentUser"
        :selected="selected"
      />
    </div>

    <FollowingsCardDC
      :init-top-users="topUsers"
      :current-user="currentUser"
      @after-create-comment="updateTweetCard"
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

export default {
  name: 'UserProfile',
  mixins: [emptyImageFilter, dateFilter],
  components: {
    UserProfileInfo,
    UserProfileNav,
    UserProfileCard,
    FollowingsCardDC,
    SideNavBarDC
  },
  data() {
    return {
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
      userCardContent: [],
      selected: 'tweeters'
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
    async getUserTweets(userId) {
      try {
        const { data } = await usersAPI.getUserTweets(userId)
        this.userCardContent = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文內容'
        })
      }
    },
    async getUserRepliedTweets(userId) {
      try {
        const { data } = await usersAPI.getUserRepliedTweets(userId)
        this.userCardContent = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得回覆推文內容'
        })
      }
    },
    async getUserLikeTweets(userId) {
      try {
        const { data } = await usersAPI.getUserLikeTweets(userId)
        this.userCardContent = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得喜愛推文內容'
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
    updateTweetCard() {}
  },
  created() {
    const { id } = this.$route.params
    this.getTopUser()
    this.getCurrentUser()
    this.getUser(id)
    this.getUserTweets(id)
  }
}
</script>

<style lang="scss" scoped></style>
