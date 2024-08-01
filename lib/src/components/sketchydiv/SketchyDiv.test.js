import { mount } from "@vue/test-utils";
import { render } from "@testing-library/vue"
import { describe, test, expect } from "vitest";
import SketchyDiv from "./SketchyDiv.vue";

describe("SketchyDiv", () => {
  test("div and convas dimension matches", () => {
    const wrapper = mount(SketchyDiv)
    console.log("Something is happening");
  });
});
