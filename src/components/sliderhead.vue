<template>
  <div id="demo" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/images/banner3.jpg"
          alt="Los Angeles"
          width="100%"
          height="500"
        />
        <div class="carousel-caption text-right">
          <span class="banner-fontsize banner-text-bg">
            <span class="color-white ">LIFE IS</span>
            <span class="color-orange "> ABOUT TIMING</span>
          </span>
          <div class="banner-font2 mb-4 mt-2">
            <span>Just play.</span><span class="color-orange"> Have fun.</span
            ><span> Enjoy the game</span>
          </div>
          <span class="mb-5 text-outline">
            <span class="fontstyle-bg">READ MORE</span>
            <span class="arrow-bg"> > </span>
          </span>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/banner2.jpg"
          alt="Chicago"
          width="1300"
          height="500"
        />
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/banner3.jpg"
          alt="New York"
          width="1300"
          height="500"
        />
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
    </div>
    <!-- <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.color-white {
  color: $color-white;
}
.color-orange {
  color: $color-lightyellow;
}
.banner-text-bg {
  font-size: 55px;
  background: rgba(0, 0, 0, 0.5);
  // font-family: 'Oswald';
  font-weight: 400;
}
.banner-font2 {
  font-size: 20px;
}
.fontstyle-bg {
  font-size: 15px;
  background-color: $color-lightyellow;
  padding: 5px;
  color: $color-dark-gray;
}

.arrow-bg {
  font-size: 15px;
  background-color: $color-dark-gray;
  padding: 5px;
  color: $color-lightyellow;
}
.text-outline {
  padding: 7px 3px;
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
</style>
