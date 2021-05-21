<template>
    <div>
      <b-img left v-bind="image"></b-img>
      {{image.alt}}
    </div>
</template>
<script>

export default {
    data() {
        return {
        image: {src: 'https://placekitten.com/g/75/75', width: 75, height: 75, class: 'm1 d-inline-block align-center', alt: " Nome da Empresa" },
    };
    },
    name: "Logo",
      props: {
    link: String
  }

}
</script>
<style scoped>

</style>