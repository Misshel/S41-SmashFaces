'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //Append de componentes
  wrapper.append(Header());
  wrapper.append(codersGrid());

  root.append(wrapper);
};

const state = {
  // estado: null,
  peru: peru,
  mexico: mexico,
  selectedCoder: null
}

$( _ => {

  const root = $('.root');
  render(root);

});
