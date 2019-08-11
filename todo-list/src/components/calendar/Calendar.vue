<template>
    <div class="calendar-container flex-col">
        <h2>Calendrier</h2>
        <div id="calendar" ref="calendar" class="calendar"></div>
    </div>
</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';

export default {
    name: 'Calendar',
    async mounted() {
        console.log('hello')
        let calendarDOM = this.$refs.calendar

        let calendar = new Calendar(calendarDOM, {
            plugins: [
                dayGridPlugin
            ]
        })

        calendar.render()
    }
}
</script>

<style>
    .calendar-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .fc {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 14px;
        letter-spacing: .01em;
        font-weight: 400;
        line-height: 20px;
        display: flex;
        flex-direction: column;
    }
    /*
    .fc-view > table {
        display: flex;
        flex-direction: column;
    }
    .fc-view > table * {
        width: 100%;
    }
    */

    table tr, tr td, table tbody, table thead,
    table tfoot, table tr th, table tfoot tr tf
    {
        margin:0;
        padding:0;
        background:none;
        border:none;
        border-collapse:collapse;
        border-spacing:0;
        background-image:none;
    }


    .fc-toolbar {
        display: flex;
    }
    .fc-toolbar button {
        display: block;
        background: var(--md-theme-default-primary, #448aff);
        color: white;
        border-radius: 2px;
        border: none;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        padding: 0 8px; 
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    }
    .fc-left {
        flex-grow: 3;
        text-align: left;
    }
    .fc-right {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .fc-view table { width: 100%; }

    .fc-head *, .fc-head-container * {
        width: 100%;
    }
    .fc-head *, .fc-head-container table thead tr {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    /*
    .fc-body > tr {
        display: block;
        width: 100%;
    }*/

    .fc-widget-content, .fc-content-skeleton {
        position: relative;
        bottom: 32px
    }

    /* tile day number */
    .fc-content-skeleton > table thead tr {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .fc-content-skeleton > table thead tr > td {
        display: block;
        width: 100%;
    }

    .fc-day {
        height: 100px;

        border-right: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    .fc-today.fc-widget-content {
        background: var(--md-theme-default-accent, #ff5252);
    }
</style>