# Vue QR Code Styling

A Vue 3 component library for creating beautiful and customizable QR codes.

## Installation

```bash
npm install vue-qr-code-styling
```

## Usage

```vue
<template>
  <qr-styling
    data="https://example.com"
    :width="200"
    :height="200"
    :dotsOptions="{
      type: 'dots',
      color: '#4267B2'
    }"
    :backgroundOptions="{
      color: '#E9EBEE'
    }"
    :cornersSquareOptions="{
      type: 'extra-rounded',
      color: '#4267B2'
    }"
    :cornersDotOptions="{
      type: 'dot',
      color: '#4267B2'
    }"
  />
</template>

<script setup>
import { QrStyling } from 'vue-qr-code-styling'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | string | required | The data to encode in the QR code |
| width | number | 300 | Width of the QR code |
| height | number | 300 | Height of the QR code |
| dotsOptions | object | {} | Options for QR code dots |
| backgroundOptions | object | {} | Options for QR code background |
| cornersSquareOptions | object | {} | Options for QR code corner squares |
| cornersDotOptions | object | {} | Options for QR code corner dots |

### Dots Options

```typescript
interface DotsOptions {
  type?: 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';
  color?: string;
}
```

### Background Options

```typescript
interface BackgroundOptions {
  color?: string;
}
```

### Corners Options

```typescript
interface CornersOptions {
  type?: 'square' | 'dot' | 'extra-rounded';
  color?: string;
}
```

## Examples

### Basic QR Code
```vue
<qr-styling
  data="https://example.com"
  :width="200"
  :height="200"
/>
```

### Styled QR Code
```vue
<qr-styling
  data="https://example.com"
  :width="200"
  :height="200"
  :dotsOptions="{
    type: 'dots',
    color: '#4267B2'
  }"
  :backgroundOptions="{
    color: '#E9EBEE'
  }"
  :cornersSquareOptions="{
    type: 'extra-rounded',
    color: '#4267B2'
  }"
  :cornersDotOptions="{
    type: 'dot',
    color: '#4267B2'
  }"
/>
```

## License

MIT 