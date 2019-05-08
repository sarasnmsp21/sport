<template>
  <div>
   
    <Nav-head></Nav-head>
    <swiperhead></swiperhead>
    <latesresult></latesresult>
    <abouteam></abouteam>
    <supporteam></supporteam>
    <match></match>
    <news></news>
    <gallerytab></gallerytab>
    <!-- <awards></awards> -->
    <ourteam></ourteam>
    <funshop></funshop>
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
import gallerytab from "@/components/gallerytab.vue";
// import awards from "@/components/awards.vue";
import ourteam from "@/components/ourteam.vue";
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
    gallerytab,
    // awards,
    ourteam,
    funshop,
    lastvideo,
    contact,
    bottom
  }
};
</script>
<style lang="scss">
.container{
  padding: 0;
  margin:0;
}
</style>
