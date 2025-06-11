import { App } from 'vue'
import QrStyling from './components/QrStyling.vue'

export { QrStyling }

export default {
  install: (app: App) => {
    app.component('QrStyling', QrStyling)
  }
} 