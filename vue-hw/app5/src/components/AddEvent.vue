<template>
  <div>
    <h4>Add an Event</h4>
    <div class="form">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="event.description" />
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date" />
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location" />
      </div>
      <button @click="addEvent" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
import { push } from "firebase/database";
import { eventRef } from "../firebase";
export default {
  name: "AddEvent",
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: "",
      },
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      push(eventRef, this.event);
    },
  },
};
</script>
