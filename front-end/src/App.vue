<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/gods">Petition the Gods</router-link> |
      <router-link to="/admin">Admin for the Gods</router-link>
    </div>
    <router-view/>
    <footer>
      <a href='https://github.com/m13467/CreativeProject4.git'>
        <img id='fimage' src='/images/git.png' alt='github' />
        <p>MacKenzie Fisher, Nate McMurray</p>
      </a>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF8E7;
}

#nav {
  padding: 30px;
  font-family: papyrus;
}

#nav a {
  font-weight: bold;
  color: #FFF8E7;
}

#nav a.router-link-exact-active {
  color: #FFE8AD;
}
</style>
