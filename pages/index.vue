<template>
  <section class="landing">
    <div class="base-container">
      <Slider v-for="slider in getSlider(slideCount)"
        :id="slider.id"
        :title="slider.title" 
        :description="slider.description" 
        :features="slider.feature" 
        :thumbnail="slider.thumbnail"
        @prev="handlePrevSlide"
        @next="handleNextSlide"
      />
      <FormChecking />
    </div>
  </section>
  <section class="feature">
    <div class="base-container">
      <div class="feature-header">
        <div class="feature-header-container">
          <span>Empowering UMKM</span>
          <h2>Jangkauan untuk semua kebutuhan pengiriman paketmu</h2>
          <p>Persembahan dari kami untuk mempermudah kebutuhan bisnismu</p>
        </div>
      </div>
      <div class="feature-content">
        <div class="feature-item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z">
              </path>
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5"></path>
              <path d="M6 19v2"></path>
              <path d="M18 19v2"></path>
            </svg>
          </div>
          <h4>Layanan Terintegrasi</h4>
          <p>Dashboard, API, Dan Mobile kami sediakan untuk mengontrol & monitoring lebih mudah.</p>
        </div>
        <div class="feature-item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3">
              </path>
              <circle cx="12" cy="11" r="1"></circle>
              <line x1="12" y1="12" x2="12" y2="14.5"></line>
            </svg>
          </div>
          <h4>Ekspedisi Terbaik</h4>
          <p>Kamu bisa pilih layanan sameday, next day, reguler, ekonomi, kargo dan lainya sesukamu.</p>
        </div>
        <div class="feature-item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2"></path>
              <path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 .002 4 3 4c4 0 5 -2.5 5 -4z">
              </path>
              <path
                d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3.001 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2">
              </path>
              <path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2"></path>
              <path
                d="M12 7.5l.003 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c.005 .033 .01 .066 .013 .098l.016 .185l.005 .171l-.003 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z">
              </path>
              <path d="M10 15v2"></path>
              <path d="M14 15v2"></path>
            </svg>
          </div>
          <h4>Sistem Otomatis</h4>
          <p>Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.</p>
        </div>
        <div class="feature-item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="13" rx="2" width="4" height="6"></rect>
              <rect x="16" y="13" rx="2" width="4" height="6"></rect>
              <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
              <path d="M18 19a6 3 0 0 1 -6 3"></path>
            </svg>
          </div>
          <h4>Selalu Ada Untukmu</h4>
          <p>Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.</p>
        </div>
        <div class="feature-item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2">
              </path>
              <rect x="9" y="3" width="6" height="4" rx="2"></rect>
              <path d="M9 14l2 2l4 -4"></path>
            </svg>
          </div>
          <h4>Laporan Aktual</h4>
          <p>Kemudahan pantau paket, pencairan COD, saldo, semuanya.</p>
        </div>
        <div class="feature-item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
              </path>
            </svg>
          </div>
          <h4>Friendly</h4>
          <p>Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="solution">
    <div class="base-container">
      <div class="solution-header">
        <div class="solution-header-container">
          <span>Makin Simpel</span>
          <h2>Solusi Pengiriman untuk Mempercepat Bisnis Anda</h2>
          <p>Ekspedisi terbaik yang kami pilihkan hanya untuk kamu lho</p>
        </div>
      </div>
      <div class="solution-content">
        <div>
          <div class="solution-content-container">
            <div v-for="solution, i in solutions" class="solution-item">
              <div class="solution-item-title">
                <div class="icon">
                  <img src="~/assets/image/checklist.svg">
                </div>
                <h4>{{ solution.title }}</h4>
              </div>
              <p class="text-neutral-300">{{ solution.description }}</p>
            </div>
          </div>
        </div>
        <div class="solution-content-hero">
          <img src="https://kiriminaja-static-file.imgix.net/home-v3/home-ill-2.webp" class="w-full">
        </div>
      </div>
    </div>
  </section>
  <AppBanner />
</template>

<script lang="ts" setup>
  import { useHomeStore } from '~/store/index'
  import { storeToRefs } from 'pinia'

  useHead({
    title: 'KiriminAja - Kirim Paket Multi Expedisi dan Bisa Kirim Paket COD',
    meta: [
      { name: 'description', content: 'Platform kirim paket multi ekspedisi terbaik untuk seluruh jasa pengiriman, bisa untuk pengiriman paket COD maupun paket Non COD. Daftar sekarang!' }
    ],
  })

  const homeStore = useHomeStore()
  const { getSlider } = homeStore
  const { sliders, solutions, } = storeToRefs(homeStore)

  const slideCount = ref(1)

  const handlePrevSlide = () => {
    if (slideCount.value === 1) {
      slideCount.value = sliders.value.length
    } else {
      return getSlider(slideCount.value--)
    }
  }

  const handleNextSlide = () => {
    if (slideCount.value === sliders.value.length) {
      slideCount.value = 1
    } else {
      getSlider(slideCount.value++)
    }
  }
</script>

<style lang="postcss" scoped>
.landing {
  @apply py-3 xl:py-14 relative;
}

.feature {
  @apply py-3 xl:py-14 relative;

  &-header {
    @apply grid xl:grid-cols-6 mb-10;

    &-container {
      @apply xl:col-span-3;

      span {
        @apply font-medium text-[#7F67BE];
      }

      h2 {
        @apply text-2xl xl:text-4xl font-bold mt-3 mb-5;
      }

      p {
        @apply text-lg text-neutral-300 xl:w-9/12;
      }
    }
  }

  &-content {
    @apply grid xl:grid-cols-3 gap-5;

    .feature-item {
      @apply py-6 px-7 bg-[#313033] rounded-3xl relative overflow-hidden;

      .icon {
        @apply inline-block mb-3 p-3 bg-gradient-to-b from-neutral-600 to-neutral-700 text-white rounded-full;
      }

      h4 {
        @apply font-bold text-xl mb-3;
      }

      p {
        @apply text-base;
      }

      &:hover {
        @apply ring-2 ring-[#7F67BE]
      }
    }
  }
}

.solution {
  @apply py-14 relative;

  &-header {
    @apply grid xl:grid-cols-6 mb-10;

    &-container {
      @apply xl:col-span-3;

      span {
        @apply font-medium text-[#7F67BE];
      }

      h2 {
        @apply text-2xl xl:text-4xl font-bold mt-3 mb-5;
      }

      p {
        @apply text-lg text-neutral-300 xl:w-9/12;
      }
    }
  }

  &-content {
    @apply grid xl:grid-cols-2 gap-12 xl:items-center;

    &-container {
      @apply grid xl:grid-cols-2 gap-4 xl:gap-x-7 xl:gap-y-10;

      .solution-item {
        @apply relative overflow-hidden;

        &-title {
          @apply mb-3 gap-3 flex items-center;

          .icon {
            @apply inline-block bg-neutral-700 p-1 rounded-full;
          }

          h4 {
            @apply font-semibold text-white;
          }
        }

        p {
          @apply text-neutral-300;
        }
      }
    }

    &-hero {
      @apply xl:px-8 xl:py-12;
    }
  }
}
</style>
