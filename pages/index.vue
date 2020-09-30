<template>
  <div class="container">
    <h1>Game of Thrones Characters</h1>
    <AvatarCard
      v-for="(character, index) in data"
      :key="index"
      :character="character"
      :data-index="index"
    />
  </div>
</template>

<script>
import AvatarCard from '~/components/Avatarcard.vue'
import imgix from '@/plugins/imgix-management.js'

export default {
  components: {
    AvatarCard
  },
  asyncData() {
    imgix
      .request(
        'assets/55e4d9390d42e03905934ad4?filter[categories]=Game%20of%20Thrones'
      )
      .then((response) => {
        return {
          data: response.data.data
        }
      })
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
