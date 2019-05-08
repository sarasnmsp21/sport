<template>
  <div id="lastvideo" class="col-md-12 p-0">
    <div class="mt-5 mb-5 col-md-7 mx-auto">
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
        height="315"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
     <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <div>
          <span><img src="../assets/images/activeden.png" alt=""></span>
          <span>activeden</span>
          </div>

        </swiper-slide>
        <swiper-slide>
          <span></span>
          <span></span>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
         <swiper-slide>Slide 4</swiper-slide>
         
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
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>
<style lang="scss">
.video-fontsize {
  font-size: 30px;
  margin-top: 100px;
}
.video-parafontsize {
  font-size: 14px;
}
.video-banner {
  background: url(../assets/images/banner3.jpg);
  height: 500px;
}
</style>
