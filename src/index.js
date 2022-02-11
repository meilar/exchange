import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

function displayExchange(rate, userAmt) {
  if (rate.result === "success") {
    console.log("display exchange if statement");
    let outputAmt = rate.conversion_rate*userAmt;
    console.log("output amount is "+outputAmt);
    $("#end-amt").text(outputAmt);
  } else {
    console.log("display exchange else statement");
    $("#error-text").text(rate["error-type"]);
    $(".alert-primary").addClass("hidden");
    $(".alert-danger").removeClass("hidden");
  }
}

function submitMessage() {
  $(".alert-primary").removeClass("hidden");
}

$("#input-go").on("click", function() {
  submitMessage();
  let userAmt = $("#user-amt").val();
  $("#start-amt").text(userAmt);
  let userCurr = $("#curr-select").val();
  $("#end-curr").text();
  let rateRequest = CurrencyExchange.exchange(userCurr);
  rateRequest
    .then(rateRequest => displayExchange(rateRequest, userAmt));
});

$("#reset").on("click", function() {
  location.reload(true);
});