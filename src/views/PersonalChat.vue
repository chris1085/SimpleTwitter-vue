<template>
  <div>
    <Loading
      v-model="isLoading"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    />
    <SideNavBarDC @after-create-tweet="updateTweetCard" />

    <section class="chat-container d-flex">
      <div class="onlineUser-container col-md-6 col-lg-4">
        <h3 class="header text-bold">訊息</h3>
        <ul class="user-list">
          <li
            class="user-item d-flex align-items-center"
            v-for="user in users"
            :key="user.id"
          >
            <router-link
              :to="`/user/${user.UserId}`"
              class="user-img-container mr-3"
            >
              <img
                :src="user.avatar | emptyImage"
                alt=""
                class="user-img rounded"
              />
            </router-link>

            <div class="d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between">
                <router-link
                  :to="`/user/${user.UserId}`"
                  class="user-name font-bold mr-2"
                  >{{ user.name
                  }}<span class="user-account">
                    @{{ user.account }}</span
                  ></router-link
                >

                <span class="user-account">{{
                  user.lastUpdatedTime | monthDayDate
                }}</span>
              </div>
              <p class="mt-1 text-secondary text-wrap">{{ user.content }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="chatroom col-12 col-md-6 col-lg-8">
        <header class="header text-bold">
          <h3>{{ chatPerson.name }}</h3>
          <span class="user-account">@{{ chatPerson.account }}</span>
        </header>

        <div
          class="chat-content-container d-flex flex-column personalChat-container"
          ref="chatroom"
        >
          <div class="w-100 chat-left-container">
            <div class="chat-left d-flex my-3">
              <router-link
                :to="`/user/${users[1].id}`"
                class="img-container h-100 my-auto"
              >
                <img
                  class="chat-img rounded mr-3"
                  :src="users[1].avatar | emptyImage"
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
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { emptyImageFilter, fromNowFilter, dateFilter } from '../utils/mixins'

const dummyData = [
  {
    name: 'Aaron',
    account: 'AaronWang',
    id: 1,
    UserId: 3,
    content: '今晚想來點？',
    avatar: 'https://i.pravatar.cc/150?img=56',
    lastUpdatedTime: '2021-04-22T20:21:19.000Z'
  },
  {
    name: 'Beatrice',
    account: 'BeatricePai',
    id: 2,
    UserId: 4,
    content: '別跟我說這麼多，台積電我沒在賣的啦，航海王、鋼鐵人嚇不倒我的',
    avatar: 'https://i.pravatar.cc/150?img=28',
    lastUpdatedTime: '2021-05-19T21:34:44.000Z'
  }
]

export default {
  name: 'MainTweetsPage',
  mixins: [emptyImageFilter, fromNowFilter, dateFilter],
  components: {
    Loading,
    SideNavBarDC
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      chatId: -1,
      users: dummyData,
      message: '',
      chatPerson: {
        avatar: 'https://i.pravatar.cc/150?img=28',
        name: 'Beatrice',
        account: 'BeatricePai'
      }
    }
  },
  methods: {
    checkList(chatId) {
      const isNewChat = this.users.some(user => {
        return user.UserId === chatId
      })

      if (!isNewChat) {
        this.users.push({
          name: 'Beatrice',
          account: 'BeatricePai',
          UserId: 4,
          content: '',
          avatar: 'https://i.pravatar.cc/150?img=28',
          lastUpdatedTime: ''
        })
      }
    },
    updateTweetCard() {}
  },
  created() {
    const { userId } = this.$route.params
    this.chatId = userId
    if (typeof userId !== 'undefined') {
      this.checkList(this.chatId)
    }
  }
}
</script>
