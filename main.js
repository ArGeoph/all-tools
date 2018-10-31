let outputHtmlObject; //HTML object that will be used to display tools
let unitConvertButton, mortgageButton, currencyButton, tempConvertButton, aboutButton; //HTML button objects

//Function called when app loaded for the first time, to initialize all variables and add event listeners to all html objects
const initialize = () => {
    //Initialize all html objects that will be used in the application
    outputHtmlObject = document.getElementById("output");
    unitConvertButton = document.getElementById("unitConvertButton");
    mortgageButton = document.getElementById("mortgageButton");
    currencyButton = document.getElementById("currencyButton");
    tempConvertButton = document.getElementById("tempConvertButton");
    aboutButton = document.getElementById("aboutButton");
   // unitConversion();

    //Add event listeners to all html objects
    unitConvertButton.addEventListener("click", unitConversion, false);
    // mortgageButton.addEventListener("click", mortgageCalculator, false);
    // unitConvertButton.addEventListener("click", unitConversion, false);
    // currencyButton.addEventListener("click", currencyConverter, false);
    // tempConvertButton.addEventListener("click", temperatureConverter, false);
    // aboutButton.addEventListener("click", loadPersonalInfo, false);    
};

//Add load event listener to window object 
window.addEventListener("load", initialize, false);