/* eslint-disable vue/no-unused-components */
<template>
  <div class="Contact">
    <contactBanner/>
    <Address/>
    <social/>
    <contact-3/>
  </div>
</template>

<script>
import contactBanner from '@/components/contactUs/contactBanner.vue'
import Address from '@/components/contactUs/address.vue'
import social from '@/components/contactUs/social.vue'
import Contact3 from '../components/contactUs/contact3.vue'


export default {
  name: 'Contact',
  components: {
    contactBanner,
    Address,
    social,
    Contact3
  }
}
</script>


<style>

</style>