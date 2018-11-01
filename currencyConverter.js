let exchangeRates; //Variable used to store json object containing all exchange rates received from remote server

const getCurrentRates = async () => {
    try {
        let response = await fetch("https://api.exchangeratesapi.io/latest?base=USD");
        
        if (response.ok) {
            const responseJson = await response.json();

            return responseJson;
        }
    }
    catch(networkError) {
        console.log(networkError);
    }
};

const currencyConverter = async () => {
    exchangeRates = await getCurrentRates();
    
    let htmlContent = "<div class='container'><h3>Currency converter</h3>" +
    "<p class='date'>Exchange rates were updated on " + exchangeRates.date + " and fetched from server on " + new Date().toLocaleString() +  "</p>" +
    "<form novalidate>" +
    "<p><label><b>Exchange from</b><input type='number' class='userInput' id='exchangeFrom' min='0' value='0' /></label>" +
    "<select name='exchangeFromUnit'>";
    
    //Add available currencies to html content 
    Object.keys(exchangeRates.rates).sort().forEach((currencyCode) => { //Iterate through all fields of object exchangeRates.rates
       htmlContent += `<option value="${currencyCode}">${currencyCode}</option>`;
    });        
    
    htmlContent += "</select><p><label><b>Exchange to</b><input type='text' class='userInput disabled' id='exchangeTo' value='0' disabled/></label>" +
    "<select name='exchangeToUnit'>";

    //Add available currencies to html content 
    Object.keys(exchangeRates.rates).sort().forEach((currencyCode) => { //Iterate through all fields of object exchangeRates.rates
       htmlContent += `<option value="${currencyCode}">${currencyCode}</option>`;
    });

    outputHtmlObject.innerHTML = htmlContent + "</select><p><input type='reset' value='Clear fields' /></p></form></div>";

    //Add event listeners to html objects
    document.getElementById("exchangeFrom").addEventListener("change", await processCurrencyInput, false);
    document.getElementById("exchangeFrom").addEventListener("keyup", await processCurrencyInput, false);
    document.getElementsByName("exchangeFromUnit")[0].addEventListener("change", () => {
        document.getElementById("exchangeFrom").dispatchEvent(new Event("change"))}, false);
    document.getElementsByName("exchangeToUnit")[0].addEventListener("change", () => {
        document.getElementById('exchangeFrom').dispatchEvent(new Event("change"));}, false);
};

//Function processing user input for exhange rates
const processCurrencyInput = async (event) => {
    let inputValue = event.currentTarget.value; //get value changed by user
    let outputValue;

    //Check if input is not a number or negative,
    //only after user started typing something, i.e. not when they just pressed backspace (keyCode = 8) or del (keyCode 46) keys
    if (isNaN(parseInt(inputValue)) && (event.keyCode != 8 && event.keyCode != 46)) {
        
        window.alert("Input values cannot be negative, blank or contain letters! Please check your input ");
        event.currentTarget.value = 0;
        return;
    }

    //Get all object that will be needed to complete exhange
    let outputField = document.getElementById('exchangeTo');
    let inputCurrency = document.getElementsByName("exchangeFromUnit")[0].value;
    let outputCurrency = document.getElementsByName("exchangeToUnit")[0].value;  

    //Calculate output
    outputValue = inputValue * (exchangeRates.rates[outputCurrency]/exchangeRates.rates[inputCurrency]);

    outputField.value = (outputValue == inputValue) ? outputValue : outputValue.toFixed(2);
};
 