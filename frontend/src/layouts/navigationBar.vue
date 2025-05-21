<script setup>
// Không cần logic setup lúc này
</script>

<template>
    <div class="col-1 sidebar">
        <nav>
            <RouterLink
                style="text-decoration: none; color: white; display:flex; justify-content: center; align-items: center;"
                class="nav" to="/">Home</RouterLink>
            <RouterLink
                style="text-decoration: none; color: white; display:flex; justify-content: center; align-items: center;"
                class="nav" to="/Account">Account</RouterLink>
            <RouterLink
                style="text-decoration: none; color: white; display:flex; justify-content: center; align-items: center;"
                class="nav" to="/Devices">Device</RouterLink>
            <RouterLink
                style="text-decoration: none; color: white; display:flex; justify-content: center; align-items: center;"
                class="nav" to="/Reports">Reports</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.full-width-container {
    padding-left: 20px;
    padding-right: 20px;
}

.sidebar {
    background: #343a40;
    color: #fff;
    height: 100vh;
    padding: 20px 10px;
}

.nav-link {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    text-decoration: none;
}

.nav-link.router-link-exact-active {
    font-weight: bold;
    color: #ffc107;
}

.content {
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
}
</style>
