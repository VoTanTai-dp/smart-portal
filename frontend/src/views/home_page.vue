<script setup>
// No logic needed yet
</script>

<template>
  <div class="container-fluid full-width-container">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-1 sidebar">
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
      <div class="col-sm col-11 content">
        <div class="row">
          <div class=" section cam-view">Camera View</div>
        </div>
        <div class="row flex-column">
          <div class="view map">
            <div class="col-6 section map-view">Map View</div>
          </div>
          
          <div class="col-5 view sensor">
            <div class=" section person-count">Person Count</div>
            <div class=" section vehicle-count">Vehicle Count</div>
            <div class=" section temp-info">Temperature</div>
            <div class=" section humidity-info">Humidity</div>
          </div>
        </div>
        <div class="row">
          <div class=" section device-info">Device Info</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

.nav-link {
  color: #fff;
  margin-bottom: 10px;
}

.content {
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
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
  height: 500px;
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
