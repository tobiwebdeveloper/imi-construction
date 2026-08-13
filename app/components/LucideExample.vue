<template>
  <div class="flex gap-4 p-4">
    <!-- Simple icon usage -->
    <Menu class="w-6 h-6 text-blue-500" />
    <Search class="w-6 h-6 text-green-500" />
    <Heart class="w-6 h-6 text-red-500" />
    <Settings class="w-6 h-6 text-gray-500" />
    <Bell class="w-6 h-6 text-yellow-500" />
    
    <!-- Icon with custom size and styling -->
    <Star class="w-8 h-8 text-yellow-400 fill-current" />
    <Download class="w-5 h-5 cursor-pointer hover:text-blue-600" />
  </div>
</template>

<script setup lang="ts">
// Icons are globally available - no import needed!
// Just use them directly in the template
</script>
