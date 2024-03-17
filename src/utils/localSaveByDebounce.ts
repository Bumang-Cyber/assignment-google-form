import _ from "lodash";

export const localSaveByDebounce = _.debounce((title: string, item: string) => {
  localStorage.setItem(title, item);
}, 500);
