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
    $('#rover').click(function(){
      $('#photo').html('<img src='+body.photos[0].img_src+'>');
    });
  }, function(error) {
    $('#error').text(`There was an error processing your request: ${error}`);
  });
  //Astronomy promise
  let promiseAstro = Astronomy.getAstronomy();
  promiseAstro.then(function(response) {
    let body = JSON.parse(response);
    $('#astronomy').click(function(){
      $('#photo').html('<img src='+body.url+'>');
    });
  }, function(error){
    $('#error').text(`There was an error processing your request: ${error}`);
  });
});