<template>
  <div class="match-bg">
    <div class="col-md-10 d-flex mx-auto pt-5 pb-5">
      <div class="col-md-6 bg-light p-0">
        <div>NEXT MATCH</div>
        <div id="match" class="bg-secondary mt-5 mb-4 p-2"></div>
        <div>
          <span class="m-4">ENGLAND</span>
          <span>VS</span>
          <span class="m-4  ">AMSTERDAM</span>
        </div>
        <div class="m-2">October 28, 2016 | 8:08 am</div>
        <div class="m-2">Cambridgeshire UK</div>
      </div>
      <div class="col-md-6 bg-secondary p-0">
        <div
          class="d-flex date-border-bottom"
          v-for="match in matchs"
          v-bind:key="match.index"
        >
          <div class="date-border-right">
            <div class="p-2">{{ match.date }}</div>
          </div>
          <div class="p-2">
            <span>{{ match.country1 }}</span>
            <span>VS</span>
            <span>{{ match.country2 }}</span>
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
          date: "November 28, 2015",
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
          date: "November 28, 2015",
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
          date: "November 28, 2015",
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
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

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
}
.date-border-bottom {
  border-bottom: 1px solid;
}
</style>
