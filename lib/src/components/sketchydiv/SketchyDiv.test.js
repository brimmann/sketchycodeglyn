import { flushPromises, mount } from "@vue/test-utils";
import { fireEvent, render } from "@testing-library/vue";
import { describe, test, expect } from "vitest";
import SketchyDiv from "./SketchyDiv.vue";

describe("SketchyDiv", () => {
  test("container div exists", () => {
    const wrapper = render(SketchyDiv);
    expect(wrapper.container.firstChild.tagName).toBe("DIV");
  });
  test("canvas size is not 0 if container is greator then 0", () => {
    const wrapper = render(SketchyDiv, {
      attrs: {
        style: "padding: 80px",
      },
    });
    const canvas = wrapper.container.querySelector("canvas");
    expect(canvas.width).toBeGreaterThan(0);
    expect(canvas.height).toBeGreaterThan(0);
  });
  test("classes passed to it are classes of the container div", () => {
    const wrapper = render(SketchyDiv, {
      attrs: {
        class: "cls1 cls2",
      },
    });
    const containerDiv = wrapper.container.firstChild;
    expect(containerDiv).toHaveClass("cls1");
  });
  test("emit `click` event when clicked", async () => {
    const wrapper = render(SketchyDiv, {
      attrs: {
        class: "cls1 cls2",
      },
    });
    const containerDiv = wrapper.container.firstChild;
    await fireEvent.click(containerDiv);
    expect(wrapper.emitted().click).toBeTruthy();
  });
  test("render a div that is passed in the slot", () => {
    const slotContent =
      '<div data-testid="slot-div">This is inside SketchyDiv</div>';
    const wrapper = mount(SketchyDiv, {
      slots: {
        default: slotContent,
      },
    });

    const slotDiv = wrapper.find('[data-testid="slot-div"]');
    expect(slotDiv.exists()).toBe(true);
  });
});
