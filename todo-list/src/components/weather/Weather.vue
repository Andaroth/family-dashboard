<template>
    <div>
        <h2>Météo</h2>
        <Form />
        <md-divider></md-divider>
    </div>
</template>

<script>
import axios from 'axios'
import Form from './Form';
import 'vue-material/dist/theme/default-dark.css'

export default {
    name: 'weather',
    components: {
        Form
    }
}
</script>
