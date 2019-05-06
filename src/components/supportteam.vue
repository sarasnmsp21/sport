<template>
  <div class="col-md-9 p-0 mx-auto ">
    <div class="text-center  padding background mt-mb ">
      <div class=" black-bg">
        
          <span class="support-fontsize font-oswald600 ">
            <span class=" color-orange">SUPPORT</span>
            <span class="text-white"> TEAM</span>
          </span>

          <div class="m-3 text-white col-md-9 mx-auto para-fontsize mb-5">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it readable English. distribution of letters, as
            opposed to using 'Content here, content here', making it look like.
          </div>
          <div class="mb-4">
            <span class="mb-4 text-white top-border ">
              <span class="mr-4">$5</span>
              <span class="mr-4">$10</span>
              <span class="mr-4">$25</span>
              <span class="mr-4">$50</span>
              <span class="mr-4">$75</span>
              <span class="mr-4">$100</span>
            </span>
           
          </div>
           <span class="btn-border">
              <span class="bg-orange btn-padding">DONATE</span>
            </span>
        
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
      margin: 90px 0 90px 0 !important;
    position: relative;
    text-align: center;
    background-size: cover;
  background: linear-gradient(to bottom rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url("../assets/images/banner3.jpg");
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
// .div-outline {
//   border: 1px solid $color-lightyellow;
// }
.mt-mb {
  margin-top: 70px;
  margin-bottom: 70px;
}
.para-fontsize{
  font-size:14px;
}
.support-fontsize {
  font-size: 30px;
}
.top-border {
  border-top: 3px solid;
}
.padding {
      padding: 55px 0 50px 0;
    position: relative;
}
.padding::before{
  content: '';
    width: 25%;
    position: absolute;
    top: 70px;
    bottom: 60px;
    left: 70px;
    border: solid #ffc722;
    border-width: 1px 0 1px 1px;
}
.padding::after{
      content: '';
    width: 25%;
    position: absolute;
    top: 70px;
    bottom: 60px;
    right: 70px;
    border: solid #ffc722;
    border-width: 1px 1px 1px 0;
}
</style>
