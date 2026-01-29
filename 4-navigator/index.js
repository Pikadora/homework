let addressLat = 55; //адрес назначения lat 
let addressLong = 59 //адрес назначения long
let positionLat = 37; //текущее положение пользователя lat
let positionLong = 30 //текущее положение пользователя long

const R = 6371; // Радиус Земли в километрах

const toRad = (value) => (value * Math.PI) / 180;

let Lat = toRad(positionLat - addressLat);
let Long = toRad(positionLong - addressLong);


let a = Math.sin(Lat/2)*Math.sin(Lat/2) + Math.cos(toRad(addressLat))*Math.cos(toRad(positionLat))*Math.sin(Long/2)*Math.sin(Long/2);
let c = 2* Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

const distance = R * c;

console.log(distance);
