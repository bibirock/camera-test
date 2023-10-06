<!--
 * @Author: Joe.Chen
 * @Date: 2023-09-26 11:45:42
 * @LastEditors: Joe.Chen joe.chen@tracle-tw.com
 * @LastEditTime: 2023-10-06 10:39:29
 * @Description: 
-->

<script setup lang="ts">

import { ref } from 'vue'

const videoRef = ref()
const imageUrl = ref('')

function captureImage(): void {
  if (videoRef.value != null) {
    const videoElement = videoRef.value as unknown as HTMLVideoElement
    const canvas = document.createElement('canvas')
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    const ctx = canvas.getContext('2d')
    if (ctx != null) {
      ctx.drawImage(videoElement, 0, 0)
      imageUrl.value = canvas.toDataURL('image/jpeg')
      const link = document.createElement('a')
      link.href = imageUrl.value
      link.download = 'snapshot.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}

async function getMedia (): Promise<void> {
    videoRef.value = document.querySelector('#videoRef') as HTMLVideoElement
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: 'environment' },
          width: { ideal: 1080 },
          height: { ideal: 1080 }
        }
      })

      if (videoRef.value !== undefined) {
        videoRef.value.srcObject = stream
      }
    } catch (e) {
      console.log(e)
    }
  }

</script>

<template>
  <div>
    <h1>相機測試頁面</h1>
    <button 
    class="border-red-500 border-2"
    @click="getMedia()"
    >
      開啟相機
    </button>
    <button
    class="border-red-500 border-2 ml-2"
    @click="captureImage()"
    >
      拍照
    </button>
    <video id="videoRef" width="300" autoplay playsinline />

    <img v-if="imageUrl !== ''" :src="imageUrl" alt="Image preview" style="max-width:300px;">
  </div>
</template>