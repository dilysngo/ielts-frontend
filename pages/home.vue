
<template>
    <div>
        <h2
            style="margin: 60px auto; color: #fff;"
            class="text-center"
        >
            Vue-owl-carousel
        </h2>

        <no-ssr>
            <!-- important to add no-ssr-->

            <carousel>
                <img src="/images/slide-1.jpg">
                <img src="/images/slide-5.jpg">
                <img src="/images/slide-3.jpeg">
                <img src="/images/slide-4.jpg">
                <img src="/images/slide-2.jpg">
            </carousel>
        </no-ssr>
    </div>
</template>
<script>
export default {
    components: {},
    mounted() {

    },
};
</script>
