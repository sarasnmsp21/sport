<template>
  <div class="d-flex awards-bg mb-5">
    <div class="col-md-6 bg-light award-padding ">
      <div>
        <span class="font-oswald heading-fontsize ">
          <span class="color-lightblack"> OUR</span>
          <span class="color-orange"> AWARDS</span></span
        >
        <span class="float-right">
          <span class="bg-lightblack arrow-padding2 color-yellow">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
          </span>
          <span class="bg-orange arrow-padding2 color-lightblack">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </span>
        </span>
      </div>
      <div class="d-flex">
        <div>
          <div>
            <img src="../assets/images/trophy.png" alt="" class="w-50" />
          </div>
          <div class="font-oswald wordcup-font">2014 WORLD CUP CHAMPION</div>
        </div>
        <div>
          <div>
            <img src="../assets/images/trophy.png" alt="" class="w-50" />
          </div>
          <div class="font-oswald wordcup-font">2014 WORLD CUP CHAMPION</div>
        </div>
      </div>
    </div>

    <div class="col-md-6 award-padding">
      <div class="font-oswald color-white heading-fontsize ">ACHIEVEMENTS</div>
      <div class="d-flex justify-content-between">
        <div class="font-oswald d-flex icon-padding">
          <span><img src="../assets/images/ball.png" width="90%" alt=""/></span>
          <span class="my-auto award-fontsize">
            <div class="color-orange">35</div>
            <div class="color-white">GOALS</div>
          </span>
        </div>
        <div class="font-oswald d-flex icon-padding">
          <span><img src="../assets/images/ball.png" width="90%" alt=""/></span>
          <span class="my-auto award-fontsize">
            <div class="color-orange">12</div>
            <div class="color-white">AWARDS</div>
          </span>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="font-oswald d-flex icon-padding">
          <span><img src="../assets/images/ball.png" width="90%" alt=""/></span>
          <span class="my-auto award-fontsize">
            <div class="color-orange">13</div>
            <div class="color-white">VIOLATIONS</div>
          </span>
        </div>
        <div class="font-oswald d-flex icon-padding">
          <span><img src="../assets/images/ball.png" width="90%" alt=""/></span>
          <span class="my-auto award-fontsize">
            <div class="color-orange">8</div>
            <div class="color-white">AWARDS</div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.awards-bg {
  background: linear-gradient(
      to bottom rgba(82, 78, 78, 0.94),
      rgba(82, 78, 78, 0.94)
    ),
    url("../assets/images/banner2.jpg");
  widows: 100%;
}
.award-fontsize {
  font-size: 25px;
}
.award-padding {
  padding: 65px 76px;
}
.heading-fontsize {
  font-size: 30px;
}
.icon-padding {
  padding: 20px 20px;
}
.wordcup-font {
  padding-top: 25px;
  font-size: 14px;
}
</style>
