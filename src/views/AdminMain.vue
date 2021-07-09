<template>
    <div id="AdminMain">
        <!-- AdminSidebar -->
        <AdminSidebar />
        <!-- AdminTweetsList -->
        <div class="AdminTweetsPanel">
            <div class="title">
                <h1>推文清單</h1>
            </div>
            <AdminTweetsList />
        </div>
    </div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminTweetsList from '../components/AdminTweetsList.vue'

export default {
  name: 'AdminMain',
  components: {
    AdminSidebar,
    AdminTweetsList
  }
}
</script>

<style scoped>
#AdminMain {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: auto;
}
.AdminTweetsPanel {
  flex: 1;
  min-height: 100vh;
}
.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
}
.title h1 {
  font-size: 19px;
  font-weight: 700;
  padding: 13px 0 14px 23px;
  margin: 0;
}
</style>
