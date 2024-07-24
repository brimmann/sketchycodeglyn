<script>
import { computed, h, inject, onMounted, onUpdated, ref, useCssModule, watch } from 'vue'
import SketchyDiv from "../sketchydiv/SketchyDiv.vue";

export default {
  name: 'SketchyTab',

  props: {
    label: String,
    name: String
  },

  setup(props, {}) {
    const $tabs = inject('_sketchy_tabs_')
    const defaultWdith = 2
    const hoverDist = 6
    const activationDist = 10
    const style = useCssModule()
    const classes = computed(() => {
      let updatedClasses
      if (props.class) {
        updatedClasses = `${style.container}` + ' ' + props.class
      } else {
        updatedClasses = `${style.container}`
      }
      return updatedClasses
    })
    const isActive = ref($tabs.currentModel.value === props.name)

    watch($tabs.currentModel, () => {
      isActive.value = $tabs.currentModel.value === props.name
      calculateWidthNormal()
    })
    const nodeProps = ref({
      options: {
        seed: 9,
        strokeWidth: defaultWdith
      },
      class: classes.value,
      onmouseenter: hoverCallback,
      onmouseleave: unhoverCallback,
      onClick
    })

    function calculateWidthHover() {
      if (isActive.value) {
        nodeProps.value.options.strokeWidth = hoverDist + activationDist
      } else {
        nodeProps.value.options.strokeWidth = hoverDist
      }
    }

    function calculateWidthNormal() {
      if (isActive.value) {
        nodeProps.value.options.strokeWidth = activationDist
      } else {
        nodeProps.value.options.strokeWidth = defaultWdith
      }
    }
    function onClick(e) {
      $tabs.updateModel(props.name)
    }
    function hoverCallback() {

      calculateWidthHover()
    }
    function unhoverCallback() {
      calculateWidthNormal()
    }

    onMounted(() => {
      isActive.value = $tabs.currentModel.value === props.name
      calculateWidthNormal()
    })

    onUpdated(() => {})

    return () => h(SketchyDiv, nodeProps.value, { default: () => props.label })
  }
}
</script>

<style module>
.container {
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
  user-select: none;
}
</style>
