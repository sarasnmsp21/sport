<template>
  <div id="news" class="bg-position mt-6">
    <div class="row p-0 m-0">
      <div class="col-md-9 mx-auto mb-6">
        <div class="heading-fontsize font-oswald">
          <span class="color-lightblack">OUR</span>
          <span class="color-orange"> NEWS</span>
        </div>
        <div class="row p-0 m-0">
          <div class="col-md-8 mx-auto mt-4 mb-4">
            <div class="color-lightgray head-para-fontsize work-sans">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. as
              opposed to using as opposed to using.
            </div>
          </div>
        </div>
        <div class="row p-0 m-0">
          <div class="d-flex">
            <div class="news-img flex-fill">
              <img src="../assets/images/player.jpg" />
            </div>
            <div class="bg-lightgray p-3 work-sans tool-tip flex-fill">
              <div class="news-date-font pt-1 pb-1 color-lightgray">
                Nov 19, 2015
              </div>
               <div class="news-head-font font-weight-bold mb-4">
                PELLENTESQUE LAOREET UENA TURPIS
              </div>
               <div class="color-lightgray news-fontsize ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
            <!-- <div class="bg-lightgray p-3 work-sans tool-tip">
              <div class="news-date-font pt-1 pb-1 color-lightgray">
                Nov 19, 2015
              </div>
              <div class="news-head-font font-weight-bold mb-4">
                PELLENTESQUE LAOREET UENA TURPIS
              </div>
              <div class="color-lightgray news-fontsize">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
              <div class="font-padding mt-4 mb-2">READ MORE ></div>
            </div> -->
            <div class="news-img flex-fill">
              <img src="../assets/images/player.jpg" height="100%" />
            </div>
             <div class="bg-lightgray p-3 work-sans tool-tip flex-fill">
              <div class="news-date-font pt-1 pb-1 color-lightgray">
                Nov 19, 2015
              </div>
               <div class="news-head-font font-weight-bold mb-4">
                PELLENTESQUE LAOREET UENA TURPIS
              </div>
               <div class="color-lightgray news-fontsize ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
            <!-- <div class="bg-lightgray p-3 work-sans tool-tip2">
              <div class="news-date-font pt-1 pb-1 color-lightgray">
                Nov 19, 2015
              </div>
              <div class="news-head-font font-weight-bold mb-4 ">
                PELLENTESQUE LAOREET UENA TURPIS
              </div>
              <div class="color-lightgray news-fontsize ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
              <div class="font-padding mt-4 mb-2">READ MORE ></div>
            </div> -->
          </div>
        </div>
        <div class="mt-4">
          <span class="btn-border mt-5">
            <span class="bg-orange btn-padding">ALL NEWS</span>
          </span>
        </div>
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
</style>
