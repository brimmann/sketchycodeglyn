<script>
import {
  computed,
  h,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  useCssModule,
} from "vue";
import rough from "roughjs";

export default {
  props: {
    class: String,
    options: {
      type: Object,
      default: () => ({
        seed: 4,
        strokeWidth: 2,
        fill: null,
        roughness: null,
        hachureGap: null,
        fillStyle: null,
        hachureAngle: null,
      }),
    },
  },

  setup(props, { slots }) {
    const containerRef = ref(null);
    const canvasRef = ref(null);
    const style = useCssModule();
    const size = ref({
      width: null,
      height: null,
    });
    const nodeProps = computed(() => ({
      ref: containerRef,
      class: classes.value,
    }));

    const options = computed(() => {
      const temp = {
        seed: props.options.seed,
        strokeWidth: props.options.strokeWidth,
        fill: props.options.fill,
        roughness: props.options.roughness,
        hachureGap: props.options.hachureGap,
        fillStyle: props.options.fillStyle,
        hachureAngle: props.options.hachureAngle,
      };
      const filterTemp = Object.fromEntries(
        Object.entries(temp).filter(
          ([_, value]) => value !== undefined && value !== null
        )
      );
      return filterTemp;
    });
    const classes = computed(() => {
      let updatedClasses;
      if (props.class) {
        updatedClasses = `${style.container}` + " " + props.class;
      } else {
        updatedClasses = `${style.container}`;
      }
      return updatedClasses;
    });

    function drawDiv() {
      const rc = rough.canvas(canvasRef.value);
      rc.rectangle(0, 0, size.value.width, size.value.height, options.value);
    }
    function clearCanvas() {
      canvasRef.value
        .getContext("2d")
        .clearRect(0, 0, size.value.width, size.value.height);
    }

    onMounted(() => {
      nextTick(() => {
        size.value.width = containerRef.value.clientWidth;
        size.value.height = containerRef.value.clientHeight;
        drawDiv();
      });
    });
    onUpdated(() => {
      nextTick(() => {
        size.value.width = containerRef.value.clientWidth;
        size.value.height = containerRef.value.clientHeight;
        clearCanvas();
        drawDiv();
      });
    });

    

    return () => {
      const child = [
        h("canvas", {
          ref: canvasRef,
          width: size.value.width,
          height: size.value.height,
          class: style.boxCanvas,
        }),
        slots.default ? slots.default() : () => [],
      ];

      return h("div", nodeProps.value, { default: () => child });
    };
  },
};
</script>

<style module>
.container {
  position: relative;
  /* min-width: 100%;
  min-height: 100%; */
}

.boxCanvas {
  position: absolute;
  z-index: -10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}


</style>
