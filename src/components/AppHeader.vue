<script>
export default {

}
</script>
<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-container d-flex align-items-center">
                        <img src="../assets/images/yugioh_logo.png" alt="yugioh_logo">
                        <h1>
                            Yo-Gi-Oh API
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
@use '../styles/partial/variables' as *;

header {
    background-color: $whiteCl;

    .title-container {
        img {
            width: 10%;
        }

        h1 {
            margin-left: 2rem;
        }
    }
}
</style>