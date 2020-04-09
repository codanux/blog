<template>
    <div class="q-pa-md">
      <q-form class="q-gutter-md">
          <div class="row">
              <div class="col-12 col-sm-6 col-md-6 q-pr-md">
                  <q-input v-model="post.name" label="name"  />
              </div>
              <div class="col-12 col-sm-6 col-md-6 q-pr-md">
                  <q-input v-model="post.slug" label="slug"  />
              </div>
              <div class="col-12 col-sm-6 col-md-6 q-pr-md">
                  <q-input v-model="post.locale" label="locale"  />
              </div>
              <div class="col-12 col-sm-6 col-md-6 q-pr-md">
                  <q-input v-model="post.translation_of" label="translation_of"  />
              </div>
          </div>
          <q-editor v-model="post.body" :toolbar="toolbar2" min-height="10rem"></q-editor>
          <q-btn @click="submit" label="submit"></q-btn>
      </q-form>
    </div>
</template>

<script>
    import Resource from '@/api/resource';
    const ApiResource = new Resource('post');

    export default {
        props: ['slug'],
        data(){
            return {
                post: {
                    body: ''
                },
                toolbar: [
                    [
                        {
                            label: this.$q.lang.editor.align,
                            icon: this.$q.iconSet.editor.align,
                            fixedLabel: true,
                            //list: 'only-icons',
                            options: ['left', 'center', 'right', 'justify']
                        },
                    ],
                    ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['fullscreen'], // print
                    [
                        {
                            label: this.$q.lang.editor.formatting,
                            icon: this.$q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: [
                                'p',
                                'h1',
                                'h2',
                                'h3',
                                'h4',
                                'h5',
                                'h6',
                                'code'
                            ]
                        },
                        {
                            label: this.$q.lang.editor.fontSize,
                            icon: this.$q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                                'size-1',
                                'size-2',
                                'size-3',
                                'size-4',
                                'size-5',
                                'size-6',
                                'size-7'
                            ]
                        },
                        {
                            label: this.$q.lang.editor.defaultFont,
                            icon: this.$q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                                'default_font',
                                'arial',
                                'arial_black',
                                'comic_sans',
                                'courier_new',
                                'impact',
                                'lucida_grande',
                                'times_new_roman',
                                'verdana'
                            ]
                        },
                        'removeFormat'
                    ],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                    ['undo', 'redo'],
                    ['viewsource']
                ],
                toolbar2: [
                    ['viewsource'],
                    ["left","center","right","justify"],
                    ["bold","italic","underline","strike"],
                    ["undo","redo"]
                ],
                fonts: {
                    arial: 'Arial',
                    arial_black: 'Arial Black',
                    comic_sans: 'Comic Sans MS',
                    courier_new: 'Courier New',
                    impact: 'Impact',
                    lucida_grande: 'Lucida Grande',
                    times_new_roman: 'Times New Roman',
                    verdana: 'Verdana'
                }
            }
        },
        methods: {
            async getPost()
            {
                const { data } = await ApiResource.get(this.slug);
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
            this.getPost()
        },
        meta () {
            return {
                title: this.post.name,
                titleTemplate: title => `${title} - ${process.env.MIX_APP_NAME}`,
                meta: {
                    description: { name: 'description', content: 'post,' + this.post.name },
                    keywords: { name: 'keywords', content: 'Post website' },
                    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
                },
            }
        },
    }
</script>
