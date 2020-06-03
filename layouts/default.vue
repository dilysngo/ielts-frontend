<template>
    <div class="theme-default">
        <site-header />
        <div class="main-content">
            <nuxt />
        </div>
        <site-footer />
    </div>
</template>

<script>
import SiteFooter from '~/components/SiteFooter';
import SiteHeader from '~/components/SiteHeader';

export default {
    components: {
        SiteHeader,
        SiteFooter
    },
    created() {
        if (process.browser && this.$auth.isAuthenticated())
            this.connectMessageSocket();
    },
    methods: {

    }
};
</script>
