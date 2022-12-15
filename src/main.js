// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vue from "vue";
import Layout from "./layout";

import Vuetify from "vuetify";
import VuetifyDraggableTreeview from "vuetify-draggable-treeview";
import "vuetify/dist/vuetify.css";

Vue.use(Vuetify);
Vue.use(VuetifyDraggableTreeview);

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.prototype.log = console.log;

Vue.extend({
  components: {
    VuetifyDraggableTreeview
  }
});

new Vue({
  el: "#app",
  vuetify: new Vuetify({}),
  render: (h) => h(Layout)
});
