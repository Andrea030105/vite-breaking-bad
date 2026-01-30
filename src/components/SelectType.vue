<script>
import { store } from '../store';

import axios from 'axios';

export default {
    data() {
        return {
            store,
            archetype: [],
        }
    },
    created() {
        axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((response) => {
            this.archetype = response.data
        })
    }
}
</script>
<template>
    <div class="container-select">
        <div class="background-select p-3 d-flex justify-content-center">
            <select v-model="store.selectedType" @change="$emit('select')" class="form-select border-black w-75"
                aria-label="Default select example">
                <option v-for="(item, index) in archetype" :key="index" :value="item.archetype_name">
                    {{ item.archetype_name }}</option>
            </select>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

.container-select {
    width: 100%;

    .background-select {
        background-color: $primaryCl;
    }
}
</style>