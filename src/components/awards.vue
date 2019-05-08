<template>
  <div class="d-flex awards-bg mb-5">
    <div class="col-md-6 bg-light">
      <div>
        <span class="font-oswald">
          <span class="color-lightblack"> OUR</span>
          <span class="color-orange"> AWARDS</span></span>
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
          <div class="font-oswald">2014 WORLD CUP CHAMPION</div>
        </div>
        <div>
          <div>
            <img src="../assets/images/trophy.png" alt="" class="w-50" />
          </div>
          <div class="font-oswald">2014 WORLD CUP CHAMPION</div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="font-oswald color-white">ACHIEVEMENTS</div>
      <div class="d-flex justify-content-around">
        <div class="font-oswald d-flex">
          <span><img src="../assets/images/ball.png" alt=""></span>
          <span class="my-auto award-fontsize">
          <div class="color-orange">35</div>
          <div class="color-white">GOALS</div>
          </span>
        </div>
         <div class="font-oswald d-flex">
          <span><img src="../assets/images/ball.png" alt=""></span>
          <span class="my-auto award-fontsize">
          <div class="color-orange">35</div>
          <div class="color-white">GOALS</div>
          </span>
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <div class="font-oswald d-flex">
          <span><img src="../assets/images/ball.png" alt=""></span>
          <span class="my-auto award-fontsize">
          <div class="color-orange">35</div>
          <div class="color-white">GOALS</div>
          </span>
        </div>
         <div class="font-oswald d-flex">
          <span><img src="../assets/images/ball.png" alt=""></span>
          <span class="my-auto award-fontsize">
          <div class="color-orange">35</div>
          <div class="color-white">GOALS</div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.awards-bg {
  background: url(..//assets/images/banner2.jpg);
  widows: 100%;
}
.award-fontsize{
  font-size: 25px;
}
</style>
