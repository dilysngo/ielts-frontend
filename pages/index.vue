<template>
    <section class="page-container dashboard">
        <div class="page-body">
            <div class="row">
                <div class="col-md-12">
                    <h1>Welcome to Nuxt JS</h1>
                    <p class="description">
                        Our goal is to create a framework flexible enough that you can use it as a main project base or in addition to your current project based on Node.js.<br>
                        Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.
                    </p>
                    <nuxt-link
                        v-if="!$auth.isAuthenticated()"
                        to="login"
                        class="btn-normal m-r-md"
                    >
                        Login
                    </nuxt-link>
                    <nuxt-link
                        to="home"
                        class="btn-normal"
                    >
                        View Demo
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="page-footer">
            <a
                href="https://github.com/felixle236/frontend-seed"
                class="txt-link"
                target="_blank"
            >
                Github
            </a>
        </div>
    </section>
</template>
<script>

export default {
    layout: 'blank',
    middleware: ['non-authentication'],
};
</script>
