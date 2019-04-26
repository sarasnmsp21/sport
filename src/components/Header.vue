<template>
  <div>
    <div class="text-right">
      <span class="m-3 "
        ><font-awesome-icon :icon="['fab', 'facebook-f']"
      /></span>
      <span class="m-3 "><font-awesome-icon :icon="['fab', 'twitter']"/></span>
      <span class="m-3 "><font-awesome-icon :icon="['fab', 'google']"/></span>
      <span class="m-3 "
        ><font-awesome-icon :icon="['fab', 'pinterest-p']"
      /></span>
      <span class="m-3 "
        ><font-awesome-icon :icon="['fab', 'pinterest-p']"
      /></span>
      <span class="m-3 "
        ><font-awesome-icon :icon="['fab', 'pinterest-p']"
      /></span>
      <span class="m-3 "
        ><font-awesome-icon :icon="['fab', 'pinterest-p']"
      /></span>
    </div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">SPORT.AK</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">HOME</b-nav-item>
          <b-nav-item href="#">ABOUT</b-nav-item>
          <b-nav-item href="#">PAGES</b-nav-item>
          <b-nav-item href="#">MATCH</b-nav-item>
          <b-nav-item href="#">NEWS</b-nav-item>
          <b-nav-item href="#">SHOP</b-nav-item>
          <b-nav-item href="#">CONTACT</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style lang="scss"></style>
