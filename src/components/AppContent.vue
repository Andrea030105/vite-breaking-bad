<script>
import { store } from '../store';

import Card from './Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <section class="main-section">
        <div class="container pb-3">
            <div class="row">
                <div class="col">
                    <div class="container-list-card mt-5 p-4">
                        <div class="fonud-card p-2">
                            <h1>
                                Foun card {{ store.dataCard.length }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class=" container-list-card d-flex flex-wrap justify-content-around">
                        <Card v-for="(item, index) in store.dataCard" :key="index" :data="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
@use '../styles/partial/variables' as *;

section {
    background-color: $primaryCl;

    .container-list-card {
        background-color: $whiteCl;

        .fonud-card {
            background-color: $blackCl;
            color: $whiteCl;

            h1 {
                font-size: 1.5rem;
            }
        }
    }
}
</style>