<template>
  <q-page class="flex flex-center">
      Dashboard
  </q-page>
</template>

<script>
    export default {
        meta () {
            return {
                title: 'Dashboard',
                titleTemplate: title => `${title} - ${process.env.MIX_APP_NAME}`,
                meta: {
                    description: { name: 'description', content: 'dashboard' },
                    keywords: { name: 'keywords', content: 'Post website' },
                    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
                },
            }
        },
    }
</script>
