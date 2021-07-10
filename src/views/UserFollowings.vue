<template>
  <div class="d-flex">
    <SideNavBarDC />

    <div>
      <header class="">
        <div class="d-flex align-items-center">
          <a href="#" class="leftArrow"><i class="fas fa-arrow-left"></i></a>
          <div class="header-title">
            <h3 class="font-bold">John Doe</h3>
            <span class="subInfo">25推文</span>
          </div>
        </div>
      </header>
      <ul class="followMenu d-flex">
        <li
          class="followMenu-item"
          :class="{ followActive: selected === 'followers' }"
          @click="selected = 'followers'"
        >
          跟隨者
        </li>
        <li
          class="followMenu-item"
          :class="{ followActive: selected === 'followings' }"
          @click="selected = 'followings'"
        >
          正在跟隨
        </li>
      </ul>

      <UserFollowersCard v-if="selected === 'followers'" />
      <UserFollowingsCard v-if="selected === 'followings'" />
    </div>
    <FollowingsCardDC />
  </div>
</template>

<script>
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import FollowingsCardDC from '../components/FollowingsCardDC.vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'

export default {
  name: 'UserFollowings',
  components: {
    UserFollowingsCard,
    UserFollowersCard,
    FollowingsCardDC,
    SideNavBarDC
  },
  data() {
    return {
      selected: 'followings'
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 6px 20px 10px 20px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}
</style>
