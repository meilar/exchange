import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

function displayExchange(rate, userAmt) {
  console.log(rate);
  if (rate["result"] === "success") {
    let outputAmt = rate["conversion-rate"]*userAmt;
    $("#end-amt").text(outputAmt);
  } else {
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
  let rate = CurrencyExchange.exchange(userCurr);
  rate.then(displayExchange(rate, userAmt));
});

$("#reset").on("click", function() {
  location.reload(true);
});