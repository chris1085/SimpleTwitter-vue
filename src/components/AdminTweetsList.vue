<template>
  <div class="container">
    <div class="avatar">
      <img src="" alt="" />
    </div>
    <div class="tweet-info">
      <div class="title"><span>apple</span> @apple・3hr</div>
      <p>
        123
      </p>
    </div>
    <div class="delete" @click.stop.prevent="handleDeleteButtonClick(tweet.id)">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: auto;
  min-height: 120px;
  padding: 15px 15px 25px;
  border-bottom: 1px solid #e6ecf0;
  margin: 5px;
  min-width: 1062px;
  max-width: 1062px;
}
.tweet-info {
  width: 100%;
}
.tweet-info span {
  font-weight: 900;
  height: auto;
}
.avatar {
  min-width: 50px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.avatar img {
  min-width: 50px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
}
.title {
  color: gray;
}
.delete {
  cursor: pointer;
}
</style>
