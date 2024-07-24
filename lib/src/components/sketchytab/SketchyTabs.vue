<script>
import {
  computed,
  h,
  onMounted,
  onUpdated,
  provide,
  ref,
  useCssModule,
} from "vue";
import SketchyDiv from "../sketchydiv/SketchyDiv.vue";

export default {
  name: "SketchyTabs",

  props: {
    modelValue: String,
  },

  setup(props, { slots, emit }) {
    const currentModel = computed(() => props.modelValue);
    const $tabs = {
      currentModel,
      updateModel,
    };
    provide("_sketchy_tabs_", $tabs);
    const divRef = ref(null);
    const style = useCssModule();
    const classes = computed(() => {
      let updatedClasses;
      if (props.class) {
        updatedClasses = `${style.container}` + " " + props.class;
      } else {
        updatedClasses = `${style.container}`;
      }
      return updatedClasses;
    });

    function updateModel(name) {
      emit("update:modelValue", name);
    }

    onMounted(() => {});

    onUpdated(() => {});

    return () => {
      return h(
        SketchyDiv,
        {
          class: classes.value,
          ref: divRef,
        },
        {
          default: () => (slots.default ? slots.default() : []),
        }
      );
    };
  },
};
</script>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
