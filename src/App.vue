<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import Loader from './components/Loader.vue';
import SelectType from './components/SelectType.vue';

import { store } from './store';

export default {
  components: {
    AppHeader,
    AppContent,
    Loader,
    SelectType,
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
        setTimeout(() => {
          store.isloaded = true;
        }, 3000)
      })
    },
    showSelect() {
      let newUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + store.selectedType

      axios.get(newUrl).then((response) => {
        store.dataCard = response.data.data
      })
    }
  }
}
</script>
<template>
  <div v-if="store.isloaded">
    <AppHeader />
    <SelectType @select="showSelect" />
    <AppContent />
  </div>
  <div v-else>
    <Loader />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>
