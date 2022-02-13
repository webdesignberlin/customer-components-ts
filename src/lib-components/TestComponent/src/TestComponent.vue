<template>
    <div>
        <h1>TestComponent foo</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        

        return {}
    }
})
</script>

<style lang="scss" scoped>
$green: green;
h1 {
    background-color: $green;
}
</style>