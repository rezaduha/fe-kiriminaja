<template>
  <form action="#" class="form-container">
    <div class="form-container-inner">
      <div class="mb-3 xl:mb-0">
        <label class="block text-xs">Asal</label>
        <div class="pt-2">
          <p style="width: 324.3px;">
            <span class=" p-0 bg-transparent border-0">Kelurahan Asal</span>
          </p>
        </div>
      </div>
      <div class="form-input-container">
        <label class="block text-xs">Tujuan</label>
        <div class="pt-2">
          <span style="width: 311.3px;">
            <p class="p-0 bg-transparent border-0">
              <span>Kelurahan Tujuan</span>
            </p>
          </span>
        </div>
      </div>
      <div
        class="form-input-container">
        <label for="weight" class="block text-xs">Berat</label>
        <input type="number" name="weight" id="weight" value="1000" class="pt-2 bg-transparent placeholder-neutral-500 outline-0 w-full" placeholder="Berat...">
      </div>
    </div>
    <button class="btn-check-ongkir">
      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="24" height="24" viewBox="0 0 24 24"
        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="10" cy="10" r="7"></circle>
        <line x1="21" y1="21" x2="15" y2="15"></line>
      </svg>
      <span>Cek Ongkir</span>
    </button>
  </form>
</template>

<style lang="postcss" scoped>

.form-container {
  @apply p-5 xl:p-6 rounded-3xl bg-neutral-800 relative;

  &-inner {
    @apply grid xl:w-11/12 xl:grid-cols-3;

    .form-input-container {
      @apply mb-3 xl:mb-0 xl:pl-3 xl:border-l xl:border-dashed border-l-neutral-700;
    }
  }

  .btn-check-ongkir {
    @apply xl:aspect-square dark:bg-[#4F378B] w-full xl:w-auto p-4 text-white rounded-full xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-5;
  
    span {
      @apply xl:hidden ml-3;
    }
  }
}
</style>
