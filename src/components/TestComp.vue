<template>
  <div>
    <v-layout wrap>
      <v-flex mb-5 xs12>
        <v-card>
          <v-card-title>Using Slot</v-card-title>
          <v-btn depressed color="primary" @click="ajouterMenu()">
            Ajouter Menu
          </v-btn>
          <v-card-text>
            <v-draggable-treeview
              v-model="items"
              group="hoge"
              :empty-insert-threshhold="500"
              @drop.native="dragend($event)"
            >
              <template v-slot:prepend="{ item }">
                <v-icon>{{ item.icon }}</v-icon>
              </template>
              <template v-slot:label="{ item }">
                <span :id="item.id" class="primary--text">{{ item.name }}</span>
              </template>
              <template v-slot:append="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      small
                      class="mr-2"
                      @click.stop="ajouter(item)"
                      v-if="!item.link"
                    >
                      mdi-folder
                    </v-icon>
                  </template>
                  <span>Ajouter un menu</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      small
                      class="mr-2"
                      @click.stop="ajouterSousMenu(item, $event)"
                      v-if="!item.link"
                    >
                      mdi-plus
                    </v-icon>
                  </template>
                  <span>Ajouter un sous-menu</span>
                </v-tooltip>
                <v-icon small class="mr-2" @click.stop=""> edit </v-icon>
                <v-icon small class="mr-2" @click.stop=""> mdi-delete </v-icon>
              </template>
            </v-draggable-treeview>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <pre>
    {{ items }}

    </pre>
  </div>
</template>

<script>
export default {
  name: "TestComp",
  data: () => ({
    items: [
      {
        id: 1,
        name: "Central League",
        icon: "mdi-shopping",
        link: "",
        children: [
          { id: 101, name: "Dragons", icon: "", link: "test", children: [] },
          { id: 102, name: "Tigers", icon: "", link: "test", children: [] },
        ],
      },
      {
        id: 2,
        name: "Pacific League",
        icon: "mdi-cog",
        link: "",
        children: [
          {
            id: 7,
            name: "Lions",
            link: "",
            children: [
              {
                id: 8,
                name: "Lions Minor",
                icon: "",
                link: "test",
                children: [],
              },
              {
                id: 9,
                name: "Lions third",
                icon: "",
                link: "test",
                children: [],
              },
            ],
          },
        ],
      },
    ],
    hoverParent: false,
    hoverChild: false,
    i: 0,
  }),
  computed: {
    //<-- Added
    clonedItems: function () {
      return JSON.parse(JSON.stringify(this.items));
    },
  },
  watch: {
    clonedItems: {
      deep: true,
      handler(newVal, oldVal) {},
    },
  },
  methods: {
    ajouterMenu() {
      console.log();
      this.items.push({
        id: 3,
        name: "Test",
        icon: "mdi-shopping",
        link: "",
        children: [],
      });
    },
    ajouterSousMenu(item, event) {
      item.children.push({
        id: 301,
        name: "Test",
        icon: "",
        link: "test",
        children: [],
      });
      event.target.parentNode.click();
      //console.log(event.target.parentNode.parentNode);
      //console.log(event.target.parentNode);
      console.log(event.target.parentNode.nextSibling);
    },
    dragend(event) {
      var id = event.target.getElementsByClassName("primary--text")[0].id;
      if (id !== "") {
        console.log(id);
      } else {
        console.log(event.target);
      }
    },
  },
};
</script>

<style>
pre {
  background-color: whitesmoke;
  padding: 15px;
  margin: 20px;
  font-size: 10px;
}

.active {
  display: none;
}
</style>