<template>
  <div>
    <div class="col-md-12 mx-auto mt-4 mb-4 mt-5">
      <div class="font-oswald heading-fontsize mb-4">
        <span class="color-lightblack">FUN</span
        ><span class="color-yellow"> SHOP</span>
      </div>
      <div class="col-md-8 mx-auto color-lightgray fun-parafontsize mb-4 ">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. as opposed to
        using 'Content here, content here', making it look like readable
        English.
      </div>
      <span class="bg-lightblack work-sans save-font mb-5">
        <span class="color-white">SAVE</span>
        <span class="color-yellow"> 33% OFF</span>
        <span class="color-white"> for all new orders</span>
      </span>
      <div class="mt-5">
        <md-card>
          <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div></swiper-slide
              >
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div></swiper-slide
              >
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div></swiper-slide
              >
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div></swiper-slide
              >
              <swiper-slide>
                <div>
                  <img src="../assets/images/shoe1.jpeg" alt="" width="200px" />
                  <div class="d-flex">
                    <div
                      class="font-oswald color-lightblack bg-lightblack flex-fill"
                    >
                      STEVEN WEBB
                    </div>
                    <div
                      class="font-oswald color-lightblack  bg-orange flex-fill"
                    >
                      BUY
                    </div>
                  </div>
                </div></swiper-slide
              >
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
          </md-card-media>
        </md-card>
      </div>
       <div class="mt-5">
        <span class="btn-border work-sans">
          <span class="bg-orange btn-padding">VIEW ALL</span>
        </span>
      </div>
    </div>

    <div class="banner-img"></div>
  </div>
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
<style lang="scss">
@import "../assets/scss/variables.scss";
.heading-fontsize {
  font-size: 30px;
}
.fun-parafontsize {
  font-size: 14px;
}
.save-font {
  padding: 10px 11px;
  font-size: 25px;
}
.swiper-slide {
  width: 200px !important;
}
.banner-img {
  background: url(../assets/images/fun.jpg);
  height: 400px;
}
.clear {
  clear: both;
}
</style>
