import { reactive } from "vue";

export const store = reactive({
  dataCard: [],
  url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
});
