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
          <div
            class="chat-info text-center"
            v-for="user in topUsers"
            :key="user.id"
          >
            <span class="chat-info-content">{{ user.name }} 上線</span>
          </div>

          <div class="w-100 chat-left-container">
            <div class="chat-left d-flex my-3">
              <router-link
                :to="`/user/${topUsers[0].id}`"
                class="img-container h-100 my-auto"
              >
                <img
                  class="chat-img rounded mr-3"
                  :src="topUsers[0].avatar | emptyImage"
                  alt=""
                  srcset=""
                />
              </router-link>

              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100 d-flex chat-right-container">
            <div class="chat-right d-flex my-3">
              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100">
            <div class="chat-left d-flex my-3">
              <router-link
                :to="`/user/${topUsers[0].id}`"
                class="img-container h-100 my-auto"
              >
                <img
                  class="chat-img rounded mr-3"
                  :src="topUsers[0].avatar | emptyImage"
                  alt=""
                  srcset=""
                />
              </router-link>

              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100">
            <div class="chat-left d-flex my-3">
              <router-link
                :to="`/user/${topUsers[0].id}`"
                class="img-container h-100 my-auto"
              >
                <img
                  class="chat-img rounded mr-3"
                  :src="topUsers[0].avatar | emptyImage"
                  alt=""
                  srcset=""
                />
              </router-link>

              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100">
            <div class="chat-left d-flex my-3">
              <router-link
                :to="`/user/${topUsers[0].id}`"
                class="img-container h-100 my-auto"
              >
                <img
                  class="chat-img rounded mr-3"
                  :src="topUsers[0].avatar | emptyImage"
                  alt=""
                  srcset=""
                />
              </router-link>

              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100">
            <div class="chat-left d-flex my-3">
              <router-link
                :to="`/user/${topUsers[0].id}`"
                class="img-container h-100 my-auto"
              >
                <img
                  class="chat-img rounded mr-3"
                  :src="topUsers[0].avatar | emptyImage"
                  alt=""
                  srcset=""
                />
              </router-link>

              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100 d-flex justify-content-end">
            <div class="chat-right d-flex my-3">
              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="w-100 d-flex justify-content-end">
            <div class="chat-right d-flex my-3">
              <div class="chat-message-container">
                <p class="chat-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio suscipit possimus amet est qui illum quasi
                  temporibus accusamus error.
                </p>
                <div class="chat-time">下午 5:55</div>
              </div>
            </div>
          </div>

          <div class="typing" v-if="message !== ''">正在輸入訊息...</div>
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
import SideNavBarDC from '../components/SideNavBarDC.vue'
// import usersAPI from '../apis/users'
// import { Toast } from '../utils/helpers'
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'PublicChatRoom',
  mixins: [emptyImageFilter, fromNowFilter],
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
      msgList: []
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated', 'topUsers'])
  },
  methods: {
    handleSubmit() {
      // socket io start here
      // get user info from currentUser Obj
      // get token form localStorage
      const token = localStorage.getItem('token')
      const { name, id } = this.currentUser

      // emit to socket io server
      this.$socket.client.emit('sendMessage', {
        name,
        message: this.message,
        token,
        id
      })

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
    this.$socket.client.on('allMessage', message => {
      console.log(message)
    })
  }
}
</script>
