<template>
  <div class="support-team">
    <div class="container-fluid">
      <div class="row">
        <div class="p-top-bottom">
          <div class="col-md-9 mx-auto">
            <div class="relative padding-40 yellow-border bg-gradient-black">
              <span class="support-fontsize font-oswald">
                <span class=" color-orange">SUPPORT</span>
                <span class="text-white"> TEAM</span>
              </span>
              <div
                class="m-3 text-white col-md-9 mx-auto para-fontsize mb-4 work-sans"
              >
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it readable English. distribution of
                letters, as opposed to using 'Content here, content here',
                making it look like.
              </div>
              <div class="mb-4 border-display">
                <span class=" text-white top-border"></span>
                <span class="text-white mx-auto para-fontsize d-flex  ">
                  <li class="m-2 mr-4">$ 5</li>
                  <li class="m-2 mr-4">$ 10</li>
                  <li class="m-2 mr-4">$ 25</li>
                  <li class="m-2 mr-4">$ 50</li>
                  <li class="m-2 mr-4">$ 75</li>
                  <li class="m-2 mr-4">$ 100</li>
                </span>
              </div>
              <div>
                <span class="btn-border">
                  <span class="bg-orange btn-padding">
                    DONATE
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="support" class="col-md-9 mx-auto p-top-bottom ">
   
  </div> -->
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
.relative {
  position: relative;
}
.padding-40 {
  padding: 40px 0px;
}
fieldset {
  border: 1px solid gray;
}
legend {
  width: 40%;
}
.bg-gradient-black {
  text-align: center;
  background-size: cover;
  background: linear-gradient(
      to bottom rgba(82, 78, 78, 0.94),
      rgba(82, 78, 78, 0.94)
    ),
    url("../assets/images/banner2.jpg");
  z-index: -1;
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
.para-fontsize {
  font-size: 0.75rem;
}
.para-fontsize > li {
  list-style-type: none;
  cursor: pointer;
}
.support-fontsize {
  font-size: 1.875rem;
}
.top-border {
  border-top: 3px solid;
}

.yellow-border::before {
  content: "";
  width: 25%;
  position: absolute;
  top: 60px;
  bottom: 50px;
  left: 70px;
  border: solid #ffc722;
  border-width: 1px 0 1px 1px;
}
.yellow-border::after {
  content: "";
  width: 25%;
  position: absolute;
  top: 60px;
  bottom: 50px;
  right: 70px;
  border: solid #ffc722;
  border-width: 1px 1px 1px 0;
}
.border-display {
  display: inline-grid;
}
</style>
