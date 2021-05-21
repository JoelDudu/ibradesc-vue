<template>
    <div id="banner">
        <b-card
            v-if="banner.tipo == 'banner'"
            overlay
            :img-src="getImageUrl(3)"
            img-alt="Card Image"
            text-variant="white"
            title="Título"
            sub-title="Sub título"
        >
            <b-card-text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </b-card-text>
        </b-card>
        <b-carousel v-if="carrosel.tipo == 'carrosel'" v-bind="carrosel" v-model="slide" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide
                caption="Título"
                text="Texto a ser inserido"
                img-src="https://picsum.photos/300/120/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/300/120/?image=54">
                <h1>Olá Mundo!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/300/120/?image=58"></b-carousel-slide>
        </b-carousel>
    </div>
</template>
<script>
export default {
    data(){
        return{
            banner : {
                        center: true,
                        fluidGrow: true,
                        blank: true,
                        blankColor: '#bbb',
                        class: 'my-5',
                        tipo : "banner",
                        width:"900",
                        height:"250",
            },
            carrosel :{
                        id:"carousel-1",
                        interval:"4000",
                        background:"#ababab",
                        style:"text-shadow: 1px 1px 2px #333;",
                        tipo : "banner"
            },
            slide: 0,
            sliding: null
        }
    },
    methods: {
      getImageUrl(imageId) {
        const { width, height } = this.banner
        return `https://picsum.photos/${width}/${height}/?image=${imageId}`
      },
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>
<style scoped>

</style>

