"use strict";

function getName() {
   return this.name;
}

//global 
name = 'React';

//console.log(global == this);

//console.log(getName());
console.log(getName.apply());