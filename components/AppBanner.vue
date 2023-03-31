<template>
  <section>
    <div class="base-container">
      <div class="banner-promotion">
        <div class="banner-promotion-container">
          <div class="xl:px-20">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/call-to-action-compressed.webp" width="100%" height="100%">
          </div>
          <div class="banner-promotion-content">
            <h3 >
              <span>Udah tenang, kirim paketmu dengan KiriminAja sekarang! </span>
              <span>#Bisnisjaditenang</span>
            </h3>
            <p>Semua bisa mulai kirim paket tanpa ribet. Jadikan pengalaman
              pengiriman paket lebih mudah dengan KiriminAja.</p>
            <div class="apps-button-container">
              <div>
                <a href="https://apps.apple.com/us/app/kiriminaja/id1544207424" target="_blank">
                  <img src="https://kiriminaja-static-file.imgix.net/home-v3/apple-badge.png" width="144" height="49">
                </a>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=id.tries.kiriminaja&amp;hl=in" target="_blank">
                  <img src="https://kiriminaja-static-file.imgix.net/home-v3/google-badge.png" width="144" height="49">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.banner-promotion {
  @apply bg-gradient-to-t overflow-hidden from-[#4f378b] to-[#6750a4] mt-8 p-6 pb-0 rounded-2xl text-white;

  &-container {
    @apply grid xl:grid-cols-2 xl:gap-16 xl:place-items-center;
  }

  &-content {
    @apply py-7 xl:py-0;

    h3 {
      @apply text-2xl font-semibold xl:text-4xl mb-5 w-11/12;

      span:last-of-type {
        @apply italic text-[#D0BCFF];
      }
    }

    p {
      @apply text-[#B69DF8] w-10/12 mb-10;
    }

    .apps-button-container {
      @apply flex gap-3;
    }
  }
}
</style>