<template>
    <div>
        <div id="map" class="map"></div>
    </div>
</template>

<style>
    .map {
        width: 100%;
    }
</style>


<script>
import '@/assets/css/mapbox-gl-js_1.2.0.css'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kYXJvdGgiLCJhIjoiY2p5eW5vMWZiMDRuZjNibXJndWcycXFobiJ9.26qYwngCmL_1HVGT3b3CLg';

export default {
    name: 'map',
    async mounted() {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }
}
</script>
