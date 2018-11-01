let outputHtmlObject; //HTML object that will be used to display tools
let unitConvertButton, mortgageButton, currencyButton, mainPageButton; //HTML button objects
let mainPageContent; //Object used to store content for the main page

//Function called when app loaded for the first time, to initialize all variables and add event listeners to all html objects
const initialize = () => {
    //Initialize all html objects that will be used in the application
    
    outputHtmlObject = document.getElementById("output");
    mainPageButton = document.getElementById("mainPageButton");
    unitConvertButton = document.getElementById("unitConvertButton");
    mortgageButton = document.getElementById("mortgageButton");
    currencyButton = document.getElementById("currencyButton");

    //Add event listeners to all html objects
    mainPageButton.addEventListener("click", renderMainPage, false);
    unitConvertButton.addEventListener("click", unitConversion, false);
    unitConvertButton.addEventListener("click", unitConversion, false);
    mortgageButton.addEventListener("click", mortgageCalculator, false);
    currencyButton.addEventListener("click", currencyConverter, false);

    //Render main page when app is loaded for the first time
    renderMainPage();
};

//Function rendering main page content
const renderMainPage =  () => {
    mainPageContent = "<div class='container'><p class='date'>This web app was created as an assignment for the Computer Science program at Athabasca University." + 
    " The vanila JavaScript and JQuery were used</p></div>";
    outputHtmlObject.innerHTML =  mainPageContent;
};

//Add load event listener to window object 
window.addEventListener("load", initialize, false);