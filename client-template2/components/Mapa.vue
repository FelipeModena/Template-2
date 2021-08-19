<template>
    <div class="w-100 mb-2">
    <div class="my-4 container w-100"  v-html="comp.urlBotao1" ></div>
    </div>
</template>

<script>
export default {
    props:{
    comp: Object,
    }
}
</script>