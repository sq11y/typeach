import { ref, type Directive } from "vue";

const count = ref(0);

type AriaLabelledbyDirective = Directive<HTMLElement, string | undefined>;

/**
 * Adds the text as a hidden `span` element in the dom,
 * and connects it to the relevant element with `aria-labelledby`.
 */
export const vAriaLabelledby: AriaLabelledbyDirective & { name?: "aria-labelledby" } = {
  beforeMount(element, { value }) {
    const id = `a-l-${count.value++}`;

    element.setAttribute("data-labelledby-id", id);

    if (!value) {
      return;
    }

    createLabelElement(value, id);
    element.setAttribute("aria-labelledby", id);
  },

  updated(element, { value, oldValue }) {
    if (value === oldValue) {
      return;
    }

    const id = element.getAttribute("data-labelledby-id");

    if (id) {
      const label = document.getElementById(id);

      if (!value) {
        element.removeAttribute("aria-labelledby");
        label?.remove();
      } else if (label) {
        label.innerText = value;
      } else {
        createLabelElement(value, id);
        element.setAttribute("aria-labelledby", id);
      }
    }
  },

  beforeUnmount(element) {
    const id = element.getAttribute("data-labelledby-id");

    if (id) {
      element.removeAttribute("aria-labelledby");
      document.getElementById(id)?.remove();
    }
  },
};

const createLabelElement = (text: string, id: string) => {
  const label = document.createElement("span");

  label.innerText = text;
  label.id = `${id}`;
  label.hidden = true;

  document.documentElement.appendChild(label);

  return label;
};
