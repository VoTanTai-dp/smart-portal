<script setup>
// Không cần logic setup lúc này
</script>

<template>
    <div class="col-1 sidebar">
        <nav class="nav">
            <div class="top-nav">
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-user" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    User
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-home" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Home
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-th-large" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Table
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-camera" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Devices
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item nav-item-bottom" to="/">
                    <i class="pi pi-chart-bar" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Dashboard
                </RouterLink>
            </div>

            <div class="bottom">
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-send" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Message
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-cloud-upload" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Upload
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item" to="/">
                    <i class="pi pi-cloud-download" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Download
                </RouterLink>
                <RouterLink
                    style="text-decoration: none; color: white; display:flex; justify-content:flex-start; align-items: center;"
                    class="nav-item nav-item-bottom" to="/">
                    <i class="pi pi-cog" style="font-size: 1.5rem; margin-right: 10px;"></i>
                    Setting
                </RouterLink>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.nav{
    display: flex;
    flex-direction: column;
    height: 100%;
}

.nav-item{
    margin-bottom: 20px;
}

.nav-item-bottom{
    margin: 0;
}

.top-nav{
    align-items: flex-start;
    flex: 1;
}

.bottom-nav{
    align-items: flex-end;

}
</style>
