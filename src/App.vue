
<template>
  <div id="app">
    <navbar/>
    <foot/>
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar.vue'
import foot from '@/components/layout/footer.vue'

export default {
  components: {
    navbar,
    foot
  }
}
</script>

<style>
#app{
  direction:rtl
}
</style>

