<script>
export default {

}
</script>
<template>
    <div class="container-loader">
        <div class="loader">

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

.container-loader {
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;

    .loader {
        border: 16px solid #f3f3f3;
        /* Light grey */
        border-top: 16px solid $primaryCl;
        /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: absolute;
        top: 45%;
        left: 45%;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>