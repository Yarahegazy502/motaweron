<template>
  <div class="Works">
  <operationBanner/>
  <operations-2/>
  <contact-us/>
  </div>
</template>

<script>
import operationBanner from '@/components/Operations/operationBanner.vue'
import Operations2 from '../components/Operations/operations2.vue'
import ContactUs from '../components/contactUs.vue'


export default {
  name: 'Works',
  components: {
    operationBanner,
    Operations2,
    ContactUs,
  }
}
</script>


<style>

</style>