<template>
  <div id="AdminUsers">
    <template>
      <!-- AdminSidebar.vue -->
      <AdminSidebar />
      <!-- AdminUsersCard.vue -->
      <div class="AdminUsersPanel">
        <div class="title">
          <h1>使用者列表</h1>
        </div>
        <!-- <div class="admin-users-card d-flex flex-wrap"> -->
        <AdminUsersCard
          :admin-users="adminUsers"
          class="admin-users-card d-flex flex-wrap"
        />
        <!-- </div> -->
      </div>
    </template>
  </div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminUsersCard from '../components/AdminUsersCard.vue'
import { Toast } from '../utils/helpers'
import usersAPI from '../apis/users'

export default {
  name: 'AdminUsers',
  components: {
    AdminSidebar,
    AdminUsersCard
  },
  data() {
    return {
      user: {
        id: -1,
        account: '',
        name: '',
        avatar: '',
        cover: '',
        tweetCount: '',
        likedCount: '',
        followingCount: '',
        followerCount: ''
      },
      adminUsers: [],
      isLoading: true
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTotalUser()

        this.adminUsers = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
#AdminUsers {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.AdminUsersPanel {
  flex: 1;
}
.admin-users-card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
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
