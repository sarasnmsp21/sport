<template>
  <div id="home">
    <div class="col-md-10 mx-auto">
      <div class="text-right social-icon-position col social-icon-font mt-2">
        <span class="m-3 ">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </span>
        <span class="m-3 "
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></span>
        <span class="m-3 "><font-awesome-icon :icon="['fab', 'google']"/></span>
        <span class="m-3 "
          ><font-awesome-icon :icon="['fab', 'pinterest-p']"
        /></span>
        <span class="m-3 "
          ><font-awesome-icon :icon="['fab', 'youtube']"
        /></span>
        <span class="m-3 "
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></span>
        <span class="m-3 "><font-awesome-icon :icon="['fab', 'flickr']"/></span>
      </div>
    </div>
    <div>
      <b-navbar toggleable="lg" class="menu-position col-md-12 menu-bg fixed ">
        <div class="col-md-10 d-flex mx-auto">
          <b-navbar-brand href="#" class="brandname-font font-oswald">
            <img
              src="../assets/images/football2.png"
              alt=""
              width="30"
              height="30"
              class="mr-3"
            />
            <span class="vertical-align ">
              <span class="brandname-color1">SPORT</span>
              <span class="brandname-color">.AK</span>
            </span>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto menu-font font-oswald">
              <b-nav-item href="#" v-scroll-to="'#home'">HOME</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#result'">ABOUT</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#team'">PAGES</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#support'">MATCH</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#next-match'">NEWS</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#news'">SHOP</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#gallery'">CONTACT</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";

.social-icon-position {
  position: absolute;
  z-index: 1;
}
.social-icon-font {
  font-size: 0.6875rem;
  color: $color-social;
  cursor: pointer;
}
.menu-position {
  position: absolute;
  z-index: 1;
  top: 1.75rem;
}
.menu-bg {
  background-color: $menu-bg;
  padding: 0px;
}
.menu-font {
  font-size: 0.87rem;
}
.brandname-font {
  font-size: 1.875rem;
}
.navbar-brand {
    display: inline-block;
    padding-top: 0;
    padding-bottom: 0;}
.brandname-color {
  color: $color-white;
}
.brandname-color1 {
  color: $color-mid-gray;
}
.navbar-light .navbar-nav .nav-link {
  color: $color-white;
  padding: 1.125rem;
  border-bottom: 3px solid transparent;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: $color-lightyellow;
  border-bottom: 3px solid $color-lightyellow;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: $color-lightyellow;
  border-bottom: 3px solid $color-lightyellow;
}

.navbar-brand::after {
  content: "";
  transform: skewX(-33deg);
  -webkit-transform: skewX(-33deg);
  background: #ffc722;
  position: absolute;
  right: 833px;
  top: 0;
  bottom: 0;
  left: -1000%;
  z-index: -1;
}
.navbar-brand::before {
  content: "";
  transform: skewX(-33deg);
  -webkit-transform: skewX(-33deg);
  background: #fdbd00;
  position: absolute;
  right: 827px;
  top: -30px;
  bottom: -11px;
  left: -1000%;
  z-index: -2;
  transition: 400ms all;
  -webkit-transition: 400ms all;
}
.vertical-align {
  vertical-align: middle;
}
</style>
