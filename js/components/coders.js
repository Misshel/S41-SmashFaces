'use strict';

const coderItem = (coder,sede,update,reRender) => {
  const imagen = coder.image;
  const name = coder.name;
  const img = $(`<img id="coder" class="coder" src= "image/${sede}/${imagen}" alt="${name}"/>`);



  return img;

}

const codersGrid = () =>{

  const container = $('<div class="container-fluid"></div>');

  const row = $('<div class="row text"></div>');
  const p = $('<div class="col s12"><p>Bienvenida al juego de Smash Faces tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tienes 5 oportunidades antes de perder un 1 punto y pasar a la siguiente.</p></div>');
  const select = $('<div class="col s6">Elige tu sede:</div>');
  const option = $(' <select id="select" class="" name=""><option value="Peru">Peru</option><option value="Mexico">Mexico</option></select>');
  const puntos = $('<div class="col s3 offset-s3">Puntos:</div>');

  const rowCoder = $('<div class="row coder"></div>');
  const rowCoderCol = $('<div class="col s12"></div>');
  const contcoder = $('<div class="col s5"></div>');
  const welcome = $('<div class="col s12 who">¿Como se llaman nuestras coders?</div>');

  const selecCoder = $('<div class="col s7 selecCoder"></div>');
  const input = $('  <label for="">Ingresa su nombre:</label><input id="name" type="text" name="" value="" placeholder="Nombre">');
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
  var click2 = 0 ;
  let showBonus = $('<input id="bonus" type="text" name="" value=" " readonly>');
  var click = 0 ;

  const bonus = (review,alt,)=>{
    const mas =_=>{
      click++;
      let acierto = 0;
      let valor =  $('#bonus').val();
      $('#bonus').val(click/2 + " punto(s)");
    }
// NECESITA QUITAR PUNTOS ACTIVAR NUEVAMENTE EL BOTON
    const menos=_=>{
      $("button").off("click");
    }

    if(alt != review |''){
      setTimeout(menos(),3000)
    }else {
      mas();
    }

    return showBonus;
  }

  const event = (e)=>{
    let sede =  $('select#select').val().toLowerCase();
    const sedeCoder = sede;
    if(sede == "mexico"){
      sede = state.mexico;
      let random = randomByName (0,state.mexico.length);
      reRender(contcoder,random,sede,sedeCoder);

      let alt = $("#coder").attr("alt").toLowerCase();
      console.log(alt + "soy primero");
      let review = $("input#name").val().toLowerCase();
      console.log(review + "soy segundo");

      bonus(review,alt);
      puntos.append(bonus(review,alt));

    } else{
      sede = state.peru;
      let random = randomByName (0,state.peru.length);
      reRender(contcoder,random,sede,sedeCoder);

      let alt = $("#coder").attr("alt").toLowerCase();
      let review = $("input").val().toLowerCase();

      bonus(review,alt);
      puntos.append(bonus(review,alt));
    }
    if(click2 > 0){
      $("button").addClass( "start");
      $("button").next().removeClass( "start");
      $("button").next().addClass( "reStart");
    }

  }

  button.on('click',event);
  buttonNewCoder.on("click",event);
  return container;
}

const reRender = (contcoder, random,sede,sedeCoder,update) =>{
  contcoder.empty();
  for (var i = 0; i < 1; i++) {
    contcoder.append(coderItem(sede[random],sedeCoder,update, _=>{reRender(contcoder, findCoder);}));
  }
}
