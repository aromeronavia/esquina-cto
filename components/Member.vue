<template>
  <div class="w-36 text-center">
    <img class="rounded-full mx-auto" width="80" height="80" :src="imageUrl" />
    <p class="mt-1 text-md font-black">{{ name }}</p>
    <p class="text-sm">
      {{ position }} <a v-if="company">@{{ company }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: false
    }
  }
};
</script>
