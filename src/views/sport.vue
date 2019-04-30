<template>
  <div>
    <Nav-head></Nav-head>
    <swiperhead></swiperhead>
    <latesresult></latesresult>
    <abouteam></abouteam>
    <supporteam></supporteam>
    <match></match>
    <news></news>
    <gallery></gallery>
    <awards></awards>
  </div>
</template>

<script>
// @ is an alias to /src
import swiperhead from "@/components/sliderhead.vue";
import NavHead from "@/components/Header.vue";
import latesresult from "@/components/latesresult.vue";
import abouteam from "@/components/About.vue";
import supporteam from "@/components/supportteam.vue";
import match from "@/components/match.vue";
import news from "@/components/news.vue";
import gallery from "@/components/gallery.vue";
import awards from "@/components/awards.vue";



export default {
  components: {
    swiperhead,
    NavHead,
    latesresult,
    abouteam,
    supporteam,
    match,
    news,
    gallery,
    awards
  }
};
</script>
<style lang="scss"></style>
