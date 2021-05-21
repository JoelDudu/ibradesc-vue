<template>
  <div class="home">
    <section class="slide-wrapper">
        <div class="container-slide">
            <div class="carousel-inner">
        <b-carousel v-bind="carrosel" v-model="slide" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="carousel-item active">
            <b-carousel-slide v-for="item in carrosel.slides" :img-src="item.imagem" :key="item.imagem" class="fill">
                <h1 class="text-banner">{{item.titulo}}</h1>
            </b-carousel-slide>
        </b-carousel>
            </div>
        </div>
      <div class="container">
          <div class="conteudo">
              <div class="row">
                  <div class="col-md-12">
                      <h1 class="titulos">
                          Destaques
                      </h1>
                        <b-card-group deck>
                            <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                            <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                            <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                            <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-card-group>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </div>
</template>

<script>
  import car1 from '@/assets/img/banner.jpg';
  import car2 from '@/assets/img/office-staff.jpg';
  import car3 from '@/assets/img/banner3.jpg';
  
  export default {
    data() {
      return { 
            carrosel :{
                        id:"myCarousel",
                        interval:"4000",
                        background:"#ababab",
                        style:"text-shadow: 1px 1px 2px #333;",
                        slides:[{titulo:"O seu futuro começa aqui!", imagem:car1},
                                {titulo:"O seu futuro começa aqui!", imagem:car2},
                                {titulo:"O seu futuro começa aqui!", imagem:car3}],
            },
            slide: 0,
            sliding: null,
      };
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
  }
 
</script>

<style>
  @import '../assets/css/home-style.css';
</style>