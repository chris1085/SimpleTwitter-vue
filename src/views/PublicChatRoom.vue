<template>
  <div>
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    />
    <SideNavBarDC @after-create-tweet="updateTweetCard" />

    <section class="chat-container d-flex">
      <div class="onlineUser-container col-0 col-md-3 col-lg-4">
        <h3 class="header text-bold">
          上線使用者 ({{ activeUsers.activeUsersCount }})
        </h3>
        <ul class="user-list">
          <li
            class="user-item d-flex align-items-center flex-wrap"
            v-for="user in activeUsers.activeUsers"
            :key="user.id"
          >
            <router-link
              :to="`/user/${user.id}`"
              class="user-img-container mr-3"
            >
              <img
                :src="user.avatar | emptyImage"
                alt=""
                class="user-img rounded"
              />
            </router-link>
            <router-link
              :to="`/user/${user.id}`"
              class="user-name font-bold mr-2"
              >{{ user.name }}</router-link
            ><span class="user-account">@{{ user.account }}</span>
          </li>
        </ul>
      </div>
      <div class="chatroom col-12 col-md-9 col-lg-8">
        <h3 class="header text-bold">公開聊天室</h3>
        <div class="chat-content-container d-flex flex-column" ref="chatroom">
          <div
            class="w-100 d-flex flex-column"
            v-for="(msg, index) in msgList"
            :key="'message' + index"
          >
            <div
              class="chat-left-container"
              v-if="msg.UserId && currentUser.id !== msg.UserId"
            >
              <div class="chat-left d-flex my-3">
                <router-link
                  :to="`/user/${msg.UserId}`"
                  class="img-container h-100 my-auto"
                >
                  <img
                    class="chat-img rounded mr-3"
                    :src="msg.avatar | emptyImage"
                    alt=""
                    srcset=""
                  />
                </router-link>

                <div class="chat-message-container">
                  <p class="chat-message">
                    {{ msg.content }}
                  </p>
                  <div class="chat-time">
                    {{ msg.createdAt | hourMinDate }}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="w-100 d-flex justify-content-end"
              v-if="msg.UserId && currentUser.id === msg.UserId"
            >
              <div class="chat-right d-flex my-3 chat-right-container">
                <div class="chat-message-container">
                  <p class="chat-message">
                    {{ msg.content }}
                  </p>
                  <span class="chat-time text-right">{{
                    msg.createdAt | hourMinDate
                  }}</span>
                </div>
              </div>
            </div>

            <div class="w-100 chat-info text-center" v-if="msg.noti">
              <span class="chat-info-content">{{ msg.noti }}</span>
            </div>
          </div>

          <!-- <div class="typing" v-if="message !== ''">正在輸入訊息...</div> -->
        </div>
        <div
          class="chat-submit-container input-group d-flex justify-content-between align-content-center"
        >
          <input
            type="text"
            class="form-control input-send .btn-default:active:focus"
            placeholder="輸入訊息..."
            aria-label="輸入訊息..."
            v-model="message"
            @keyup.enter="handleSubmit"
          />
          <div class="input-group-append">
            <button
              class="btn btn-send ml-3"
              type="submit"
              @click.stop.prevent="handleSubmit"
            >
              <font-awesome-icon
                :icon="['fas', 'chevron-circle-right']"
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import SideNavBarDC from '../components/SideNavBarDC.vue'
import chatAPI from '../apis/chat'
import { Toast } from '../utils/helpers'
import { emptyImageFilter, fromNowFilter, dateFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// npm install socket io for vue packages and import them
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
// set socket io address
const token = localStorage.getItem('token')
const socket = io('https://simpletwitter-api.herokuapp.com/', {
  query: { token: token }
})

// use socket io in vue
Vue.use(VueSocketIOExt, socket)
export default {
  name: 'PublicChatRoom',
  mixins: [emptyImageFilter, fromNowFilter, dateFilter],
  components: {
    Loading,
    SideNavBarDC
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
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
      message: '',
      msg: '',
      msgList: [],
      activeUsers: 0,
      onlineUsers: []
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated', 'topUsers'])
  },
  methods: {
    async getHistory() {
      try {
        this.isLoading = true

        const { data } = await chatAPI.getHistory()
        console.log(data)
        this.msgList = data

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得聊天室內容'
        })
      }
    },
    handleSubmit() {
      if (this.message === '') {
        return
      }

      this.$socket.client.emit('sendMessage', this.message)

      this.message = ''
    },
    scrollToEnd() {
      const content = this.$refs.chatroom
      content.scrollTop = content.scrollHeight
    },
    updateTweetCard() {}
  },
  updated() {
    this.scrollToEnd()
  },
  created() {
    this.getHistory()
  },
  mounted() {
    this.scrollToEnd()

    this.$socket.client.on('newMessage', message => {
      console.log('message:', message)
      this.msgList.push(message)
      console.log(this.msgList)
    })
    this.$socket.client.on('activeUsers', data => {
      console.log('activeUsers:', data)
      this.activeUsers = data
    })
    this.$socket.client.on('notification', data => {
      console.log('notification:', data)
      let isOnlinText = data.online ? '上線' : '離線'
      isOnlinText = data.onlineUser.name + ' ' + isOnlinText
      console.log(isOnlinText)
      this.msgList.push({
        noti: isOnlinText
      })
    })
  },
  beforeDestroy() {
    this.$socket.$unsubscribe('newMessage')
    this.$socket.$unsubscribe('activeUsers')
    this.$socket.$unsubscribe('notification')
  }
}
</script>
