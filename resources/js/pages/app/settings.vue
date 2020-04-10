<template>
  <q-page class="flex flex-center">
      Settings
  </q-page>
</template>

<script>
    export default {
        meta () {
            return {
                title: 'Settings',
                titleTemplate: title => `${title} - ${process.env.MIX_APP_NAME}`,
                meta: {
                    description: { name: 'description', content: 'settings' },
                    keywords: { name: 'keywords', content: 'Post website' },
                    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
                },
            }

        },
    }
</script>
