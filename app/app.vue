<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'IMI Construction | Construction, Extensions & Renovations',
  description:
    'Construction, extensions, renovations and building repairs delivered with quality workmanship and careful attention to detail.',
  ogTitle: 'IMI Construction | Construction, Extensions & Renovations',
  ogDescription:
    'Construction, extensions, renovations and building repairs delivered with quality workmanship and careful attention to detail.',
  ogType: 'website',
})
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://imiconstructionltd.com/',
    },
  ],
})
useSeoMeta({
  title: 'IMI Construction | Construction, Extensions & Renovations',

  description:
    'Construction, extensions, renovations and building repairs delivered with quality workmanship and careful attention to detail.',

  ogTitle: 'IMI Construction | Construction, Extensions & Renovations',

  ogDescription:
    'Construction, extensions, renovations and building repairs delivered with quality workmanship and careful attention to detail.',

  ogType: 'website',

  ogUrl: 'https://imiconstructionltd.com/',

  ogImage: 'https://imiconstructionltd.com/images/image-2.jpg',
})
</script>