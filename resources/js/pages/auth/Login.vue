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
    name: 'PageIndex',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submit()
        {
            this.$router.push({ name: 'index' });
        }
    }
}
</script>
