<template>
  <div class="Works">
  <worksBanner/>
  <counter/>
  <works-2/>
  </div>
</template>

<script>
import worksBanner from '@/components/Works/worksBanner.vue'
import counter from '@/components/counter.vue'
import Works2 from '../components/Works/works2.vue'


export default {
  name: 'Works',
  components: {
   worksBanner,
   counter,
    Works2
  }
}
</script>


<style>

</style>