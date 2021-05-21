<template>
    <div> 
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
                <b-col md="4">
                    <b-card-img src="https://picsum.photos/400/400/?image=3" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="8">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Email:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="seuemail@seuprovedor.com"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Seu nome:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Digite aqui seu nome"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Assunto:" label-for="input-3">
                    <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                    ></b-form-select>
                </b-form-group>


                <b-button type="submit" variant="primary">Enviar</b-button>
                <b-button type="reset" variant="danger">Cancelar</b-button>
                </b-form>
                <b-card class="mt-3" header="Resultado do Envio" v-if="showr">
                <pre class="m-0">{{ form }}</pre>
                </b-card>
            </b-col>
        </b-row>
    </b-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        showr: false,
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>

</style>