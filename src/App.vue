<template>
  <div class="app">
    <h1>Vue QR Styling Demo</h1>
    
    <div class="qr-examples">
      <div class="qr-example">
        <h3>Basic QR Code</h3>
        <qr-styling
          :data="basicQrData"
          :width="qrWidth"
          :height="qrHeight"
        />
      </div>

      <div class="qr-example">
        <h3>Styled QR Code</h3>
        <qr-styling
          :data="styledQrData"
          :width="qrWidth"
          :height="qrHeight"
          :dotsOptions="qrOptions.dots"
          :backgroundOptions="qrOptions.background"
          :cornersSquareOptions="qrOptions.cornersSquare"
          :cornersDotOptions="qrOptions.cornersDot"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { QrStyling } from './index'

const basicQrData = ref('https://github.com/behzad-nemati')
const styledQrData = ref('https://github.com/behzadne77')
const qrWidth = ref(200)
const qrHeight = ref(200)

const qrOptions = reactive({
  dots: {
    type: 'dots' as const,
    color: '#4267B2'
  },
  background: {
    color: '#E9EBEE'
  },
  cornersSquare: {
    type: 'extra-rounded' as const,
    color: '#4267B2'
  },
  cornersDot: {
    type: 'dot' as const,
    color: '#4267B2'
  }
})
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.qr-examples {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.qr-example {
  text-align: center;
}

h3 {
  margin-bottom: 20px;
  color: #2c3e50;
}
</style> 