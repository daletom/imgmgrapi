<template>
    <div>
        <span style="padding-left: 20px" class="eyebrow">
          {{ character.attributes.custom_fields.Name }}
        </span>
    </div>
</template>
<script>
export default {
  name: 'AvatarCard',
  props: {
    character: {
      type: Object,
      default: null
    },
    imgixParams: {
      type: String,
      default: null
    }
  }
}
</script>