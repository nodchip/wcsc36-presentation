<script setup lang="ts">
const props = defineProps({
  columns: {
    type: String,
    default: '1fr 1fr',
  },
})
</script>

<template>
  <div class="slidev-layout two-cols">
    <div class="two-cols-card panel-card">
      <div class="top">
        <slot />
      </div>
      <div class="cols" :style="{ gridTemplateColumns: props.columns }">
        <div class="col">
          <slot name="left" />
        </div>
        <div class="col">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.two-cols-card {
  padding: var(--two-cols-padding, 28px);
}

.top {
  padding: var(--two-cols-top-padding, 0 0 16px);
}

.top :deep(h1),
.top :deep(h2),
.top :deep(h3) {
  margin: 0;
}

.cols {
  display: grid;
  gap: var(--two-cols-gap, 28px);
}

.col :deep(h2) {
  margin-top: 0;
}
</style>
