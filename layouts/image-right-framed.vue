<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'contain',
  },
  columns: {
    type: String,
    default: '1.7fr 0.3fr',
  },
  frameMaxWidth: {
    type: String,
    default: '340px',
  },
  frameMaxHeight: {
    type: String,
    default: '320px',
  },
})

const imgStyle = computed(() => ({
  maxWidth: props.frameMaxWidth,
  maxHeight: props.frameMaxHeight,
  objectFit: props.backgroundSize === 'cover' ? 'cover' : 'contain',
}))
</script>

<template>
  <div class="slidev-layout image-right-framed">
    <div
      class="image-right-framed__card panel-card grid w-full"
      :style="{ gridTemplateColumns: props.columns }"
    >
      <div class="image-right-framed__left">
        <div class="slidev-layout default" :class="props.class">
          <slot />
        </div>
      </div>
      <div class="image-right-framed__right">
        <div class="image-right-framed__media">
          <img
            v-if="props.image"
            class="image-right-framed__image"
            :src="props.image"
            alt=""
            :style="imgStyle"
          >
        </div>
        <div class="image-right-framed__below">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.image-right-framed {
  height: 100%;
  padding: 28px;
  display: flex;
  box-sizing: border-box;
}

.image-right-framed__card {
  flex: 1 1 auto;
  min-height: 0;
  margin: 0 auto;
  width: min(1100px, 100%);

  padding: 28px 32px;
  gap: 28px;
}

.image-right-framed__left {
  height: 100%;
  min-width: 0;
  display: grid;
  align-content: start;
}

.image-right-framed__right {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 12px;
}

.image-right-framed__media {
  width: 100%;
  display: grid;
  place-items: center;
}

.image-right-framed__image {
  display: block;
  border-radius: 14px;
  background-color: rgba(15, 23, 42, 0.03);
}

.image-right-framed__below {
  text-align: center;
}

.image-right-framed__below :deep(p) {
  margin: 0;
}

html.dark .image-right-framed__image {
  background-color: rgba(0, 0, 0, 0.18);
}
</style>
