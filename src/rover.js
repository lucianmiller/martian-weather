export default class Rover {
  static getRover() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_Key}`
      request.onload = function(){
        if (this.status === 200) {
          console.log("working!");
        } else {
          console.log("not working!")
        }
      }
      request.open("GET", url, true)
      request.send();
    });
  }
}