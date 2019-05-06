<template>
  <div id="gallery">
    <div class="d-flex col-md-9 mx-auto gallery-bg mt-4 pt-4">
      <div class="my-auto gallery-font font-oswald ">GALLERY</div>
      <div
        class="my-auto para-ml text-left color-lightgray fontsize-lh work-sans"
      >
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
      </div>
    </div>
    <div class="bg-lightblack font-oswald">
      <b-tabs content-class="mt-3">
        <b-tab title="ALL" active><gallery></gallery></b-tab>
        <b-tab title="VOLLEYBALL"><gallery></gallery></b-tab>
        <b-tab title="HOCKEY"><gallery></gallery></b-tab>
        <b-tab title="BASKETBALL"><gallery></gallery></b-tab>
        <b-tab title="FOOTBALL"><gallery></gallery></b-tab>
        <b-tab title="RUGBY"><gallery></gallery></b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import gallery from "@/components/gallery.vue";
export default {
  components: {
    gallery
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.fontsize-lh {
  font-size: 0.9375rem;
  line-height: 18px;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: $color-lightyellow;
  background-color: #353333;
  border: 0;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border: 0;
}
.nav-tabs {
  border: 0;
  margin-left: 162px;
  font-size: 0.75rem;
}
.nav-tabs .nav-link {
  border: 0;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
a {
  color: $color-white;
  text-decoration: none;
  background-color: transparent;
  // font-size: 12px;
}
a:hover {
  color: $color-lightyellow;
}
</style>
