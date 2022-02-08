import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rover from './rover'

$(document).ready(function() {
  //Rover promise
  let promise1 = Rover.getRover();
  promise1.then(function(response) {
    let body = JSON.parse(response);
    console.log("Working!")
  }, function(error) {
    $('#error').text(`There was an error processing your request: ${error}`)
  });
});