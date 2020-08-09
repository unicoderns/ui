import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CompOne from "@/components/CompOne.vue";

describe("CompOne.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Comp 1";
    const wrapper = shallowMount(CompOne, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
