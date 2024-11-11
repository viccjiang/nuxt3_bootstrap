import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

// import * as bootstrap from "bootstrap";
const { Modal, Collapse, Tooltip, Popover, Dropdown } = bootstrap;

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      bootstrap: {
        modal: (element) => new Modal(element),
        collapse: (element) => new Collapse(element),
        tooltip: (element) => new Tooltip(element),
        popover: (element) => new Popover(element),
        dropdown: (element) => new Dropdown(element),
      },
    },
  };
});
