import compOne from "./components/CompOne.vue";
import compTwo from "./components/CompTwo.vue";

export default {
  install(Vue: any) {
    Vue.component("ui-compone", compOne);
    Vue.component("ui-comptwo", compTwo);
  }
};

export { compOne, compTwo };
