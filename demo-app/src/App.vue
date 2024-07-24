<template>
  <SketchyDiv class="pd" style="margin-bottom: 10px">INsied</SketchyDiv>
  <SketchyBtn
    label="Click"
    style="padding: 10px 5px; font-size: 18px; margin-bottom: 100px"
  />
  <SketchyHLine />
  <div>NEXT</div>
  <br />
  <SketchyTabs v-model="tab">
    <SketchyTab name="focuz" label="Focuz Time" />
    <SketchyTab name="short" label="Short Break" />
    <SketchyTab name="long" label="Long Break" />
  </SketchyTabs>
</template>

<script setup>
import { SketchyDiv, SketchyBtn, SketchyHLine, SketchyTab, SketchyTabs } from "codeglynuikit";
import { ref } from "vue";

const tab = ref("focuz")

</script>

<style>
.pd {
  padding: 80px;
}
</style>
