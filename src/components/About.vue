<template>
  <div id="team" class=" about-bg">
    <div class="d-flex justify-content-between col-md-9 mx-auto p-0">
      <div class="text-left relative  col1-bg col-md-6">
        <div class="font-oswald mb-3 about-fontsize">
          <span class="color-midgray">ABOUT</span>
          <span class="color-white"> TEAM</span>
        </div>
        <div class="work-sans para-lineheight color-midgray">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. making it
            look like readable English.Ipsum is that it
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
      <div class="text-right col2-bg col-md-6 ">
        <div class="float-text">
          <span class="text-white font-oswald pr-3">BERNARD</span><br />
          <span class="color-yellow font-oswald pr-3">FERNANDEZ</span>
        </div>
        <div class="text-white font-oswald">
          <div class="d-flex justify-content-end mb-4">
            <div class="my-auto">
              <span class="bg-lightblack arrow-padding color-yellow"><</span>
              <span class="bg-orange arrow-padding color-lightblack">></span>
            </div>
            <div class=" about-fontsize ml-3">TRAINERS</div>
          </div>
          <div>
            <img
              src="../assets/images/sportman.jpg"
              width="48%"
              height="200px"
              style=" outline: 1px solid orange;"
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
  background: #fdbd00ba;
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
  font-size: 0.625rem;
  color: $color-lightyellow;
  font-weight: bold;
}
.read-border {
  border: 1px solid $bg-lightblack;
  padding: 6px 2px 10px 2px;
}
.about-fontsize {
  font-size: 1.875rem;
}
// .col2-bg::after {
//  content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     opacity: 0.9;
//     right: -1000%;
//     z-index: -1;
//     transform: skew(-33deg);
//     display: block;
//     background: #363533;
// }
.col2-bg {
  z-index: 1;
  padding: 65px 0px 77px 0px;
}
.arrow-padding {
  padding: 0px 12px;
}
.para-lineheight {
  line-height: 20px;
  font-size: 0.875rem;
}
.margin-top {
  margin-top: 105px;
}
.float-text {
  float: left;
  margin-left: 124px;
  vertical-align: bottom;
  margin-top: 201px;
  font-size: 1.5rem;
}
</style>
