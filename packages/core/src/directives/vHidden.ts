import type { Directive } from "vue";

type HiddenDirective = Directive<HTMLElement, boolean | undefined | "until-found">;

/**
 * Works similarly to `v-if` and `v-show`
 * but for the `hidden` attribute.
 */
export const vHidden: HiddenDirective & { name?: "hidden" } = {
  beforeMount(element, { value }, { transition }) {
    if (transition && value === false) {
      transition.beforeEnter(element);
    } else {
      setHidden(element, value);
    }
  },

  mounted(element, { value }, { transition }) {
    if (transition && value === false) {
      transition.enter(element);
    }
  },

  updated(element, { value, oldValue }, { transition }) {
    if (value === oldValue) {
      return;
    }

    if (transition) {
      if (value === false) {
        transition.beforeEnter(element);
        setHidden(element, value);
        transition.enter(element);
      } else {
        transition.leave(element, () => setHidden(element, value));
      }
    } else {
      setHidden(element, value);
    }
  },

  beforeUnmount(element, { value }) {
    setHidden(element, value);
  },
};

const setHidden = (element: HTMLElement, value: undefined | boolean | "until-found") => {
  if (value) {
    element.setAttribute("hidden", `${value}`);
  } else {
    element.removeAttribute("hidden");
  }
};
