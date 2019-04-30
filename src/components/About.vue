<template>
  <div class="d-flex about-bg">
    <div class="text-left col-md-6 col1-bg px-5 py-5">
      <div class="work-sans">ABOUT TEAM</div>
      <div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </p>
      </div>
      <div>READ MORE</div>
    </div>
    <div class="text-right col-md-6 d-flex px-5 py-5 ">
      <div class="">
        <span>BERNARD</span><br />
        <span>FERNANDEZ</span>
      </div>
      <div class="">
        <div>TRAINERS</div>
        <div>
          <img src="../assets/images/sportman.jpg" width="35%" height="150px" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.about-bg {
  background: url(..//assets/images/banner2.jpg);
  widows: 100%;
}
.col1-bg {
  background-color: $color-lightyellow;
}
</style>
