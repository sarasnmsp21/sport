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

/* cyrillic */
@font-face { font-family: 'Oswald'; font-style: normal;
font-weight: 300; src: local('Oswald Light'), local('Oswald-Light'),
url(https://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-sh0Tvs9CE5Q.woff2)
format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }

<style lang="scss">
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
