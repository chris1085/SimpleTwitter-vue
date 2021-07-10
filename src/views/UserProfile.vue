<template>
  <div class="d-flex">
    <SideNavBarDC />

    <div>
      <user-profile-info />
      <user-profile-Nav
        @changeNavPage="changeNavPage"
        @changeNavPageTweeter="changeNavPage"
      />
      <user-profile-card :init-is-favorite="isFavorite" />
    </div>

    <FollowingsCardDC />
  </div>
</template>

<script>
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfileNav from '../components/UserProfileNav.vue'
import UserProfileCard from '../components/UserProfileCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'

export default {
  name: 'UserProfile',
  components: {
    UserProfileInfo,
    UserProfileNav,
    UserProfileCard,
    FollowingsCardDC,
    SideNavBarDC
  },
  data() {
    return {
      isFavorite: false
    }
  },
  methods: {
    changeNavPage(selected) {
      if (selected === 'favorites') {
        this.isFavorite = true
      } else {
        this.isFavorite = false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
