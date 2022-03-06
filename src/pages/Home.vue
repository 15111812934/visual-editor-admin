<template>
  <div>
    <a-button
      type="primary"
    >
      Primary Button
    </a-button>
    {{ todo }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useURLLoader from '~/hooks/useURLLoader'
interface PostProps {
   name: string
}
export default defineComponent({
   name: 'HomePage',
   setup () {
      const todo = useURLLoader<PostProps>('./1.json')
      return {
        todo
      }
   }
})
</script>

<style lang="scss" scoped>

</style>