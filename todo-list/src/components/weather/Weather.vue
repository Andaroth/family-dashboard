<template>
    <div>
        <h2>Météo</h2>
        <SimpleForm label="Chercher une localisation" confirm="Ajouter" />
        <md-divider></md-divider>
        <Map />
        <md-divider></md-divider>
    </div>
</template>

<script>
import axios from 'axios'

import SimpleForm from '../SimpleForm';
import Mapbox from './Mapbox';
import 'vue-material/dist/theme/default-dark.css'

export default {
    name: 'weather',
    components: {
        SimpleForm,
        Mapbox
    }
}
</script>
