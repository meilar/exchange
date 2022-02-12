export default class CurrencyExchange {
  static exchange(userCurr) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.responseType = "json";
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${userCurr}`;
      
      request.onerror = function() {
        reject("The API call failed. Please check your API_KEY in your .env file and network connection, and try again");
      };

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response["error-type"]);
        }
      };
      request.open("GET", url, true);
      request.send();
    });

  }
}