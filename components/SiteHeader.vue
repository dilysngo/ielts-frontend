<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 col-sm-3 col-xs-4">
                    <h1 class="logo">
                        <nuxt-link to="/">
                            <img
                                src="/images/logo.png"
                                alt=""
                                title=""
                            >
                        </nuxt-link>
                    </h1>
                </div>
                <div class="col-md-10 col-sm-9 col-xs-8">
                    <div class="user-header">
                        <div class="user-notify">
                            <a
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                <img src="/images/ico_bell.svg"><span class="icon-circle">1</span>
                            </a>
                            <div class="setPoint">
                                <div class="point" />
                            </div>
                            <div class="dropdown">
                                <ul class="dropdown-menu">
                                    <li>
                                        <ul class="list-notify">
                                            <li>
                                                <a class="dropdown-menu-link">
                                                    <img
                                                        class="notify-img"
                                                        src="/images/img-default.png"
                                                    >
                                                    <span class="notify-description"><b>Brent May</b> has finished crunched for <b>John Doe</b></span>
                                                    <span class="notify-time active">Just now</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-menu-link">
                                                    <img
                                                        class="notify-img"
                                                        src="/images/img-default.png"
                                                    >
                                                    <span class="notify-description"><b>Brent May</b> has finished crunched for <b>John Doe</b></span>
                                                    <span class="notify-time">Just now</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-menu-link">
                                                    <img
                                                        class="notify-img"
                                                        src="/images/img-default.png"
                                                    >
                                                    <span class="notify-description"><b>Brent May</b> has finished crunched for <b>John Doe</b></span>
                                                    <span class="notify-time">Just now</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-menu-link">
                                                    <img
                                                        class="notify-img"
                                                        src="/images/img-default.png"
                                                    >
                                                    <span class="notify-description"><b>Brent May</b> has finished crunched for <b>John Doe</b></span>
                                                    <span class="notify-time">Just now</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                {{ name }}
                                <span class="user-position">Admin</span>
                                <i
                                    class="fa fa-caret-down"
                                    aria-hidden="true"
                                />
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-menu-link">User Settings</a></li>
                                <li><a class="dropdown-menu-link">Help</a></li>
                            </ul>
                        </div>
                        <div class="user-avatar">
                            <img
                                :src="avatar"
                                :title="name"
                                :alt="name"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            name: 'UserName',
            avatar: '/images/img-default.png',
        };
    },
    created() {

    },
    methods: {

    }
};
</script>
