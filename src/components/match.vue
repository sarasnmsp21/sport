<template>
  <div id="next-match" class="match-bg">
    <div class="col-md-9 d-flex mx-auto div-padding font-oswald">
      <div class="col-md-6 bg-light p-0 border-b">
        <div class="d-flex">
          <div class="ml-mt match-fontsize">
            <span class="color-lightblack">NEXT</span>
            <span class="color-orange"> MATCH</span>
          </div>
          <div></div>
        </div>
        <div
          id="match"
          class="bg-lightgray timer-mt mb-4 p-2 font-oswald"
        ></div>
        <div>
          <span><img src="../assets/images/eng-logo.png" alt=""/></span>
          <span class="m-3 color-lightblack">ENGLAND</span>
          <span class="bg-orange vs-fontsize1 p-1">VS</span>
          <span class="m-3 color-lightblack ">AMSTERDAM</span>
          <span><img src="../assets/images/ame-logo.png" alt=""/></span>
        </div>
        <div class="mt-2 color-lightgray date-fontsize work-sans">
          October 28, 2016 | 8:08 am
        </div>
        <div class="color-lightgray tournament-fontsize work-sans ">
          Cambridgeshire UK
        </div>
      </div>
      <div class="col-md-6 bg-lightblack  p-0">
        <div
          class="d-flex date-border-bottom text-white"
          v-for="match in matchs"
          v-bind:key="match.index"
        >
          <div class="date-border-right">
            <div class="p-2 color-lightgray">{{ match.date }}</div>
          </div>
          <div class="my-auto tournament-font mx-auto ">
            <span
              ><img
                src="../assets/images/eng-logo.png"
                width="20px"
                class="mr-3"
                alt=""
            /></span>
            <span class="mr-3">{{ match.country1 }}</span>
            <span class="mr-3 color-orange vs-fontsize2">VS</span>
            <span>{{ match.country2 }}</span>
            <span
              ><img
                src="../assets/images/ame-logo.png"
                width="20px"
                class="ml-3"
                alt=""
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      matchs: [
        {
          date: "November 19, 2015",
          country1: "CAMBRIDGEHIRE",
          country2: "CHINA"
        },
        {
          date: "November 19, 2015",
          country1: "CAMBRIDGEHIRE",
          country2: "CHINA"
        },
        {
          date: "November 13, 2015",
          country1: "ENGLAND",
          country2: "AMSTERDAM"
        },
        {
          date: "November 13, 2015",
          country1: "CAMBRIDGEHIRE",
          country2: "CHINA"
        },
        {
          date: "November 19, 2015",
          country1: "KING",
          country2: "CHINA"
        },
        {
          date: "November 13, 2015",
          country1: "ENGLAND",
          country2: "AMSTERDAM"
        },
        {
          date: "November 19, 2015",
          country1: "CAMBRIDGEHIRE",
          country2: "CHINA"
        }
      ]
    };
  }
};
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("match").innerHTML =
    days + "DAYS : " + hours + "HRS : " + minutes + "MIN :" + seconds + "SEC ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("match").innerHTML = "EXPIRED";
  }
}, 1000);
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.match-bg {
  background: $color-lightyellow;
}
.date-border-right {
  border-right: 1px solid;
  font-size: 0.625rem;
  padding: 4px 15px;
  border-color: $color-dark-gray;
}
.date-border-bottom {
  border-bottom: 1px solid;
  border-color: $color-dark-gray;
}
.bg-lightgray {
  background: $bg-lightgray;
}
.bg-lightblack {
  background-color: $color-mid-gray;
}
.date-fontsize {
  font-size: 0.7rem;
}
.tournament-fontsize {
  font-size: 0.75rem;
}
.tournament-font {
  font-size: 0.8125rem;
  font-weight: 600;
}
.vs-fontsize2 {
  font-size: 0.625rem;
}
.match-fontsize {
  font-size: 1.5625rem;
}
.match-fontsize::before {
  content: "";
  height: 1px;
  background: #ffc722;
  position: absolute;
  left: 166px;
  right: 18px;
  top: 17%;
}
.ml-mt {
  margin-left: 35px;
  margin-top: 30px;
}
.div-padding {
  padding: 80px 0px;
}
.timer-mt {
  margin-top: 32px;
}
.border-b {
  border-bottom: 3px solid;
}
.vs-fontsize1 {
  font-size: 0.75rem;
}
</style>
