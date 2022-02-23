export default class Rover {
  static getRover() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${process.env.API_KEY}`
      request.onload = function(){
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true)
      request.send();
    });
  }
}