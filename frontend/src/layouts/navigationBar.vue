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

<style scoped></style>
