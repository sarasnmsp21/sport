<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div>
            <img src="../assets/images/p2.jpg" alt="" width="200px" />
            <div class="d-flex">
              <div class="font-oswald color-lightblack bg-lightblack flex-fill">
                STEVEN WEBB
              </div>
              <div class="font-oswald color-lightblack  bg-orange flex-fill">
                BUY
              </div>
            </div>
          </div></swiper-slide
        >
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style scoped>
/* .swiper-slide {
  width: 200px;
  background: url(/img/g3.34ed0187.jpg) no-repeat;
} */
/* .swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
} */
.swiper-slide {
  width: 200px !important;
}
</style>
