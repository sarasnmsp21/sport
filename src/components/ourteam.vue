<template>
  <div id="ourteam" class="col-md-12 mt-6 mb-6 pl-0 pr-0 pb-6">
    <div class="col-md-9 mx-auto">
      <div class="fontsize-30 font-oswald">
        <div class="mb-4">
          <span class="color-lightblack">OUR</span
          ><span class="color-yellow"> TEAM</span>
        </div>
      </div>
      <div
        class="work-sans col-md-9 p-0 mx-auto color-lightgray mb-3 team-para-fontsize"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. as opposed to
        using 'Content making it English.
        <div class="border-postion border-style mt-3"></div>
        <span class="text-postion work-sans color-lightblack">READ MORE</span>
      </div>
      <div class="d-flex justify-content-between text-left mb-5 bg-white">
        <div class="relative">
          <div class="player-number-bg bg-lightblack color-orange">21</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
        <div class="relative">
          <div class="player-number-bg bg-lightblack color-orange">19</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
        <div class="relative">
          <div class="player-number-bg bg-lightblack color-orange">45</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
        <div class="relative">
          <div class="player-number-bg bg-lightblack color-orange">87</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between text-left">
        <div class="bg-white relative">
          <div class="player-number-bg bg-lightblack color-orange">98</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
        <div class="bg-white relative">
          <div class="player-number-bg bg-lightblack color-orange">90</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
        <div class="bg-white relative">
          <div class="player-number-bg bg-lightblack color-orange">43</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
         <div class="bg-white relative">
          <div class="player-number-bg bg-lightblack color-orange">34</div>
          <img src="../assets/images/player3.jpg" alt="" />

          <div class="font-oswald color-lightblack mt-2 ml-3">STEVEN WEBB</div>
          <div class="font-oswald color-lightgray team-para-fontsize ml-3">
            DEFENDER
          </div>
        </div>
      </div>
      <div class="mt-4">
        <span class="btn-border">
          <span class="bg-orange btn-padding">MORE INFO</span>
        </span>
      </div>
    </div>
    <div class="back-banner-position "></div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
.team-para-fontsize {
  font-size: 14px;
}
.border-style {
  border: 1px solid $color-lightyellow;
}
.border-postion {
  position: relative;
}
.text-postion {
  position: relative;
  top: -12px;
  background: white;
  padding: 0px 20px;
  font-size: 10px;
  font-weight: bold;
}
.back-banner-position {
  background: url(../assets/images/banner8.jpg) no-repeat;
  height: 443px;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 489px;
}
.player-number-bg {
  position: absolute;
  padding: 15px 15px;
  /* transform: rotate(30deg); */
  overflow: hidden;
}
.pb-6{
  padding-bottom: 4rem;
}
</style>
