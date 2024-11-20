<script setup>
import HeroSection from '../components/HeroSection.vue';
import Timer from '../components/Timer.vue';
import Sections from '../components/Sections.vue';
</script>

<template>
  <div class="font-montserrat mb-16 md:mb-0 md:pb-12">
    
    <HeroSection />
    <Timer class="w-1/2 md:w-1/4 mx-auto"/>
    <Sections class="w-3/4 md:w-2/3 2xl:w-1/2 mx-auto mt-10 md:mt-8"/>
  </div>
</template>

<style>

</style>