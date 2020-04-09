import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import colors from 'vuetify/lib/util/colors'
import tr from 'vuetify/src/locale/tr.ts'

export default new Vuetify({
    lang: {
        locales: { tr },
        current: 'tr',
    },
    theme: {
        themes: {
            light: {
                primary: '#02B3D2',
                secondary: '#b0bec5',
                accent: '#4fa27d',
                error: colors.red.lighten1,
            },
        },
    },
});
