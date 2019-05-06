<template>
  <div id="news" class="bg-position">
    <div class="col-md-9 mx-auto mt-5">
      <div class="heading-fontsize font-oswald">
        <span class="color-lightblack">OUR</span>
        <span class="color-orange"> NEWS</span>
      </div>
      <div
        class="mt-3 mb-4 col-md-8 mx-auto color-lightgray head-para-fontsize work-sans"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. as opposed to
        using as opposed to using.
      </div>
      <div class="d-flex">
        <div>
          <img src="../assets/images/player.jpeg" width="100%" height="100%" />
        </div>
        <div class="bg-lightgray p-3 work-sans">
          <div class="news-date-font pt-1 pb-2 color-lightgray">
            Nov 19, 2015
          </div>
          <div class="news-head-font font-weight-bold mb-3">
            PELLENTESQUE LAOREET UENA TURPIS
          </div>
          <div class="color-lightgray news-fontsize">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. as
            opposed to using
          </div>
          <div class="font-padding">READ MORE ></div>
        </div>
        <div>
          <img src="../assets/images/player.jpeg" width="100%" height="100%" />
        </div>
        <div class="bg-lightgray p-3 work-sans">
          <div class="news-date-font pt-1 pb-2 color-lightgray">
            Nov 19, 2015
          </div>
          <div class="news-head-font font-weight-bold mb-3 ">
            PELLENTESQUE LAOREET UENA TURPIS
          </div>
          <div class="color-lightgray news-fontsize ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. as
            opposed to using
          </div>
          <div class="font-padding">READ MORE ></div>
        </div>
      </div>
      <div class="mt-5">
        <span class="btn-border">
          <span class="bg-orange btn-padding">ALL NEWS</span>
        </span>
      </div>
    </div>
    <div class="bg-image"></div>
  </div>
</template>
<style lang="scss">
.heading-fontsize {
  font-size: 1.875rem;
}
.bg-image {
  background: url("../assets/images/ground8.jpg") no-repeat;
  height: 246px;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 230px;
}
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
  padding-top: 20px;
  cursor: pointer;
}
.news-fontsize {
  font-size: 0.87rem;
}
</style>
