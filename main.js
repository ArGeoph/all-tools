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
    unitConversion();
    //Add event listeners to all html objects
    unitConvertButton.addEventListener("click", unitConversion, false);
    mortgageButton.addEventListener("click", mortgageCalculator, false);
    unitConvertButton.addEventListener("click", unitConversion, false);
    currencyButton.addEventListener("click", currencyConverter, false);
    tempConvertButton.addEventListener("click", temperatureConverter, false);
    aboutButton.addEventListener("click", loadPersonalInfo, false);
    
};

//Function implementing unit convertor 
const unitConversion = () => {
    output.innerHTML = "<div id='unitConverter'><h3>Unit converter</h3>" +
    "<form validate> <p><label><b>Weights </b></label><input type = 'number' min='0' value='0' class='userInput'  >" +
    "<select name='weightsConvertFrom'>" +
    "<option value='gm'>mm</option>" +
    "<option value='kg'>meter</option>" + 
    "<option value='lb'>ft</option>" +
    "<input type = 'number' min='0' value='0' class='userInput'>" +
    "<select name='weightsConvertTo'>" +
    "<option value='gm'>mm</option>" +
    "<option value='kg'>meter</option>" + 
    "<option value='lb'>ft</option></select></p>" +

    "<p><label><b>Lengths </b></label><input type = 'number' min='0' value='0' class='userInput' >" +
    "<select name='lengthConvertFrom'>" +
    "<option value='m'>meter</option>" + 
    "<option value='mile'>mile</option>" + 
    "<option value='ft'>ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='mm'>mm</option>" +
    "<option value='inch'>inch</option></select>" +
    "<input type = 'number' min='0' value='0' class='userInput'>" +
    "<select name='lengthConvertTo'>" +
    "<option value='m'>meter</option>" +
    "<option value='mile'>mile</option>" +  
    "<option value='ft'>ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='mm'>mm</option>" +
    "<option value='inch'>inch</option></select></p>" +

    "<p><label><b>Areas </b></label><input type = 'number' min='0' value='0' class='userInput' >" +
    "<select name='areaConvertFrom'>" +
    "<option value='m2'>sq. m</option>" + 
    "<option value='ft'>sq. ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='mm'>mm</option>" +
    "<option value='inch'>inch</option></select>" +
    "<input type = 'number' min='0' value='0' class='userInput'>" +
    "<select name='areaConvertTo'>" +
    "<option value='m'>meter</option>" + 
    "<option value='ft'>ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='mm'>mm</option>" +
    "<option value='inch'>inch</option></select></p>" +

    "<p><label><b>Volumes </b></label><input type = 'number' min='0' value='0' class='userInput'  >" +
    "<select name='areaConvertFrom'>" +
    "<option value='m2'>sq. m</option>" + 
    "<option value='ft'>sq. ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='mm'>mm</option>" +
    "<option value='inch'>inch</option></select>" +
    "<input type = 'number' min='0' value='0' class='userInput'>" +
    "<select name='areaConvertTo'>" +
    "<option value='m'>meter</option>" + 
    "<option value='ft'>ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='mm'>mm</option>" +
    "<option value='inch'>inch</option></select></p>" +

    
    "</form>"
    
    "</div>"
};

//Add load event listener to window object 
window.addEventListener("load", initialize, false);