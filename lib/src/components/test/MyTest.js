import { h } from "vue";

export default {
  setup() {
    return () => {
        return h("div", {}, 'Something to see')
    };
  },
};