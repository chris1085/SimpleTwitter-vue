<template>
  <div>
    <user-profile-info />
    <user-profile-Nav
      @changeNavPage="changeNavPage"
      @changeNavPageTweeter="changeNavPage"
    />
    <user-profile-card :init-is-favorite="isFavorite" />
  </div>
</template>

<script>
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfileNav from '../components/UserProfileNav.vue'
import UserProfileCard from '../components/UserProfileCard.vue'

export default {
  name: 'UserProfile',
  components: { UserProfileInfo, UserProfileNav, UserProfileCard },
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
