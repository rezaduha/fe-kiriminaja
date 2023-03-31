<template>
  <div class="grid xl:grid-cols-5 xl:gap-14 mb-12">
    <div class="xl:order-2 col-span-2 relative">
      <div class="flex relative xl:mt-10">
        <img :src="thumbnail" class="w-full relative">
      </div>
    </div>
    <div class="xl:col-span-3 xl:order-1">
      <div class="mb-7">
        <h1
          class="inline-block font-medium text-sm italic text-[#EADDFF] px-3 py-1.5 bg-neutral-800 rounded-full">
          Agregator Logistik Multi Ekspedisi, Bisa Kirim Paket COD
        </h1>
        <h2 class="xl:leading-tight text-3xl xl:text-5xl font-bold mb-5 mt-3 xl:mt-8">
          {{ title }}
          <!-- Kirim Paket ID Express via KiriminAja Bisa di Alfamart -->
        </h2>
        <p class="text-lg text-neutral-300 xl:w-9/12">
          {{ description }}
          <!-- Iya, Anda tidak salah baca. Sekarang, Anda bisa mengirimkan paket menggunakan ID Express via
          KiriminAja melalui Alfamart terdekat di area Jabodetabek. -->
        </p>
      </div>
      <ul class="grid gap-y-5 mb-10 text-sm xl:w-7/12 text-neutral-400">
        <li v-for="feature in features" class="pl-8 relative">
          <img src="~/assets/image/check.svg" class="absolute left-0 top-2.5 -translate-y-1/2">
          <span>{{ feature }}</span>
        </li>
      </ul>
      <div class="xl:flex gap-3 mb-5 xl:mb-7">
        <div>
          <a href="#"
            class="block text-white py-4 pl-8 pr-14 rounded-full relative bg-[#4f378b] hover:bg-[#6750A4]">
            <span>Daftar Gratis</span>
            <img src="~/assets/image/arrow-right.svg" class="absolute top-1/2 right-5 -translate-y-1/2">
          </a>
        </div>
        <div>
          <a href="#"
            class="block py-4 pr-8 pl-14 rounded-full relative">
            <span>Selengkapnya</span>
            <img src="~/assets/image/book-open.svg" class="absolute top-1/2 left-5 -translate-y-1/2">
          </a>
        </div>
      </div>
      <div class="flex gap-5">
        <button @click="prev" class="aspect-square border-neutral-700 hover:bg-neutral-800 border p-1 rounded-full">
          <img src="~/assets/image/arrow-left.svg" alt="">
        </button>
        <div class="flex text-lg font-medium place-items-center gap-3"><span
            class="text-neutral-400">{{ id }}</span><span>/</span><span>3</span>
        </div>
        <button @click="next"
          class="aspect-square border-neutral-700 hover:bg-neutral-800 border p-1 rounded-full">
          <img src="~/assets/image/arrow-right.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    id: Number,
    title: String,
    description: String,
    thumbnail: String,
    features: Array
  })

  const emit = defineEmits(['prev', 'next'])

  const prev = () => {
    emit("prev")
  }

  const next = () => {
    emit("next")
  }
</script>
