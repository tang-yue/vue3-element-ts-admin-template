
<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from "vue-router";
export default defineComponent({
    props: {},
    emits: [],
    components: {},
    setup(props, ctx) {
      return () => <RouterView />
    }
})
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
