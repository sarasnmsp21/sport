<template>
  <div class=" about-bg">
    <div class="d-flex justify-content-between col-md-9 mx-auto p-0">
      <div class="text-left relative  col1-bg col">
        <div class="work-sans mb-3 heading-fontsize">
          <span class="color-lightblack">ABOUT</span>
          <span class="color-white"> TEAM</span>
        </div>
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div class="mt-4">
          <span class="read-border">
            <span class="bg-lightblack read-padding read-font">READ MORE</span>
          </span>
        </div>
      </div>
      <div class="text-right d-flex justify-content-center col2-bg col p-0 ">
        <div class="">
          <span>BERNARD</span><br />
          <span>FERNANDEZ</span>
        </div>
        <div class="">
          <div>TRAINERS</div>
          <div>
            <img
              src="../assets/images/sportman.jpg"
              width="35%"
              height="150px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.about-bg {
  background: url(..//assets/images/banner2.jpg);
  widows: 100%;
}
// .col1-bg {
//   background-color: $color-lightyellow;
// }
.col1-bg::after {
  content: "";
  transform: skewX(-33deg);
  -webkit-transform: skewX(-33deg);
  background: #fdbd00d1;
  position: absolute;
  right: -30px;
  top: 0px;
  bottom: 0px;
  left: -1032%;
  z-index: -2;
}
.col1-bg {
  z-index: 1;
  padding: 65px 0px 77px 0px;
}
.read-padding {
  padding: 9px 30px;
}
.read-font {
  font-size: 10px;
  color: $color-lightyellow;
  font-weight: bold;
}
.read-border {
  border: 1px solid $bg-lightblack;
  padding: 6px 2px 10px 2px;
}
.heading-fontsize {
  font-size: 30px;
}
// .col2-bg::after {
//   content: "";
//   transform: skewX(-33deg);
//   -webkit-transform: skewX(-33deg);
//   background: #fdbd00d1;
//   position: absolute;
//   right: -30px;
//   top: 0px;
//   bottom: 0px;
//   left: -1032%;
//   z-index: -2;
// }
.col2-bg {
  z-index: 1;
  padding: 65px 0px 77px 0px;
}
</style>
