<template>
  <div class="home">
    <vedio/>
    <company/>
    <works/>
    <counter/>
    <operations/>
    <testimonial/>
    <contact/>
    <contactUs/>
  </div>
</template>

<script>
// @ is an alias to /src
import vedio from '@/components/vedio.vue'
import company from '@/components/company.vue'
import works from '@/components/works.vue'
import counter from '@/components/counter.vue'
import operations from '@/components/operations.vue'
import contact from '@/components/contact.vue'
import contactUs from '@/components/contactUs.vue'
import Testimonial from '../components/testimonial.vue'


export default {
  name: 'Home',
  components: {
    vedio,
    company,
    works,
    counter,
    operations,
    contact,
    contactUs,
    Testimonial
  }
}
</script>


<style>
h2{
  text-align:center;
}
</style>