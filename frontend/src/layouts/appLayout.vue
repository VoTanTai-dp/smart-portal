Import
<script setup>
import NavigationBar from './navigationBar.vue';

</script>

<template>
    <div class="full-width-container">
        <div class="row">
            <!-- Sidebar -->
            <navigation-bar></navigation-bar>
            <!-- Main content -->
            <div class="col-sm col-11 content">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
.full-width-container {
    padding-left: 20px;
    padding-right: 20px;
}
</style>