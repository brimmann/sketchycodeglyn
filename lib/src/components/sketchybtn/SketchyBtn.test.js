import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import SketchyBtn from "./SketchyBtn.vue";
import { render } from "@testing-library/vue";

describe("SketchyBtn", () => {
  test("render on the scree", () => {
    const wrapper = shallowMount(SketchyBtn);
    expect(wrapper.exists()).toBe(true);
  });

  test("label is rendered", () => {
    const label = "Button";
    const wrapper = mount(SketchyBtn, {
      props: {
        label: label,
      },
    });
    expect(wrapper.text()).toContain(label);
  });

  test("emit `click` event when clicked", async () => {
    const wrapper = shallowMount(SketchyBtn);
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
