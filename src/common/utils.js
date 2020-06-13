const getId = (id) => {
  const dom = document.getElementById(id);
  const newID = `${dom.id}-${Math.floor(Math.random() * 100000)}`;
  dom && dom.setAttribute('id', newID);
  return dom;
};
export { getId };
