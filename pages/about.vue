<template>
  <section class="hero">
    <div class="base-container">
      <div class="hero-headline">
        <span>{{ hero.headline.hastag }}</span>
        <h1>
          {{ hero.headline.title }}
        </h1>
      </div>
      <div class="hero-picture">
        <img v-for="i in 2" :src="hero.hero" :key="i">
      </div>
    </div>
  </section>
  <section class="about-mission">
    <div class="base-container">
      <div class="about-mission-headline">
        <span>Vision & Mission</span>
        <h3>Our Mission</h3>
      </div>
      <div class="about-mission-container">
        <div class="mission-card-container">
          <ul>
            <li v-for="vision, i in visions" :key="i">
              <img src="~/assets/image/check-outlined.svg">
              <span>{{ vision }}</span>
            </li>
          </ul>
        </div>
        <div class="prose dark:prose-invert max-w-none xl:text-lg">
          <p>KiriminAja adalah sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan
            ekspedisi sesuai kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang dikembangkan oleh PT
            Selalu Siap Solusi.</p>
          <p>Kemi memberikan solusi untuk UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin
            melakukan pengiriman paket.</p>
          <p>Kami menawarkan:</p>
          <ul>
            <li>Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.</li>
            <li>Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem pengambilan
              paket dirumah oleh ekspedisi.</li>
            <li>Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.</li>
            <li>Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan lebih baik.
            </li>
          </ul>
          <p>
            Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen untuk berkontribusi pada
            perekonomian Indonesia, dengan cara memberikan solusi serta kemudahan bagi para pebisnis online supaya
            bisnisnya terus
            berkembang.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="about-leader">
    <div class="base-container">
      <div class="about-leader-headline">
        <span>Our Leaders</span>
        <h3>We lead with intention</h3>
      </div>
      <div class="about-leader-content">
        <div v-for="leader, i in leaders" class="group" :key="i">
          <div
            class="aspect-square mb-3 transition-all group-hover:shadow-xl group-hover:shadow-neutral-800 border-2 border-transparent group-hover:border-[#BB9DF8] rounded-2xl overflow-hidden">
            <img :src="leader.photo" :alt="leader.name"
              class="group-hover:scale-110 transition-all">
          </div>
          <div>
            <h4 class="font-bold text-lg group-hover:text-primary-300">{{ leader.name }}</h4>
            <span class="text-xs text-neutral-400">{{ leader.position }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppBanner />
</template>

<script lang="ts" setup>
  import { useAboutStore } from '~/store/about'
  import { storeToRefs } from 'pinia'

  useHead({
    title: 'Tentang KiriminAja - KiriminAja',
    meta: [
      { name: 'description', content: 'KiriminAja adalah agregator logistik yang memberikan kemudahan untuk pengiriman paket COD & Non COD. Kembangkan bisnis Anda sekarang!' }
    ],
  })

  const aboutStore = useAboutStore()
  const { fetchAbout } = aboutStore
  const { hero, visions, leaders } = storeToRefs(aboutStore)

  await fetchAbout();
</script>

<style lang="postcss" scoped>
.hero {
  @apply py-3 xl:py-14;

  &-headline {
    @apply xl:text-center xl:w-9/12 xl:mx-auto mb-10;

    span {
      @apply font-medium italic text-[#7F67BE];
    }

    h1 {
      @apply text-3xl xl:text-5xl xl:leading-tight font-bold mt-5 mb-7;
    }
  }

  &-picture {
    @apply relative;

    img {
      &:first-of-type {
        @apply w-full saturate-200 opacity-50 scale-110 absolute rounded-2xl blur-3xl;
      }

      &:last-of-type {
        @apply w-full rounded-2xl relative;
      }
    } 
  }
}

.about-mission {
  @apply py-3 xl:py-14;

  &-headline {
    @apply mb-5;

    span {
      @apply font-medium text-[#7F67BE];
    }

    h3 {
      @apply text-2xl xl:text-4xl font-bold mt-3 mb-10;
    }
  }

  &-container {
    @apply grid xl:grid-cols-2 gap-10;

    .mission-card-container {
      ul {
        @apply xl:w-11/12;

        li {
          @apply flex gap-3 pl-4 mb-5 pr-3.5 py-4 border border-neutral-700 rounded-2xl bg-[#313033];
        }
      }
    }
  }
}

.about-leader {
  @apply py-3 xl:py-14;

  &-headline {
    span {
      @apply font-medium text-[#7F67BE];
    }

    h3 {
      @apply text-2xl xl:text-4xl font-bold mt-3 mb-10;
    }
  }

  &-content {
    @apply grid grid-cols-2 xl:grid-cols-5 gap-5 xl:gap-7;
  }
}
</style>
