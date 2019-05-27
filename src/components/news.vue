<template>
  <div id="news" class="p-top-70">
    <div class="container-fluid">
      <div class="row">
        <div class="relative">
          <div class="col-md-9 mx-auto mb-6">
            <div class="heading-fontsize font-oswald">
              <span class="color-lightblack">OUR</span>
              <span class="color-orange"> NEWS</span>
            </div>
            <div class="p-right-left-120 mt-4 mb-4">
              <div class="color-lightgray head-para-fontsize work-sans">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. as
                opposed to using as opposed to using.
              </div>
            </div>
            <div class="d-inline-flex font-oswald">
              <div class="news-img ">
                <img src="../assets/images/player.jpg" />
              </div>
              <!-- <div class="bg-lightgray">
                <div class="fontsize-10">Nov 19, 2015</div>
                <div class="fontsize-12">PELLENTESQUE LAOREET UENA TURPIS</div>
                <div class="color-lightgray news-fontsize width-200 ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div> -->
              <div class="bg-lightgray p-3 work-sans tool-tip flex-fill">
                <div class="news-date-font pt-1 pb-1 color-lightgray">
                  Nov 19, 2015
                </div>
                <div class="news-head-font font-weight-bold mb-4">
                  PELLENTESQUE LAOREET UENA TURPIS
                </div>
                <div class="color-lightgray news-fontsize width-200 ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <!-- <div>Read more</div> -->
              </div>
              <div class="news-img ">
                <img src="../assets/images/player.jpg" height="100%" />
              </div>
              <!-- <div class="bg-lightgray">
                <div class="fontsize-10">Nov 19, 2015</div>
                <div class="fontsize-12">PELLENTESQUE LAOREET UENA TURPIS</div>
                <div class="color-lightgray news-fontsize width-200 ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div> -->
              <div class="bg-lightgray p-3 work-sans tool-tip flex-fill">
                <div class="news-date-font pt-1 pb-1 color-lightgray">
                  Nov 19, 2015
                </div>
                <div class="news-head-font font-weight-bold mb-4">
                  PELLENTESQUE LAOREET UENA TURPIS
                </div>
                <div class="color-lightgray news-fontsize width-200 ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <!-- <div>Read more</div> -->
              </div>
            </div>

            <!-- <div class="mt-4">
              <span class="">
                <span class="bg-orange btn-padding">ALL NEWS</span>
              </span>
            </div> -->
          </div>
          <div>
            <img
              src="../assets/images/ground8.jpg"
              alt="ground image"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.fontsize-10 {
  font-size: 10px;
}
.fontsize-12 {
  font-size: 12px;
}
.width-200 {
  width: 200px;
}
.mt-70 {
  margin-top: 70px;
}
.mb-70 {
  margin-bottom: 70px;
}
.pt-70 {
  padding-top: 70px;
}
.pb-70 {
  padding-bottom: 70px;
}
.heading-fontsize {
  font-size: 1.875rem;
}
// .bg-image {
//   background: url("../assets/images/ground8.jpg") no-repeat;
//   width: 100%;
//   height: 300px;
//   z-index: -1;
//   top: 230px;
// }
.news-date-font {
  font-size: 0.66rem;
  font-weight: bold;
}
.news-head-font {
  font-size: 0.66rem;
}
.head-para-fontsize {
  font-size: 0.87rem;
}
.bg-position {
  position: relative;
}
.font-padding {
  font-size: 0.625rem;
  font-weight: bold;
  cursor: pointer;
}
.news-fontsize {
  font-size: 0.87rem;
}
.tool-tip::before {
  top: 40%;
  border: solid transparent;
  content: " ";
  position: absolute;
  border-right-color: #efefef;
  border-width: 21px;
  left: -42px;
}
.tool-tip2::before {
  top: 40%;
  border: solid transparent;
  content: " ";
  position: absolute;
  border-right-color: #efefef;
  border-width: 21px;
  right: 223px;
}
.news-img > img {
  height: auto;
  max-width: 100%;
  overflow: hidden;
}
.p-right-left-120 {
  padding-right: 120px;
  padding-left: 120px;
}
.p-top-70 {
  padding-top: 70px;
}
</style>
