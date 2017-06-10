'use strict';



const coderItem = (coder,sede,update,reRender) => {
  console.log(sede +"img");
  if(sede == "mexico"){
    // quien soy
    console.log(state.mexico.image);
    let img = $(`<img class="coder" src= "image/${sede}/${coder.imagen}" alt="${coder.name}"/>`);
  }
  let img = $(`<img class="coder" src= "image/${sede}/${coder.image}" alt="${coder.name}"/>`);

  return img;
}



const codersGrid = () =>{

  const container = $('<div class="container-fluid"></div>');

  const row = $('<div class="row text"></div>');
  const p = $('<div class="col s12"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>');
  const select = $('<div class="col s6">Elige tu sede:</div>');
  const option = $(' <select id="select" class="" name=""><option value="Peru">Peru</option><option value="Mexico">Mexico</option></select>');
  const puntos = $('<div class="col s6">Puntos:</div>');

  const rowCoder = $('<div class="row coder"></div>');
  const rowCoderCol = $('<div class="col s12"></div>');
  const contcoder = $('<div class="col s6"></div>');

  const selecCoder = $('<div class="col s6"></div>');
  const input = $('  <input type="text" name="" value="">');
  const button = $('<button type="button" name="button">Buscar</button>')


  select.append(option);

  selecCoder.append(input);
  selecCoder.append(button);

  row.append(p);
  row.append(select);
  row.append(puntos);

  rowCoderCol.append(contcoder);
  rowCoderCol.append(selecCoder);

  rowCoder.append(rowCoderCol);
  container.append(row);
  container.append(rowCoder);

  button.on('click',(e)=>{

    let sede =  $('select#select').val().toLowerCase();
    console.log(sede);
    // if(sede=="Mexico"){
    //   state.sede== state.mexico;
    //   alert(state.sede)
    //   console.log(state.sede);
    //
    // }else{
    //   state.sede== state.peru;
    // }
    if(sede == "mexico"){
      const findCoder =  filterByName(state.mexico,input.val());
    }

    const findCoder =   filterByName(state.peru,input.val());
    console.log(sede);
    reRender(contcoder,findCoder,sede);
    // console.log(    reRender(contcoder,findCoder,sede));
  });
  return container;

}

const reRender = (contcoder, findCoder,sede,update) =>{
  contcoder.empty();
  findCoder.forEach((coder)=>{
    console.log(sede);
    contcoder.append(coderItem(coder,sede,update, _=>{reRender(contcoder, findCoder);}));
    // contcoder.append(coderItem(coder,update, _=>{reRender(contcoder, findCoder);}));
  });
}
