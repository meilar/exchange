import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

function submitMessage() {
  $(".alert-primary").removeClass("hidden");
}

$("#input-go").on("click", function() {
  submitMessage();
  let userAmt = $("#user-amt").val;
  let result = CurrencyExchange.exchange(userAmt, userCurr);
  if (typeof result === "number") {
    // exchange rate math code
  } else {
    // display error code
  }
})

$("#reset").on("click", function() {
  location.reload(true);
})