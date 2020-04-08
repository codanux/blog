<template>
    <div class="q-pa-md row items-start q-gutter-md">

      <div v-for="post in posts">
          <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                      <div class="text-h6">{{ post.name }}</div>
                      <div class="text-subtitle2">{{ post.slug }}</div>
                  </div>
              </q-img>

              <q-card-actions>
                  <q-btn :to="{ name: 'post.show', params: {'slug': post.id }}" flat>{{ post.name }}</q-btn>
              </q-card-actions>
          </q-card>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            posts: [
                {
                    name: 'test',
                    slug: 'test'
                }
            ]
        }
    },
    methods: {
        async updateGroups()
        {
            var _self = this;
            await new axios.get('http://gyiad-biz.test/api/group')
                .then((response) => {
                    const { data } = response.data;
                    _self.posts = data;
                }).catch(function (error) {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.updateGroups()
    }
}
</script>
<style lang="sass" scoped>
    .my-card
        width: 100%
        max-width: 250px
</style>
