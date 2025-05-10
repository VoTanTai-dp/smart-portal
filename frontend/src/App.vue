<!--
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
-->

<script setup>
// No logic needed yet
</script>

<template>
  <div class="container-fluid full-width-container">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-auto sidebar">
        <nav>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-house"></i> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-person"></i> Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-camera-video"></i> Devices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-bar-chart"></i> Reports</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Main content -->
      <div class="col content">
        <div class="row">
          <div class="col-12 section cam-view">Camera View</div>
        </div>
        <div class="row">
          <div class="col-4 section map-view">Map View</div>
          <div class="col-4 section person-count">Person Count</div>
          <div class="col-4 section vehicle-count">Vehicle Count</div>
        </div>
        <div class="row">
          <div class="col-4 section temp-info">Temperature</div>
          <div class="col-4 section humidity-info">Humidity</div>
          <div class="col-4 section device-info">Device Info</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body{
  padding: 0;
  margin: 0;
}

.container-fluid {
  padding: 0;
  margin: 10px, 20px;
}

.full-width-container {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

.sidebar {
  background: #343a40;
  color: #fff;
  height: 100vh;
  padding: 20px 10px;
  min-width: 90px;
}

.nav-link {
  color: #fff;
  margin-bottom: 10px;
}

.content {
  padding: 20px;
}

.section {
  background: #e9ecef;
  margin-bottom: 20px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid #ccc;
}

.cam-view {
  height: 300px;
}

.map-view,
.person-count,
.vehicle-count,
.temp-info,
.humidity-info,
.device-info {
  height: 200px;
}
</style>
