<template>
    <q-expansion-item :content-inset-level="0.1" :icon="getMeta(route, 'icon')" :label="getMeta(route, 'title')">
        <template v-for="item in getChild(route)" >
            <menu-item v-if="item.children" :route="item"></menu-item>
            <q-item v-else :to="{ name: item.name }" exact>
                <q-item-section avatar>
                    <q-icon :name="getMeta(item, 'icon')"> </q-icon>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ getMeta(item, 'title') }}</q-item-label>
                </q-item-section>
            </q-item>
        </template>
    </q-expansion-item>
</template>

<script>
    export default {
        props: ['route'],
        methods: {
            getChild(route)
            {
                return route.children && route.children.filter(a => a.meta.hidden !== true);
            },
            getMeta(route, key){
                return route.meta && route.meta[key];
            }
        }
    }
</script>
