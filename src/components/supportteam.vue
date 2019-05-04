<template>
  <div class="col-md-9 p-0 mx-auto background mt-mb">
    <div class="text-center col-md-10 mx-auto p-5 ">
      <div class="div-outline black-bg">
        <div>
          <span class="support-fontsize font-oswald600 ">
            <span class=" color-orange">SUPPORT</span>
            <span class="text-white"> TEAM</span>
          </span>

          <div class="m-3 text-white">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it readable English. distribution of letters, as
            opposed to using 'Content here, content here', making it look like.
          </div>
          <div class="">
            <span class="mb-4 text-white top-border">
              <span class="mr-4">$5</span>
              <span class="mr-4">$10</span>
              <span class="mr-4">$25</span>
              <span class="mr-4">$50</span>
              <span class="mr-4">$75</span>
              <span class="mr-4">$100</span>
            </span>
            <span class="btn-border">
              <span class="bg-orange btn-padding">DONATE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
fieldset {
  border: 1px solid gray;
}
legend {
  width: 40%;
}
.background {
  background: linear-gradient(to bottom rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url("../assets/images/banner3.jpg");
  background-size: cover;
  z-index: -1;
}
.black-bg::after {
  background-color: green;
  background-size: cover;
  z-index: 1;
}
.color-lightblack {
  color: $bg-lightblack;
}
.div-outline {
  border: 1px solid $color-lightyellow;
}
.mt-mb {
  margin-top: 70px;
  margin-bottom: 70px;
}
.support-fontsize {
  font-size: 30px;
}
.top-border {
  border-top: 3px solid;
}
</style>
