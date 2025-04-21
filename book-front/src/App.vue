 <script setup>

import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import FooterRow from "@/components/FooterRow.vue";

</script>

<template>
    <!-- container started -->
    <div class="container-fluid">
        <HeaderRow />
    </div>
    <!-- container finished -->
    <!-- main started -->
    <div class="row mt-4">
        <CategoriesCol />
        <div class="col-12 col-md-10">
            <router-view />
        </div>
    </div>
    <!-- main finished -->
    <FooterRow  />
</template>

<style scoped>

</style>
