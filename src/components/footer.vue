<template>
  <div class="footer-bg">
    <div class="col-md-12 p-0">
      <div class="col-md-10 mx-auto text-left p-6">
        <div class="font-oswald video-fontsize d-flex justify-content-between">
          <span>
            <span class="vertical-align mr-2"
              ><img src="../assets/images/football.png" alt=""
            /></span>
            <span class="vertical-align">
              <span class="color-yellow">SPORT</span>
              <span class="color-white">.AK</span>
            </span>
          </span>
          <span>
            <div class=" social-icon-font mt-2 d-flex">
              <span class="m-3 ">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </span>
              <span class="m-3 "
                ><font-awesome-icon :icon="['fab', 'twitter']"
              /></span>
              <span class="m-3 "
                ><font-awesome-icon :icon="['fab', 'google']"
              /></span>
              <span class="m-3 "
                ><font-awesome-icon :icon="['fab', 'pinterest-p']"
              /></span>
              <span class="m-3 "
                ><font-awesome-icon :icon="['fab', 'youtube']"
              /></span>
              <span class="m-3 "
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></span>
              <span class="m-3 "
                ><font-awesome-icon :icon="['fab', 'flickr']"
              /></span>
            </div>
          </span>
        </div>

        <div class="work-sans mt-3 mb-3 light-gray news-fontsize">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. as opposed to
          using 'Content here, content here', making it look like readable
          English.using 'Content here, content here', making it look like
          readable English.
        </div>
        <div class="d-flex pb-5 footer-border mb-3">
          <div class="col-md-6 pl-0">
            <div class="mb-2">
              <span class="font-oswald color-white text-left font-25"
                >LAST MATCH</span
              >
              <span class="float-right">
                <span class="bg-lightblack arrow-padding2 color-yellow">
                  <font-awesome-icon :icon="['fas', 'angle-left']" />
                </span>
                <span class="bg-lightblack arrow-padding2 color-yellow">
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </span>
              </span>
            </div>

            <div
              class="my-auto  mx-auto tournament-font d-flex justify-content-between tour-bg p-1"
            >
              <div class="d-flex">
                <span
                  ><img
                    src="../assets/images/eng-logo.png"
                    width="20px"
                    class="mr-3"
                    alt=""
                /></span>
                <span class="mr-3 color-white font-oswald">CAMBRIDGEHIRE</span>
                <div class="my-auto color-orange vs-fontsize2">VS</div>
                <span class="ml-3 color-white font-oswald">CHINA</span>
                <span
                  ><img
                    src="../assets/images/ame-logo.png"
                    width="20px"
                    class="ml-3"
                    alt=""
                /></span>
              </div>
              <div class="read-font2 color-orange ">
                Read more
                <span>
                  <font-awesome-icon :icon="['fas', 'angle-right']"
                /></span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <span class="font-oswald color-white font-25">NEWSLETTERS</span>
              <span class="float-right news-fontsize">
                Suspendises sodales, magna at dignissim <br />
                cursus, velit ex porttitor eros.
              </span>
            </div>
            <div style="clear:both"></div>
            <div class="d-flex">
              <span class="flex-fill">
                <input
                  type="email"
                  class="form-control work-sans tour-bg "
                  id="email"
                  placeholder="Enter your email"
                />
              </span>
              <button class="ml-2 bg-orange work-sans">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between news-fontsize work-sans">
          <div>
            <span class="mr-5">About</span>
            <span class="mr-5">Players</span>
            <span class="mr-5">Match</span>
            <span class="mr-5">Results</span>
            <span class="mr-5">News</span>
          </div>
          <div>
            Copyright © 2015 <span class="text-white"> Spartak Team.</span> All
            Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer-bg {
  background: linear-gradient(
      to bottom rgba(82, 78, 78, 0.94),
      rgba(82, 78, 78, 0.94)
    ),
    url("../assets/images/banner3.jpg");
}
.vertical-align {
  vertical-align: middle;
}
.news-fontsize {
  font-size: 14px;
  color: #888888;
}
.footer-border {
  border-bottom: 1px solid gray;
}
.p-6 {
  padding: 70px 0px;
}
.font-25 {
  font-size: 25px;
}
.tour-bg {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(58, 55, 55, 0.94))
    ),
    url(/img/banner3.85ef0ed7.jpg);
}
.read-font2 {
  font-size: 10px;
}
</style>
