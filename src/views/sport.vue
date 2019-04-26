<template>
  <div>
    <Nav-head></Nav-head>
    <swiperhead></swiperhead>
    <latesresult></latesresult>
  </div>
</template>

<script>
// @ is an alias to /src
import swiperhead from "@/components/sliderhead.vue";
import NavHead from "@/components/Header.vue";
import latesresult from "@/components/latesresult.vue";


export default {
  components: {
    swiperhead,
    NavHead,
    latesresult
  }
};
</script>
<style lang="scss"></style>
