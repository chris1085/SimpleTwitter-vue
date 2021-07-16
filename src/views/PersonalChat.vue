<template>
  <div>
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    />
    <SideNavBarDC @after-create-tweet="updateTweetCard" />
  </div>
</template>

<script>
import SideNavBarDC from '../components/SideNavBarDC.vue'
import { emptyImageFilter } from '../utils/mixins'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'MainTweetsPage',
  mixins: [emptyImageFilter],
  components: {
    Loading,
    SideNavBarDC
  },
  data() {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    updateTweetCard() {}
  }
}
</script>
