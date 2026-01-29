<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="container-select">
        <div class="background-select p-3 d-flex justify-content-center">
            <select v-model="store.selectedType" @change="$emit('select')" class="form-select border-black w-75"
                aria-label="Default select example">
                <option value="">Alien</option>
                <option value="Abyss Actor">Abyss Actor</option>
                <option value="Adamancipator">Adamancipator</option>
                <option value="Batteryman">Batteryman</option>
                <option value="Blue-Eyes">Blue-Eyes</option>
                <option value="Chaos">Chaos</option>
                <option value="Despia">Despia</option>
                <option value="Guardian">Guardian</option>
                <option value="Mecha Phantom Beast">Mecha Phantom Beast</option>
                <option value="Odd-Eyes">Odd-Eyes</option>
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