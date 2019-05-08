<template>
  <div class="d-flex text-right">
    <div class="col-md-6 p-0">
      <iframe
        src="http://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed"
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0"
      ></iframe>
    </div>
    <div class="col-md-6 bg-white form-padding ">
      <div class="relative">
        <div class="color-lightblack font-oswald video-fontsize">
          GET IN TOUCH
        </div>
        <input
          type="text"
          class="form-control mt-3 mb-3 work-sans"
          id="usr"
          placeholder="Name"
        />
        <input
          type="email"
          class="form-control mb-3 work-sans"
          id="email"
          placeholder="Email"
        />
        <input
          type="text"
          class="form-control message-padding work-sans"
          id="email"
          placeholder="Message"
        />
      </div>
      <span class="border-padding work-sans button-position ">
        <span class="bg-orange btn-padding">SEND</span>
      </span>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
.form-padding {
  padding: 60px 120px 60px 60px;
}
.form-control {
  border-radius: 0;
}
.message-padding {
  padding-bottom: 105px;
  padding-top: 20px;
}
.button-position {
  position: absolute;
  right: 121px;
  bottom: 61px;
}
.border-padding {
  padding: 3px 1px 6px 1px;
  border: 1px solid $color-lightyellow;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  /* border-color: #80bdff; */
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
input::placeholder {
  color: $color-dark-gray;
  font-size: 12px;
}
</style>
