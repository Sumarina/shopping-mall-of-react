const getId = (id) => {
  const dom = document.getElementById(id);
  const newID = `${dom.id}-${Math.floor(Math.random() * 100000)}`;
  dom && dom.setAttribute('id', newID);
  return dom;
};
const hasClass = (dom, cls) => {
  return dom.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));
};
const addClass = (dom, cls) => {
  if (!hasClass(dom, cls)) {
    dom.className += ` ${cls}`;
  }
};
const removeClass = (dom, cls) => {
  if (!hasClass(dom, cls)) {
    dom.className.replace(new RegExp(`(\\s|^)${cls}(\\s|$)`), '');
  }
};
export { getId, addClass, removeClass };
