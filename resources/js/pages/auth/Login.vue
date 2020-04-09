<template>
  <q-page class="flex flex-center">
      <q-form>
          <q-input v-model="email" label="email"></q-input>
          <q-input v-model="password" label="password"></q-input>

          <q-btn class="q-mt-lg q-btn__progress" label="submit" @click="submit"></q-btn>
      </q-form>
  </q-page>
</template>

<script>
export default {
    data(){
        return {
            email: 'codanux@hotmail.com',
            password: 'secret112233',
            redirect: undefined,
        }
    },
    watch: {
        $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true,
        },
    },
    methods: {
        submit()
        {
            this.$store.dispatch('user/login', { 'email': this.email, 'password': this.password})
                .then((res) => {
                    this.$router.push({ path: this.redirect || '/' });
                })
                .catch(() => {

                });

        }
    }
}
</script>
