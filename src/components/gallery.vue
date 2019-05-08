<template>
  <div>
    <b-row class="p-0 m-0">
      <b-col class="p-0 relative">
        <span class="my-auto arrow-postion">
          <span class="bg-lightblack arrow-padding2 color-yellow"><</span>
          <span class="bg-orange arrow-padding2 color-lightblack">></span>
        </span>
        <img fluid src="../assets/images/g17.jpg" alt="Image 1" width="100%" />
        <div class="text-white font-oswald name-postion ">
          DONEC VEL ORCI SED LEO SEMPER VIVERRA
        </div>
      </b-col>
      <b-col class="p-0"
        ><img fluid src="../assets/images/g16.jpg" alt="Image 1" width="100%"
      /></b-col>
      <b-col class="p-0"
        ><img fluid src="../assets/images/g19.jpeg" alt="Image 1" width="100%"
      /></b-col>
      <b-col class="p-0"
        ><img fluid src="../assets/images/g17.jpg" alt="Image 1" width="100%"
      /></b-col>
    </b-row>
    <div>
      <b-row class="p-0 m-0">
        <b-col class="p-0"
          ><img fluid src="../assets/images/g16.jpg" alt="Image 1" width="100%"
        /></b-col>
        <b-col class="p-0"
          ><img fluid src="../assets/images/g11.jpg" alt="Image 1" width="100%"
        /></b-col>
        <b-col class="p-0"
          ><img fluid src="../assets/images/g13.jpg" alt="Image 1" width="100%"
        /></b-col>
        <b-col class="p-0"
          ><img fluid src="../assets/images/g14.jpg" alt="Image 1" width="100%"
        /></b-col>
      </b-row>
    </div>
  </div>
</template>
<style lang="scss">
.gallery-bg::before {
  content: "";
  transform: skewX(-33deg);
  -webkit-transform: skewX(-33deg);
  background: #fdbd00;
  position: absolute;
  right: 694px;
  top: -1px;
  bottom: 0;
  left: -1000%;
  z-index: -2;
}
.gallery-font {
  font-size: 30px;
  padding: 25px 10px;
}
.para-ml {
  margin-left: 185px;
}
.arrow-postion {
  position: absolute;
  top: 25px;
  right: 25px;
}
.name-postion {
  position: absolute;
  z-index: 1;
  bottom: 25px;
  font-size: 13px;
  left: 25px;
}
.arrow-padding2 {
  padding: 4px 10px;
}
</style>
