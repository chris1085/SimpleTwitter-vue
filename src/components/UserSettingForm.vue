<template>
  <form @submit.prevent.stop="handleSubmit($event)">
    <div class="row">
      <label for="account"
        >帳號<span class="note ml-5">*帳號長度不得大於 50 字元</span></label
      >
      <input
        id="account"
        name="account"
        type="text"
        v-model="form.account"
        required
        maxlength="50"
      />
    </div>

    <div class="row">
      <label for="name"
        >名稱<span class="note ml-5">*名稱長度不得大於 50 字元</span></label
      >
      <input
        id="name"
        name="name"
        type="text"
        v-model="form.name"
        maxlength="50"
        required
      />
    </div>

    <div class="row">
      <label for="email"
        >Email<span class="note ml-5">*信箱長度不得大於 50 字元</span></label
      >
      <input
        id="email"
        name="email"
        type="email"
        v-model="form.email"
        maxlength="50"
        required
      />
    </div>

    <div class="row">
      <label for="password"
        >密碼<span class="note ml-5">*密碼長度需介於 4 和 12 之間</span></label
      >
      <input
        id="password"
        name="password"
        type="password"
        v-model="form.password"
        required
        maxLength="12"
      />
    </div>
    <div class="row">
      <label for="passwordCheck"
        >密碼確認<span class="note ml-3"
          >*密碼長度需介於 4 和 12 之間</span
        ></label
      >
      <input
        id="passwordCheck"
        name="passwordCheck"
        type="password"
        v-model="form.checkPassword"
        required
      />
    </div>

    <template v-if="isSignUp">
      <div class="row mt-4">
        <button class="btn submit" type="submit" :disabled="isProcessing">
          {{ isProcessing ? '註冊中..' : '註冊' }}
        </button>
      </div>
      <div class="row">
        <button class="btn cancel" @click.stop.prevent="goBackToSignIn">
          取消
        </button>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <button
          v-if="!isSaved"
          class="btn update"
          type="submit"
          :disabled="isProcessing"
        >
          {{ isProcessing ? '儲存中..' : '儲存' }}
        </button>
        <button v-else class="btn update" disabled>已儲存</button>
      </div>
    </template>
  </form>
</template>

<script>
export default {
  name: 'UserSettingForm',
  data() {
    return {
      form: {
        name: '',
        account: '',
        email: '',
        password: '',
        checkPassword: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 15px;
  width: 642px;
}
.row {
  width: 642px;
  margin: 10px 0;
}
.row label {
  padding-left: 11px;
  color: #657786;
  font-weight: 700;
  display: block;
  width: 100%;
}
.row input {
  padding-left: 11px;
  font-weight: 500;
  font-size: 19px;
  background-color: #f5f8fa;
  width: 100%;
  border: none;
  border-bottom: 2px solid #657786;
}
.note {
  font-size: 15px;
  color: #ff6600;
}
.btn {
  width: 100%;
  border-radius: 50px;
  height: 50px;
}
button.submit,
button.update {
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
button.cancel {
  color: #0099ff;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
}
.row:last-child {
  position: relative;
  height: 50px;
}
button.update {
  position: absolute;
  right: 0;
  width: 122px;
  font-size: 18px;
}
</style>
