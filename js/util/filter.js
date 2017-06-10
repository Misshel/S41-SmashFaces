'use strict';

const filterByName = (sede,query) => {
 const name = sede.filter( (coder) => {
   return (coder.name.toLowerCase().indexOf(query.toLowerCase())!= -1);
 });

 return name;
}
