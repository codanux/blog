<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
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
                    @click="$router.push({ name: 'login' })"
                    aria-label="Logout"
                    icon="logout"
                />
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-2"
        >
            <q-list>
                <q-item-label header>Router</q-item-label>
                <template v-for="route in routes">
                    <router-link v-for="route in route.children.filter(a => a.menu !== false)" :key="route.path" :to="{ name: route.name }" v-slot="{ href }">
                        <q-item clickable rel="noopener" tag="a" :href="href">
                            <q-item-section avatar>
                                <q-icon :name="route.icon" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{ route.name }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </router-link>
                </template>
            </q-list>
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
                leftDrawerOpen: false,
                appName: process.env.MIX_APP_NAME
            }
        },
        computed: {
            routes: function() {
                return this.$router.options.routes.filter(a => a.menu !== false);
            }
        }
    }
</script>
