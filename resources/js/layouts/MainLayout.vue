<template>
    <q-layout view="hHh Lpr lff"class="bg-white">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    @click="drawer = !drawer"
                    aria-label="Menu"
                    icon="menu"
                />

                <q-toolbar-title>
                    {{ appName }}
                </q-toolbar-title>

                <q-space></q-space>

                <q-btn
                    flat
                    dense
                    round
                    @click="logout"
                    aria-label="Logout"
                    icon="logout"
                />
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="drawer"
            show-if-above

            :mini="miniState"
            @mouseover="miniState = false"
            @mouseout="miniState = true"
            mini-to-overlay

            :width="200"
            :breakpoint="500"
            bordered
            content-class="bg-grey-3"
        >
            <q-scroll-area class="fit">
                <q-list padding>
                    <q-item-label header>Router</q-item-label>
                    <template v-for="ly in routes">
                        <router-link v-for="route in ly.children.filter(a => a.meta.hidden !== true)" :key="route.path" :to="{ name: route.name }" v-slot="{ href, isActive }">
                            <q-item :active="isActive" clickable rel="noopener" tag="a" :href="href" v-ripple>
                                <q-item-section avatar>
                                    <q-icon :name="route.meta.icon" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>{{ route.name }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </router-link>
                    </template>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: 'MyLayout',

        data () {
            return {
                drawer: false,
                miniState: true,
                appName: process.env.MIX_APP_NAME
            }
        },
        methods: {
            async logout(){
                this.$store.dispatch('user/logout')
                    .then((res) => {
                        this.$router.push({ name: 'login' });
                    })
                    .catch(() => {

                    });
            }
        },
        computed: {
            routes: function() {
                return this.$router.options.routes.filter(a => a.meta.hidden !== true);
            }
        }
    }
</script>
