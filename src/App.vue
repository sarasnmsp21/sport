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
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 600;
  src: local("Oswald Light"), local("Oswald-Light"),
    url(https://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-sh0Tvs9CE5Q.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Google Sans Regular"), local("GoogleSans-Regular"),
    url(https://fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Kwp5MKg.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
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
.font-oswald600 {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 600;
  src: local("Oswald Light"), local("Oswald-Light"),
    url(https://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-sh0Tvs9CE5Q.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
.font-oswald {
  font-family: "Oswald";
  font-style: normal;
  src: local("Oswald Light"), local("Oswald-Light"),
    url(https://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-sh0Tvs9CE5Q.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
.google-sans {
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Google Sans Regular"), local("GoogleSans-Regular"),
    url(https://fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Kwp5MKg.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
.roboto {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
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
