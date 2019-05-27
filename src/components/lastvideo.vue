<template>
  <div id="lastvideo" class="col-md-12 p-0 relative">
    <div class=" col-md-7 mx-auto ">
      <div class="mb-3 font-oswald video-fontsize ">
        <span class="color-lightblack">LAST</span>
        <span class="color-yellow">VIDEO</span>
      </div>
      <div class="mb-3 color-lightgray video-parafontsize work-sans">
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English.
      </div>
      <iframe
        src="http://www.youtube.com/embed/W7qWa52k-nE"
        width="100%"
        height="360"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <md-card>
      <md-card-media>
        <!-- swiper -->
        <swiper class="col-md-9 mb-6" :options="swiperOption">
          <swiper-slide>
            <div class="mb-6">
              <span
                ><img src="../assets/images/audioj.png" alt="" width="15%"
              /></span>
              <span class="work-sans ml-2 swiper-fontsize text-white"
                >activeden</span
              >
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span
                ><img src="../assets/images/audioj.png" alt="" width="15%"
              /></span>
              <span class="work-sans ml-2 swiper-fontsize text-white"
                >activeden</span
              >
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span
                ><img src="../assets/images/audioj.png" alt="" width="15%"
              /></span>
              <span class="work-sans ml-2 swiper-fontsize text-white"
                >activeden</span
              >
            </div></swiper-slide
          >
          <swiper-slide>
            <div>
              <span
                ><img src="../assets/images/audioj.png" alt="" width="15%"
              /></span>
              <span class="work-sans ml-2 swiper-fontsize text-white"
                >activeden</span
              >
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span
                ><img src="../assets/images/audioj.png" alt="" width="15%"
              /></span>
              <span class="work-sans ml-2 swiper-fontsize text-white"
                >activeden</span
              >
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <span
                ><img src="../assets/images/audioj.png" alt="" width="15%"
              /></span>
              <span class="work-sans ml-2 swiper-fontsize text-white"
                >activeden</span
              >
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </md-card-media>
    </md-card>
    <div class="video-banner"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 38,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.video-fontsize {
  font-size: 30px;
}
.video-parafontsize {
  font-size: 14px;
}
.video-banner {
  background: lightslategray;
  height: 500px;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 50%;
}
.swiper-fontsize {
  font-size: 28px;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 5px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: transparent;
  border: 1px solid $color-white;
}
.swiper-pagination-bullet-active {
  background: transparent;
  border: 1px solid $color-yellow;
}
.swiper-pagination:focus {
  outline: none;
}
</style>
