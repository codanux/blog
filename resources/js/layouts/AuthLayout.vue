<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>
                    {{ appName }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        data () {
            return {
                leftDrawerOpen: false,
                appName: process.env.MIX_APP_NAME
            }
        }
    }
</script>
