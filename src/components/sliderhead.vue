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
         <div>LIFE IS ABOUT TIMING</div>
         <div>Just play. Have fun. Enjoy the game</div>
         <div>READ MORE <span> > </span></div>
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
<style lang="scss"></style>
