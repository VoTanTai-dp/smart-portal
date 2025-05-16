<script setup>
// No logic needed yet
</script>

<template>
  <div class=" full-width-container">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-1 sidebar">
        <nav>
          <ul class="nav">
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
        <div class="row">
          <div class="col map">
            <div class="section map-view">Map View</div>
          </div>
          
          <div class="col sensor">
            <div class="row">
              <div class="col left-view section person-count">Person Count</div>
              <div class="col section vehicle-count">Vehicle Count</div>
            </div>
            <div class="row">
              <div class="col left-view section temp-info">Temperature</div>
              <div class="col section humidity-info">Humidity</div>
            </div>
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

.map{
  padding-left: 0;
  padding-right: 0;
  margin-right: 20px;
}

.map-view{
  height: 420px;
}

.left-view{
  margin-right: 20px;
}

.person-count,
.vehicle-count,
.temp-info,
.humidity-info,
.device-info {
  height: 200px;
}
</style>
