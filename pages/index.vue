
<template>
  <main class="mx-auto max-w-[1400px] bg-[#1b1d39]">
    <navigation />
    <h1>{{ entry.title }}</h1>
    <globalFooter />
  </main>
</template>

<style>
.title {
  font-family: "Lato";
}
</style>

<script>
export default {
  middleware: "livepreview",
  async asyncData({ params, $getEntry }) {
    const entry = await $getEntry("/")
    return { entry }
  },
  data: () => {
    return {
      entry: {}
    }
  }
}
</script>
