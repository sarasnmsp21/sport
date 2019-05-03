<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/sport">sport</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
/* latin-ext */
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Work Sans Light"), local("WorkSans-Light"),
    url(https://fonts.gstatic.com/s/worksans/v4/QGYpz_wNahGAdqQ43Rh314L8lthN2fk.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
.work-sans {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Work Sans Light"), local("WorkSans-Light"),
    url(https://fonts.gstatic.com/s/worksans/v4/QGYpz_wNahGAdqQ43Rh314L8lthN2fk.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
