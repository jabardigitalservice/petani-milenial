<template>
  <div
    v-show="documentUrl != null"
    class="bg-hijau-50"
  >
    <div class="wrapper selection-result__wrapper">
      <div class="selection-result__illustration">
        <img
          src="~/assets/images/aset-pengumuman-hasil.png"
          alt="Ilustrasi Hasil Pengumuman"
        >
      </div>
      <div
        class="selection-result__content"
      >
        <h2 class="selection-result__content__title">
          <strong class="font-medium">
            Selamat
          </strong>
        </h2>
        <p class="selection-result__content__paragraph">
          Kepada 2240 pendaftar yang telah lolos seleksi tahap 1.
          Unduh dokumen berikut untuk mengetahui siapa saja yang lolos ke tahap berikutnya.
        </p>
        <a
          :href="documentUrl"
          target="_blank"
          role="button"
          class="selection-result__btn-download"
          @click.stop.prevent="onDownloadDocument"
        >
          Unduh Dokumen
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    documentUrl () {
      const { selectionResultDocumentUrl } = this.$config
      return this.isStringDefined(selectionResultDocumentUrl)
        ? selectionResultDocumentUrl
        : null
    }
  },
  methods: {
    isStringDefined (str) {
      return typeof str === 'string' && !!str.length
    },
    onDownloadDocument () {
      if (!this.documentUrl) {
        return
      }
      window.open(this.documentUrl, '_blank')
    }
  }
}
</script>

<style lang="postcss" scoped>
.selection-result__wrapper {
  gap: 2rem;
  @apply flex flex-wrap justify-center items-center py-12;

  @screen md {
    gap: 4rem;
    @apply w-full flex-nowrap;
  }

  @screen lg {
    gap: 6rem;
    @apply items-start;
  }
}

.selection-result__illustration {
  @apply flex-none w-full;

  @screen md {
    @apply flex-1;
  }
}

.selection-result__illustration > img {
  @apply object-contain object-center;

  @screen md {
    max-height: 374px;
  }
}

.selection-result__content {
  @apply flex-none w-full;

  @screen md {
    @apply w-2/5;
  }

  @screen lg {
    @apply mt-8;
  }
}

.selection-result__content__title {
  @apply text-lg md:text-4xl;

  @screen md {
    @apply text-4xl;
  }
}

.selection-result__content__paragraph {
  @apply my-6 font-medium text-sm;

  @screen md {
    @apply text-base;
  }
}

.selection-result__btn-download {
  @apply inline-block
  rounded-md
  px-6 py-4
  bg-hijau-700
  text-white font-medium;
}
</style>
