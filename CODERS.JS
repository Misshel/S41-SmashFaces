'use strict';

const coderItem = (coder,sede,update,reRender) => {
  const imagen = coder.image;
  const name = coder.name;
  const img = $(`<img class="coder" src= "image/${sede}/${imagen}" alt="${name}"/>`);

  return img;

}

const codersGrid = () =>{

  const container = $('<div class="container-fluid"></div>');

  const row = $('<div class="row text"></div>');
  const p = $('<div class="col s12"><p>Bienvenida al juego de Smash Faces tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tienes 5 oportunidades antes de perder un 1 punto y pasar a la siguiente.</p></div>');
  const select = $('<div class="col s6">Elige tu sede:</div>');
  const option = $(' <select id="select" class="" name=""><option value="Peru">Peru</option><option value="Mexico">Mexico</option></select>');
  const puntos = $('<div class="col s2 offset-s4">Puntos:</div>');

  const rowCoder = $('<div class="row coder"></div>');
  const rowCoderCol = $('<div class="col s12"></div>');
  const contcoder = $('<div class="col s5"></div>');
  const welcome = $('<div class="col s12 who">¿Como se llaman nuestras coders?</div>');

  const selecCoder = $('<div class="col s7 selecCoder"></div>');
  const input = $('  <label for="">Ingresa su nombre:</label><input type="text" name="" value="" placeholder="Nombre">');
  const button = $('<button type="button" class="btn" name="button">COMENZAR</button>')
  const buttonNewCoder = $('<button type="button" class="btn start" name="button">COMPROBAR</button>')


  contcoder.append(welcome);
  select.append(option);

  selecCoder.append(input);
  selecCoder.append(button);
  selecCoder.append(buttonNewCoder);

  row.append(p);
  row.append(select);
  row.append(puntos);

  rowCoderCol.append(contcoder);
  rowCoderCol.append(selecCoder);

  rowCoder.append(rowCoderCol);
  container.append(row);
  container.append(rowCoder);

  var click = 0;

  const event = (e)=>{

    let sede =  $('select#select').val().toLowerCase();
    const sedeCoder = sede;
    if(sede == "mexico"){
      let random = randomByName (0,state.mexico.length);
      sede = state.mexico;
      reRender(contcoder,random,sede,sedeCoder);
      click++;
    } else{
      let random = randomByName (0,state.peru.length);
      sede = state.peru;
      reRender(contcoder,random,sede,sedeCoder);
      click++;
    }
    if(click > 0){
      $("button").addClass( "start");
      $("button").next().removeClass( "start");
      $("button").next().addClass( "reStart");
    }
  }

  button.on('click',event);

  if( button.css("display:block")){
    alert("hola");
    button.css("display:none");
    buttonNewCoder.css("display:block");
  }
  buttonNewCoder.on("click",event);

  return container;

}

const reRender = (contcoder, random,sede,sedeCoder,update) =>{
  contcoder.empty();
  for (var i = 0; i < 1; i++) {
    contcoder.append(coderItem(sede[random],sedeCoder,update, _=>{reRender(contcoder, findCoder);}));
  }
}
