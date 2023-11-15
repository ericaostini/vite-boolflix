<template>
    <header>
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="text-danger">Boolflix</h1>
            <form class="row align-items-center">
                <div class="col-auto">
                    <input type="text" class="form-control">
                </div>
                <div class="col-auto">
                    <button class="btn btn-danger">Search</button>
                </div>
            </form>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
@use '.././assets/style/partials/variables' as *;

header {
    height: 100px;
    background-color: $col-dark;
    padding: 20px;
}
</style>