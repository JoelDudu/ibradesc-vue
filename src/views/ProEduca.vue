<template>
<div class="container">
    <div class="breadcrumb-novo" v-bind:style= "{ 'background-image': 'url(' + box + ')' }">
        <div class="breadcrumb-title">
            <h2 class="title-pagina">PROEDUCA</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <img src="../assets/img/proeduca-logo-1920.png" alt="Pro Educa" class="logo-proeduca" />
        </div>
        <div class="col-md-8">
            <div class="text-quem-somos">
                <p>PROEDUCA BRASIL – A MAIS MODERNA PLATAFORMA DE EDUCAÇÃO A DISTÂNCIA</p>
                <p>
                    A Educação a Distância/EAD é uma modalidade de ensino que tem como objetivo oferecer um processo de aprendizagem completo, dinâmico e eficiente, utilizando os recursos inerentes a tecnologia da informação e telecomunicações. É usar a internet e suas diversas formas de acesso para disseminar informações em documentos, vídeos - ou qualquer outra mídia no formato digital, além da possibilidade de eliminação dos fatores físicos e geográficos para uma aula - em tempo real, de um ponto qualquer para um número exponencial de pontos de acesso.
                </p>
                <p>
                    EAD é a possibilidade de uma integração virtual entre um aluno e um tutor - separados por tempo e espaço, se relacionarem de maneira eficiente através de uma plataforma LMS- Learning Management System, como a oferecida pelo PROEDUCA.
                </p>
                <p>
                    Todas estas facilidades fizeram com que cada vez mais as pessoas começassem a utilizar recursos digitais para consumirem novos conteúdos, se desenvolverem profissionalmente, e adquirirem novas competências e habilidades.
                </p>
                <p>
                    É neste contexto que o PROEDUCA BRASIL se insere – de forma assertiva, direta e estruturada, para permitir acessibilidade a novos e diversos conteúdos às pessoas, de forma a capacitá-las à prestar serviços de excelência no âmbito das suas Organizações, sejam elas públicas ou privadas.
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  // @ is an alias to /src
  import box from '@/assets/img/slide-desk-bg.jpg';

  export default {
    data() {
      return { box };
    }
  }
</script>