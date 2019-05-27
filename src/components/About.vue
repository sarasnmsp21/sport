<template>
  <div class="about-section">
    <div class="container-fluid">
      <div class="row">
        <div class=" col-md-9 mx-auto">
          <div class="d-flex">
            <div class="col-md-6">
              <div class="text-left relative  col1-bg ">
                <div class="font-oswald mb-3 about-fontsize">
                  <span class="color-midgray">ABOUT</span>
                  <span class="color-white"> TEAM</span>
                </div>
                <div class="work-sans para-lineheight color-midgray">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. making it look like readable English.Ipsum is
                    that it
                  </p>
                  <p>
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                  </p>
                </div>
                <div>
                  <span class="read-border">
                    <span class="bg-lightblack read-padding read-font"
                      >READ MORE</span
                    >
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col2-padding text-right">
                <div class="mb-4 font-oswald d-flex justify-content-end">
                  <span class="my-auto">
                    <span class="bg-lightblack arrow-padding color-yellow">
                      <font-awesome-icon :icon="['fas', 'angle-left']" />
                    </span>
                    <span class="bg-orange arrow-padding color-lightblack">
                      <font-awesome-icon :icon="['fas', 'angle-right']" />
                    </span>
                  </span>
                  <span class=" about-fontsize text-white ml-4 my-auto">
                    TRAINERS
                  </span>
                </div>
                <div class="d-flex justify-content-end relative">
                  <div class="name-position about-fontsize">
                    <div class="text-white font-oswald">BERNARD</div>
                    <div class="color-yellow font-oswald">FERNANDEZ</div>
                  </div>
                  <div>
                    <img
                      src="../assets/images/player2.jpeg"
                      width="100%"
                      style=" outline: 1px solid orange;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.about-section {
  background: linear-gradient(
      to bottom rgba(82, 78, 78, 0.94),
      rgba(82, 78, 78, 0.94)
    ),
    url("../assets/images/banner2.jpg");
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
  padding: 97px 0px 77px 0px;
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
.col2-padding {
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
.name-position {
  position: absolute;
  left: 20%;
  bottom: 0px;
  line-height: 35px;
}
</style>
