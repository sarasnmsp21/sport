<template>
  <div>
    <Nav-head></Nav-head>
    <swiperhead></swiperhead>
    <latesresult v-scroll-to="'#result'"></latesresult>
    <abouteam></abouteam>
    <supporteam></supporteam>
    <match></match>
    <news></news>
    <gallery></gallery>
    <awards></awards>
    <ourteam></ourteam>
    <funshop></funshop>
    <swiper></swiper>
    <lastvideo></lastvideo>
    <contact></contact>
    <bottom></bottom>
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
import ourteam from "@/components/ourteam.vue";
import swiper from "@/components/swiper.vue";
import funshop from "@/components/funshop.vue";
import lastvideo from "@/components/lastvideo.vue";
import contact from "@/components/contact.vue";
import bottom from "@/components/footer.vue";



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
    awards,
    ourteam,
    swiper,
    funshop,
    lastvideo,
    contact,
    bottom
  }
};
</script>
<style lang="scss"></style>
