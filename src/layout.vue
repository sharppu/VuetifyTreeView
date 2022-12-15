<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <h3>POC for vuetify-draggable-tree</h3>

        <TestComp/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    TestComp: () => import("./components/TestComp.vue")
  }
};
</script>

