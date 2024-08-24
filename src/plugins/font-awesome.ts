/**
To search icons : https://fontawesome.com/search?o=r&m=free
To setup with vue : https://docs.fontawesome.com/web/use-with/vue/
*/
import {
  library,
  config,
  // dom
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas)
library.add(fab)
library.add(far)
// dom.watch()
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})