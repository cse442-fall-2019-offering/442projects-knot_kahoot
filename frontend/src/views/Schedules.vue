<template>
  <div class="pl-5 pr-5 text-left" style="padding-top: 80px;">
    <h2>({{ calendars.length }}) Schedules</h2>
    <hr>
    <Calendar v-for="c in calendars" :key="c.id" :name="c.name" :id="c.id" />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';

export default {
  data() {
    return {
      calendars: []
    }
  },
  components: {
    Calendar
  },
  mounted() {
    this.$google.getCalendars().then(c => {
      this.calendars = c.map(v => ({
        name: v.summary.slice(12),
        id: v.id
      }));
    });


    // this.$google.createCalendar("Create Event Test", [
    //   {
    //     summary: "Test Event 1",
    //     description: "Test description",
    //     datetime_obj_start: ( new Date('November 29, 2019 03:24:00') ).toISOString(),
    //     datetime_obj_end: ( new Date('November 29, 2019 04:24:00') ).toISOString(),
    //  },
    // {
    //     summary: "Test Event 2",
    //     description: "Test description",
    //     datetime_obj_start: ( new Date('November 29, 2019 07:24:00') ).toISOString(),
    //     datetime_obj_end: ( new Date('November 29, 2019 08:24:00') ).toISOString(),
    //  }
    // ]).then(r => {
    //   console.log(r);
    // });

  }
}
</script>

<style lang="scss">
.content {
  margin-left: 160px;
  padding-top: 55px;
}
</style>