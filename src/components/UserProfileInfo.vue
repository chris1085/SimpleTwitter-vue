<template>
  <div class="ussrProfileInfo-container d-flex flex-column">
    <header class="">
      <div class="d-flex align-items-center">
        <a href="#" class="leftArrow"><i class="fas fa-arrow-left"></i></a>
        <div class="header-title">
          <h3 class="font-bold">John Doe</h3>
          <span class="subInfo">25推文</span>
        </div>
      </div>
    </header>
    <div class="img-container">
      <img class="coverImg" src="https://fakeimg.pl/598x200" alt="" />

      <div class="photo position-absolute rounded">
        <img class="rounded" src="https://fakeimg.pl/140x140" alt="" />
      </div>
    </div>

    <div class="d-flex flex-column userProfileInfo-content-container">
      <h3 class="content-username">Johne Doe</h3>
      <span class="content-userId">@heyjohn</span
      ><span class="content-intro"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
        quis?</span
      >
      <div class="follow-container d-flex">
        <a class="follow-link" href=""
          >34 個<span class="follow-unit">跟隨中</span></a
        ><a class="follow-link" href=""
          >59 位<span class="follow-unit">跟隨中</span></a
        >
      </div>

      <button class="btn btn-outline-primary btn-profile position-absolute">
        編輯個人資料
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  width: 122px !important;
  height: 40px !important;
}
</style>
