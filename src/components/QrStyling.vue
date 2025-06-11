<template>
  <div ref="qrContainer" class="qr-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import QRCodeStyling, { DrawType, TypeNumber, Mode, ErrorCorrectionLevel } from 'qr-code-styling'

interface Props {
  data: string
  width?: number
  height?: number
  type?: DrawType
  image?: string
  margin?: number
  qrOptions?: {
    typeNumber?: TypeNumber
    mode?: Mode
    errorCorrectionLevel?: ErrorCorrectionLevel
  }
  imageOptions?: {
    hideBackgroundDots?: boolean
    imageSize?: number
    margin?: number
  }
  dotsOptions?: {
    type?: 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded'
    color?: string
  }
  backgroundOptions?: {
    color?: string
  }
  cornersSquareOptions?: {
    type?: 'square' | 'dot' | 'extra-rounded'
    color?: string
  }
  cornersDotOptions?: {
    type?: 'square' | 'dot' | 'extra-rounded'
    color?: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 300,
  type: 'canvas',
  image: '',
  margin: 0,
  qrOptions: () => ({
    typeNumber: 0 as TypeNumber,
    mode: 'Byte' as Mode,
    errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
  }),
  imageOptions: () => ({
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 0
  }),
  dotsOptions: () => ({
    type: 'square',
    color: '#000000'
  }),
  backgroundOptions: () => ({
    color: '#ffffff'
  }),
  cornersSquareOptions: () => ({
    type: 'square',
    color: '#000000'
  }),
  cornersDotOptions: () => ({
    type: 'square',
    color: '#000000'
  })
})

const qrContainer = ref<HTMLElement | null>(null)
let qrCode: QRCodeStyling | null = null

const initQRCode = () => {
  if (qrContainer.value) {
    qrCode = new QRCodeStyling({
      width: props.width,
      height: props.height,
      type: props.type,
      data: props.data,
      image: props.image,
      margin: props.margin,
      qrOptions: props.qrOptions,
      imageOptions: props.imageOptions,
      dotsOptions: props.dotsOptions,
      backgroundOptions: props.backgroundOptions,
      cornersSquareOptions: props.cornersSquareOptions,
      cornersDotOptions: props.cornersDotOptions
    })

    qrCode.append(qrContainer.value)
  }
}

const updateQRCode = () => {
  if (qrCode) {
    qrCode.update({
      data: props.data,
      image: props.image,
      width: props.width,
      height: props.height,
      type: props.type,
      margin: props.margin,
      qrOptions: props.qrOptions,
      imageOptions: props.imageOptions,
      dotsOptions: props.dotsOptions,
      backgroundOptions: props.backgroundOptions,
      cornersSquareOptions: props.cornersSquareOptions,
      cornersDotOptions: props.cornersDotOptions
    })
  }
}

onMounted(() => {
  initQRCode()
})

onBeforeUnmount(() => {
  if (qrCode && qrContainer.value) {
    qrContainer.value.innerHTML = ''
  }
})

watch(() => props.data, updateQRCode)
watch(() => props.width, updateQRCode)
watch(() => props.height, updateQRCode)
watch(() => props.type, updateQRCode)
watch(() => props.image, updateQRCode)
watch(() => props.margin, updateQRCode)
watch(() => props.qrOptions, updateQRCode, { deep: true })
watch(() => props.imageOptions, updateQRCode, { deep: true })
watch(() => props.dotsOptions, updateQRCode, { deep: true })
watch(() => props.backgroundOptions, updateQRCode, { deep: true })
watch(() => props.cornersSquareOptions, updateQRCode, { deep: true })
watch(() => props.cornersDotOptions, updateQRCode, { deep: true })
</script>

<style scoped>
.qr-container {
  display: inline-block;
}
</style> 