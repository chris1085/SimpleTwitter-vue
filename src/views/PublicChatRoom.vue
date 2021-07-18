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
        <h3 class="header text-bold">上線使用者 ({{ topUsers.length }})</h3>
        <ul class="user-list">
          <li
            class="user-item d-flex align-items-center flex-wrap"
            v-for="user in topUsers"
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
          <!-- <div
            class="chat-info text-center"
            v-for="user in topUsers"
            :key="user.id"
          >
            <span class="chat-info-content">{{ user.name }} 上線</span>
          </div> -->

          <div
            class="w-100 d-flex"
            v-for="(msg, index) in msgList"
            :key="'message' + index"
          >
            <div
              class="chat-left-container"
              v-if="currentUser.id !== msg.user.id"
            >
              <div class="chat-left d-flex my-3">
                <router-link
                  :to="`/user/${msg.id}`"
                  class="img-container h-100 my-auto"
                >
                  <img
                    class="chat-img rounded mr-3"
                    :src="msg.user.avatar | emptyImage"
                    alt=""
                    srcset=""
                  />
                </router-link>

                <div class="chat-message-container">
                  <p class="chat-message">
                    {{ msg.message.content }}
                  </p>
                  <div class="chat-time">
                    {{ msg.message.createdAt | hourMinDate }}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="w-100 d-flex justify-content-end"
              v-if="currentUser.id === msg.user.id"
            >
              <div class="chat-right d-flex my-3 chat-right-container">
                <div class="chat-message-container">
                  <p class="chat-message">
                    {{ msg.message.content }}
                  </p>
                  <span class="chat-time text-right">{{
                    msg.message.createdAt | hourMinDate
                  }}</span>
                </div>
              </div>
            </div>

            <!-- <div class="w-100 chat-info text-center">
              <span class="chat-info-content">123 上線</span>
            </div> -->
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
// import usersAPI from '../apis/users'
// import { Toast } from '../utils/helpers'
import { emptyImageFilter, fromNowFilter, dateFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// npm install socket io for vue packages and import them
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'

// set socket io address
const token = localStorage.getItem('token')
const socket = io('http://localhost:3000/', { query: { token: token } })

// use socket io in vue
Vue.use(VueSocketIOExt, socket)

export default {
  name: 'PublicChatRoom',
  mixins: [emptyImageFilter, fromNowFilter, dateFilter],
  components: {
    Loading,
    SideNavBarDC
  },
  sockets: {
    connect() {
      const id = this.$socket.client.id
      console.log(id + ' connected')
    },
    customEmit(data) {
      console.log(data)
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      )
    },
    res(data) {
      this.msgList.push(data)
      console.log('接收到服务端消息', data)
    }
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
      activeUsers: {
        count: 0
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated', 'topUsers'])
  },
  methods: {
    handleSubmit() {
      if (this.message === '') {
        return
      }
      // socket io start here
      // get user info from currentUser Obj
      // get token form localStorage
      // const token = localStorage.getItem('token')
      // const { name, id } = this.currentUser
      // const curTime = new Date()
      // emit to socket io server
      this.$socket.client.emit('sendMessage', this.message)

      // clear input message
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
  mounted() {
    this.scrollToEnd()

    // bulid event listener to socket io server (allMessage is a pipe name between frontEnd and server)
    // message is a Obj retrun from socket io server
    this.$socket.client.on('newMessage', message => {
      console.log('message:', message)
      this.msgList.push(message)
      console.log(this.msgList)
    })

    this.$socket.client.on('disconnect', data => {
      console.log('disconnect:', data)
    })

    this.$socket.client.on('activeUsers', data => {
      console.log('activeUsers:', data)
    })

    this.$socket.client.on('notification', data => {
      console.log('notification:', data)
    })
  },
  beforeDestroy() {
    // using "removeListener" here, but this should be whatever $socket provides
    // for removing listeners
    this.$socket.$unsubscribe('newMessage')
    this.$socket.$unsubscribe('disconnect')
    this.$socket.$unsubscribe('activeUsers')
    this.$socket.$unsubscribe('notification')
  }
}
</script>
