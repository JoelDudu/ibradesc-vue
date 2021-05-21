<template>
    <div id="body">
        <b-container>
            <b-row>
                <b-col cols="12"><Sobre/></b-col>
            </b-row>
            <b-row>
                <b-col><Time/></b-col>
            </b-row>
            <b-row>
                <b-col><Servico/></b-col>
            </b-row>
            <b-row>
                <b-col><Contato/></b-col>
            </b-row>
        </b-container>  
    </div>    
</template>
<script>
import Sobre from './body/sobre'
import Time from './body/time'
import Servico from './body/servico'
import Contato from './body/contato'

export default {
  name: 'Body',
  components: {
    Sobre,
    Time,
    Servico,
    Contato
  }
}
</script>
<style scoped>

</style>