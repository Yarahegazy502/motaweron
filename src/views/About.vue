<template>
    <div>
       <aboutBanner/>
       <aboutContent/>
       <experts/>
       <contact-us/>
    </div>
</template>


<script>
import aboutBanner from '@/components/About/aboutBanner.vue'
import aboutContent from '@/components/About/aboutContent.vue'
import experts from '@/components/About/experts.vue'
import ContactUs from '../components/contactUs.vue';
export default {
    components: {
        aboutBanner,
        aboutContent,
        experts,
        ContactUs
    },
};
</script>


<style>

</style>
