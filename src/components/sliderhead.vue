<template>
  <div>
    <b-carousel
      id="carousel1"
      controls
      indicators
      :interval="3000"
      img-width="100%"
      img-height="550px"
    >
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100 img-height"
          src="../assets/images/banner8.jpg"
          alt="image slot"
        />
        <div class="carousel-caption text-right col-md-9">
          <span class="banner-fontsize banner-text-bg font-oswald">
            <span class="color-white ">LIFE IS</span>
            <span class="color-orange "> ABOUT TIMING</span>
          </span>
          <div class="banner-font2 mb-4 work-sans">
            <span>Just play.</span><span class="color-orange"> Have fun.</span
            ><span> Enjoy the game</span>
          </div>
          <span class="text-border work-sans">
            <span class="fontstyle-bg color-midgray">READ MORE</span>
            <span class="arrow-bg">
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </span>
          </span>
        </div>
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100 img-height"
          src="../assets/images/banner3.jpg"
          alt="image slot"
        />
        <div class="carousel-caption text-right col-md-9">
          <span class="banner-fontsize banner-text-bg font-oswald">
            <span class="color-white ">LIFE IS</span>
            <span class="color-orange "> ABOUT TIMING</span>
          </span>
          <div class="banner-font2 mb-4 work-sans">
            <span>Just play.</span><span class="color-orange"> Have fun.</span
            ><span> Enjoy the game</span>
          </div>
          <span class="text-border work-sans">
            <span class="fontstyle-bg color-midgray">READ MORE</span>
            <span class="arrow-bg">
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </span>
          </span>
        </div>
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100 img-height"
          src="../assets/images/banner5.jpg"
          alt="image slot"
        />
        <div class="carousel-caption text-right col-md-9">
          <span class="banner-fontsize banner-text-bg font-oswald">
            <span class="color-white ">LIFE IS</span>
            <span class="color-orange "> ABOUT TIMING</span>
          </span>
          <div class="banner-font2 mb-4 work-sans">
            <span>Just play.</span><span class="color-orange"> Have fun.</span
            ><span> Enjoy the game</span>
          </div>
          <span class="text-border work-sans">
            <span class="fontstyle-bg color-midgray">READ MORE</span>
            <span class="arrow-bg">
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </span>
          </span>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.color-white {
  color: $color-white;
}
.img-height {
  height: 600px;
}
.color-orange {
  color: $color-lightyellow;
}
.banner-text-bg {
  font-size: 2.9rem;
  background: $bg-transparent;
  padding: 0px 15px;
}
.banner-font2 {
  font-size: 1.2rem;
  line-height: 28px;
}
.fontstyle-bg {
  font-size: 0.62rem;
  background-color: $color-lightyellow;
  padding: 9px 15px;
  font-weight: bold;
}
.arrow-bg {
  font-size: 0.625rem;
  background-color: $color-dark-gray;
  padding: 9px 15px;
  color: $color-lightyellow;
  font-weight: bold;
}
.text-border {
  padding: 4px 1px 8px;
  border: 1px solid #ffc722;
}
.carousel-indicators li {
  margin-right: 6px;
  margin-left: 6px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: $color-white;
}
.carousel-indicators .active {
  background-color: $color-lightyellow;
}
.carousel-caption {
  padding-bottom: 60px;
  margin-right: -160px;
}
.carousel-indicators li:focus {
  outline: none;
}
.carousel-indicators:focus {
  outline: none;
}
.carousel-control-prev {
  display: none;
}
.carousel-control-next {
  display: none;
}
</style>
