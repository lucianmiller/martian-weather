import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rover from './rover';
import Astronomy from './astronomy';
import Weather from './weather';

$(document).ready(function() {
  //Rover promise
  let promiseRover = Rover.getRover();
  promiseRover.then(function(response) {
    let body = JSON.parse(response);
    console.log("Rover Working!");
  }, function(error) {
    $('#error').text(`There was an error processing your request: ${error}`);
  });
  //Astronomy promise
  let promiseAstro = Astronomy.getAstronomy();
  promiseAstro.then(function(response) {
    let body = JSON.parse(response);
    
    $('#photo').html('<img src='+body.url+'>');
    console.log("Astronomy Working!", body.url);
    console.table(body);
  }, function(error){
    $('#error').text(`There was an error processing your request: ${error}`);
  });
  //Weather promise
  let promiseWeather = Weather.getWeather();
  promiseWeather.then(function(response) {
    let body = JSON.parse(response);
    console.log("Weather working!");
  }, function(error){
    $('#error').text(`There was an error processing your request: ${error}`);
  });
});