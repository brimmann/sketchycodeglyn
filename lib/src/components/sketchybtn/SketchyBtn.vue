<script>
import { computed, h, ref, useCssModule } from "vue";
import SketchyDiv from "../sketchydiv/SketchyDiv.vue";

export default {
  props: {
    label: String,
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 40,
    },
    fontSize: {
      type: Number,
      default: 19,
    },
  },

  setup(props) {
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
    const finalClasses = ref(classes.value);
    const nodeProps = ref({
      options: {
        seed: 9,
        strokeWidth: 2,
        hachureGap: 2,
        hachureAngle: 0,
      },
      class: finalClasses,
      onmouseenter: hoverCallback,
      onmouseleave: unhoverCallback,
    });

    function hoverCallback() {
      nodeProps.value.options.strokeWidth = 6;
    }
    function unhoverCallback() {
      nodeProps.value.options.strokeWidth = 2;
    }

    return () => h(SketchyDiv, nodeProps.value, { default: () => props.label });
  },
};
</script>

<style module>
.container {
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.btnhovered {
  color: white;
}
</style>
