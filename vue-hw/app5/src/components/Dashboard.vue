<template>
  <div>
    <h3>Dashboard</h3>
    <button @click="signOut" class="btn btn-danger btn-sm signout-btn">
      Sign Out
    </button>

    <AddEvent />

    <hr />

    <div
      v-for="(event, index) in $store.state.events"
      :key="index"
      class="col-md-4"
    >
      <EventItem
        v-if="event.email === $store.state.user.email"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { onValue } from "firebase/database";
import { auth, eventRef } from "../firebase";
import AddEvent from "@/components/AddEvent.vue";
import EventItem from "@/components/EventItem";
export default {
  name: "Dashboard",
  components: {
    AddEvent,
    EventItem,
  },
  methods: {
    signOut() {
      signOut(auth).then(() => {
        this.$store.commit("signOut");
      });
    },
  },
  mounted() {
    onValue(eventRef, (snap) => {
      const events = [];
      snap.forEach((event) => {
        events.push(event.val());
      });
      this.$store.commit("setEvents", events);
    });
  },
};
</script>
