'use strict';

const Header = () => {
  const header = $('<header></header>');
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row text"></div>');
  const col = $('<div class="col s12"></div>');
  const h1 = $('<h1>Smash Faces<br><hr></h1>');

  col.append(h1);
  row.append(col);
  container.append(row);
  header.append(container);

  return header;
};
