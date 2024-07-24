<template>
    <div class="container" ref="containerRef">
      <canvas ref="canvasRef" class="hline-canvas" :width="size.width" height="2"></canvas>
    </div>
  </template>
  <script setup>
  import { onMounted, onUpdated, ref } from 'vue'
  import rough from 'roughjs'
  const canvasRef = ref(null)
  const containerRef = ref(null)
  const size = ref({
    width: null
  })
  
  function drawHLine() {
    const rc = rough.canvas(canvasRef.value)
    rc.line(0, 0, size.value.width, 0, { strokeWidth: 2, seed: 20 }) // I like seed 5, 20
  }
  function clearCanvas() {
    canvasRef.value.getContext('2d').clearRect(0, 0, size.value.width, 2)
  }
  
  onMounted(() => {
    // draw on canvas after 100ms so refs are properly working
    const timeOut = setTimeout(() => {
      size.value.width = containerRef.value.clientWidth
      drawHLine()
  
      // This part automatically update the convas as it's external parent's size is updated
      const contResizeObserver = new ResizeObserver(() => {
        if (containerRef.value) {
          size.value.width = containerRef.value.clientWidth
          clearCanvas()
          drawHLine()
        }
      })
      contResizeObserver.observe(containerRef.value)
      clearTimeout(timeOut)
    }, 100)
  })
  onUpdated(() => {
    // redraw everything after something is updated about the component
    size.value.width = containerRef.value.clientWidth
    drawHLine()
  })
  </script>
  
  <style scoped>
  .container {
    width: 100%;
  }
  </style>
  