<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    props: {
        data: Object,
    }
}
</script>
<template>
    <div class="card">
        <img :src="data.card_images[0].image_url" :alt="data.name">
        <p class="mt-3 text-white text-uppercase">
            {{ data.name }}
        </p>
        <p>
            {{ data.archetype }}
        </p>
    </div>
</template>
<style lang="scss">
@use '../styles/partial/variables' as *;

.card {
    width: 200px;
    text-align: center;
    background-color: $primaryCl !important;
    margin-bottom: 3rem;
    font-weight: 600;
}
</style>