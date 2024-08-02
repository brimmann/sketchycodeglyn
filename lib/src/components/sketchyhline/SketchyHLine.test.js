import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import SketchyHLine from "./SketchyHLine.vue"

describe("SketchyHLine", () => {
    test("render on the scree", () => {
        const wrapper = shallowMount(SketchyHLine);
        expect(wrapper.exists()).toBe(true);
      });
})