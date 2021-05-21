<template>
    <div id="carrosel">
        <img :src="image" style="width:100%;" alt="">
        <b-carousel v-bind="carrosel" v-model="slide" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide v-for="item in carrosel.slides" :img-src="item.imagem" :key="item.imagem">
                <h1>{{item.titulo}}</h1>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  import car1 from '@/assets/img/banner.jpg';
  import car2 from '@/assets/img/office-staff.jpg';
  import car3 from '@/assets/img/banner3.jpg';

export default {
    data(){
        return{
            carrosel :{
                        id:"carousel-1",
                        interval:"4000",
                        background:"#ababab",
                        style:"text-shadow: 1px 1px 2px #333;",
                        slides:[{titulo:"O seu futuro começa aqui!", imagem:car1},
                                {titulo:"O seu futuro começa aqui!", imagem:car2},
                                {titulo:"O seu futuro começa aqui!", imagem:car3}],
            },
            slide: 0,
            sliding: null,
            image: 'https://picsum.photos/id/1005/600/200'
        }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>

