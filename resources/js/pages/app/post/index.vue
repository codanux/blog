<template>
    <div class="q-pa-md">
        <q-table
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            :pagination.sync="pagination"
            :loading="loading"
            :filter="filter"
            @request="onRequest"
        >
            <template v-slot:top>
                <q-input borderless dense debounce="500" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
                <q-space />
                <q-btn
                    color="primary"
                    icon-right="archive"
                    label="Export to csv"
                    no-caps
                    @click="exportTable"
                />
            </template>

            <template v-slot:body-cell-actions="props">
                <q-td auto-width>
                    <q-btn color="blue" label="Update" :to="{ name: 'post.show', params: { 'id': props.row.id }}" size=sm no-caps></q-btn>
                    <q-btn color="red" label="Delete" @click="onDelete(props.row)" size=sm no-caps></q-btn>
                </q-td>
            </template>
        </q-table>

        <div class="row items-start q-gutter-md q-mt-lg">

            <div v-for="post in data" :key="post.id">
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
  </div>
</template>

<script>
    import { exportFile } from 'quasar'
    function wrapCsvValue (val, formatFn) {
        let formatted = formatFn !== void 0
            ? formatFn(val)
            : val

        formatted = formatted === void 0 || formatted === null
            ? ''
            : String(formatted)

        formatted = formatted.split('"').join('""')
        /**
         * Excel accepts \n and \r in strings, but some other CSV parsers do not
         * Uncomment the next two lines to escape new lines
         */
        // .split('\n').join('\\n')
        // .split('\r').join('\\r')

        return `"${formatted}"`
    }

    import Resource from '@/api/resource';
    const ApiResource = new Resource('post');

    export default {
        data(){
            return {
                filter: '',
                loading: false,
                pagination: {
                    sortBy: '',
                    descending: false,
                    page: 1,
                    rowsPerPage: 10,
                    rowsNumber: 1,
                },
                columns: [
                    { name: 'name', required: true, label: 'Name', align: 'left', field: 'name', sortable: true },
                    { name: 'slug', align: 'center', label: 'Slug', field: 'slug', sortable: true },
                    { name: 'locale',  align: 'center', label: 'Dil', field: 'locale' },
                    { name: 'translation_of', align: 'center', label: 'translation_of', field: 'translation_of' },
                    { name: 'actions', align: 'center', label: 'Actions', field: 'actions' },
                ],
                data: []
            }
        },
        methods: {
            async onRequest(props)
            {

                this.loading = true;
                const { data, meta } = await ApiResource.list({ ...props.pagination, 'filter': props.filter });
                this.data = data ;

                this.pagination = props.pagination;
                this.pagination.rowsNumber = meta.total;

                this.loading = false;
            },
            async onDelete(row)
            {
                await this.$q.dialog({
                    title: 'Confirm',
                    message: 'Delete ?',
                    cancel: true
                }).onOk(async () => {
                    this.loading = true;
                    await new Resource('post').destroy(row.id);
                    let index = this.data.findIndex(a => a.id === row.id);
                    this.data.splice(index, 1);
                    this.pagination.rowsNumber--;
                    this.loading = false;
                }).onOk(() => {
                    // console.log('>>>> second OK catcher')
                }).onCancel(() => {
                    // console.log('>>>> Cancel')
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                });
            },
            exportTable () {
                // naive encoding to csv format
                const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
                    this.data.map(row => this.columns.map(col => wrapCsvValue(
                        typeof col.field === 'function'
                            ? col.field(row)
                            : row[col.field === void 0 ? col.name : col.field],
                        col.format
                    )).join(','))
                ).join('\r\n')

                const status = exportFile(
                    'table-export.csv',
                    content,
                    'text/csv'
                )

                if (status !== true) {
                    this.$q.notify({
                        message: 'Browser denied file download...',
                        color: 'negative',
                        icon: 'warning'
                    })
                }
            },
        },
        mounted() {
            this.onRequest({
                'pagination': this.pagination
            });
        },
        meta () {
            return {
                title: 'Post Page',
                titleTemplate: title => `${title} - ${process.env.MIX_APP_NAME}`,
                meta: {
                    description: { name: 'description', content: 'Posts,Post,Postlar'},
                    keywords: { name: 'keywords', content: 'Post website' },
                    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
                },
            }
        },
    }
</script>
<style lang="sass" scoped>
    .my-card
        width: 100%
        min-width: 250px
</style>
