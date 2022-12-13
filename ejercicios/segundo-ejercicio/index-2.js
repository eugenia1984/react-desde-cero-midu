"use strict";

const APP = document.getElementById("app");
const h = React.createElement;

const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;

  return h("img", { src });
};

// Sin tener Babel y sin usar JSX
// Primera forma
ReactDOM.render(
  h("div", null, [h(Avatar, { id: 1 }), h(Avatar, { id: 2 })]),
  APP
);

// Segunda forma
// ReactDOM.createRoot(APP).render([h(Avatar, {id: 1}), h(Avatar, {id: 2})])
