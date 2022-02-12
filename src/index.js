import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

function displayExchange(rate, userAmt, userCurr) {
  let outputAmt = rate.conversion_rate*userAmt;
  $("#output-text").html(`$${Intl.NumberFormat("USD").format(userAmt)} USD is worth ${Intl.NumberFormat(userCurr).format(outputAmt)} ${userCurr}. Conversion
  data is provided by <a class='alert-link' href="https://www.exchangerate-api.com/">ExchangeRate-API</a>.`);
  $(".alert-primary").addClass("hidden");
  $(".alert-success").removeClass("hidden");
}

function displayError(message) {
  $("#error-text").text(message);
  $(".alert-primary").addClass("hidden");
  $(".alert-danger").removeClass("hidden");
}

$("#input-go").on("click", function() {
  $(".alert-success").addClass("hidden");
  $(".alert-danger").addClass("hidden");
  $(".alert-primary").removeClass("hidden");
  let userAmt = $("#user-amt").val();
  $("#user-amt").val("");
  $("#start-amt").text(userAmt);
  let userCurr = $("#curr-select").val();
  if (userCurr === "") {
    $("#error-text").text("Please select an ending currency");
    $(".alert-primary").addClass("hidden");
    $(".alert-success").addClass("hidden");
    $(".alert-danger").removeClass("hidden");
  } else {
    let rateRequest = CurrencyExchange.exchange(userCurr);
    rateRequest
      .then(rateRequest => displayExchange(rateRequest, userAmt, userCurr))
      .catch(message => displayError(message));
  }
});
