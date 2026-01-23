<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getYoGoCard();
  },
  methods: {
    getYoGoCard() {
      axios.get(store.url).then((response) => {
        store.dataCard = response.data.data
      })
    }
  },
}
</script>
<template>
  <AppHeader />
  <AppContent />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>