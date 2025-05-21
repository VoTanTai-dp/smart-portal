Import
<script setup>
import NavigationBar from './navigationBar.vue';

</script>

<template>
    <div class="layout-wrapper">
        <navigation-bar></navigation-bar>
    </div>
    <div class="layout-main-container">
        <div class="layout-main">
            <router-view></router-view>
        </div>
    </div>
</template>