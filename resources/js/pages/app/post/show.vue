<template>
  <q-page class="flex flex-center">
      Post {{ post }}
  </q-page>
</template>

<script>
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
            var _self = this;
            await new axios.get(`http://gyiad-biz.test/api/group/${post}`)
                .then((response) => {
                    const { data } = response.data;
                    _self.post = data;

                }).catch(function (error) {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getPost(this.slug)
    }
}
</script>
