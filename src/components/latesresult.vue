<template>
  
    <div id="result" class="p-top-bottom">
      <div class="text-center col-md-9 mx-auto mb-2 fieldset">
        <span class="text-result bg-white pl-pr head-font-size font-oswald">
          <span class="color-midgray">LATEST</span>
          <span class="color-yellow "> RESULTS</span>
        </span>
        <div class="mt-3 place-font work-sans">Cambridgeshire UK</div>
        <div class="mt-3 mb-2 color-lightgray tourdate-fontsize work-sans">
          November 13, 2015 | 9:00 pm
        </div>
      </div>

      <div class="mb-4 score-bg">
          <span
                class="text-center score-fontsize work-sans color-lightgray font-weight-bold mr-4"
                >SCORE</span>
        <div class="col-md-9 mx-auto d-flex justify-content-between">
         
          <div class="my-auto bg-white ml-5 img-border">
            <img src="../assets/images/eng-logo.png" alt="" />
          </div>

          <div class="d-flex font-oswald pb-3">
            <span class="my-auto mr-4 country-fontsize">ENGLAND</span>
            <!-- <div class="mb-3 score-font font-weight-bold">SCORE</div> -->
            <span class="my-auto">
             
              <div class="outline ">
                <span class="vs-padding bg-orange color-midgray"
                  ><span class="num-font">4</span>
                </span>
                <span class="vs-position color-midgray "> vs</span>
                <span class="vs-padding bg-lightblack color-yellow"
                  ><span class="num-font"> 2</span></span
                >
              </div>
            </span>
            <span class=" my-auto ml-4 country-fontsize ">AMSTERDAM</span>
          </div>
          <div class="my-auto bg-white mr-5 img-border">
            <img src="../assets/images/ame-logo.png" alt="" />
          </div>
        </div>
      </div>
      <div
        class="col-md-9 mx-auto fieldset2 color-lightgray  mb-4"
      >
        <div class="col-md-8 mx-auto work-sans place-para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. as opposed to
          using 'Content here, content.
        </div>
      </div>
      <span class="bg-white pl-pr text-more">
        <span class="btn-border work-sans">
          <span class="bg-orange btn-padding">MORE INFO</span>
        </span>
      </span>
    </div>
  </b-row>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
.color-lightgray {
  color: $color-light-gray;
}
.color-darkgray {
  color: $color-dark-gray;
}
.color-yellow {
  color: $color-lightyellow;
}
.color-midgray {
  color: $color-mid-gray;
}
.bg-lightblack {
  background-color: $bg-lightblack;
}
.bg-orange {
  background-color: $color-yellow;
}
.fieldset::before {
  content: "";
  border: solid $color-yellow;
  border-width: 1px 1px 0 1px;
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 22px;
  bottom: 0;
}
.fieldset2::after {
  content: "";
  border: solid #fdbd00;
  border-width: 0px 1px 1px 1px;
  position: absolute;
  z-index: -1;
  left: 0px;
  right: 0;
  top: 0px;
  bottom: -42px;
}
.fieldset2 {
  text-align: center;
  position: relative;
  z-index: -1;
}

.fieldset.text-result {
  padding: 0 65px;
  background: $color-white;
  font-size: 2.375rem;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
}
.fieldset {
  text-align: center;
  position: relative;
  z-index: 1;
}
.head-font-size {
  font-size: 1.875rem;
}
.place-font {
  font-size: 1.05rem;
  color: $color-mid-gray;
}
.tourdate-fontsize {
  font-size: 0.7rem;
}
.vs-position {
  border-radius: 50%;
  background-color: $color-yellow;
  position: absolute;
  z-index: 1;
  text-align: center;
      top: 14px;
    margin-left: -11px;
 
  padding: 0px 5px 1px 5px;
 
  font-size: 15px;
}
.score-font {
  font-size: 0.625rem;
  color: $color-light-gray;
}
.score-bg {
  background-color: $bg-lightgray;
}
.btn-padding {
  padding: 10px 45px;
  font-size: 0.625rem;
  font-weight: bold;
}
.btn-border {
  border: 1px solid #fdbd00;
  padding: 6px 2px 10px 2px;
}
.pl-pr {
  padding-left: 60px;
  padding-right: 60px;
}
.outline {
  outline: 1px solid $color-yellow;
  padding: 3px 1px 16px;
}
.vs-padding {
  padding: 19px 25px;
}
.num-font {
  font-size: 1.875rem;
}
.country-fontsize {
  font-size: 1.5625rem;
}
.p-top-bottom{
  padding-top: 70px;
  padding-bottom: 70px;
}
.img-border {
  border: 1px solid $color-social;
}
.score-fontsize {
  font-size: 12px;
}
.place-para{
  font-size: 13px;

}
</style>
