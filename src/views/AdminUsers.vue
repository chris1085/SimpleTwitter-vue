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
        <div class="admin-users-card">
          <AdminUsersCard />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminUsersCard from '../components/AdminUsersCard.vue'

export default {
  name: 'AdminUsers',
  components: {
    AdminSidebar,
    AdminUsersCard
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
