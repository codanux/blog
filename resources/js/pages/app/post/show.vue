<template>
  <q-page padding class="flex flex-center">
      Post {{ post }}

      <div class="q-gutter-y-md column" style="max-width: 300px">
          <q-form>
              <q-input v-model="post.name" label="name"  />
              <q-input v-model="post.slug" label="slug"  />
              <q-input v-model="post.locale" label="locale"  />
              <q-input v-model="post.translation_of" label="translation_of"  />
              <q-btn @click="submit" label="submit"></q-btn>
          </q-form>
      </div>
  </q-page>
</template>

<script>
    import Resource from '@/api/resource';
    const ApiResource = new Resource('post');

    export default {
        props: {
            slug: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                post: {}
            }
        },
        methods: {
            async getPost(post)
            {
                const { data } = await ApiResource.get(post);
                this.post = data;
            },
            async submit()
            {
                if (this.post.hasOwnProperty('id')) {
                    const { data } = await ApiResource.update(this.post.id, this.post);
                    this.post = data;
                } else {
                    const { data } = await ApiResource.store(this.post);
                    this.post = data;
                }
            }
        },
        mounted() {
            this.getPost(this.slug)
        }
    }
</script>
