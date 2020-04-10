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
            <q-scroll-area  class="fit">
                <q-list separator padding>
                    <menu-item v-for="(r,i) in routes" :key="i" :route="r"></menu-item>
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
                    .then(() => {
                        this.$router.push({ name: 'login' });
                    }).catch((err) => {
                        this.$router.push({ name: 'login' });
                    });
            },
            getChild(ly)
            {
                return ly.children.filter(a => a.meta.hidden !== true)
            }
        },
        computed: {
            routes: function() {
                return this.$router.options.routes.filter(a => a.meta.hidden !== true);
            }
        }
    }
</script>
