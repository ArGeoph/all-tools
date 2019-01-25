//Function implementing unit convertor 
const unitConversion = async () => {
    //Render html content for 
    outputHtmlObject.innerHTML = "<div class='container'><h3>Unit converter</h3>" +
    "<form novalidate><h3>Weight</h3>" +
    "<p><label>From</label><input type = 'number' min='0' value='0' class='userInput' id='weightsFrom' ><select name='weightsFromUnit'>" +
    "<option value='kg'>kg</option>" +
    "<option value='gram'>gram</option>" + 
    "<option value='lb'>lb</option>" +
    "<option value='oz'>oz</option></select><wbr>" +
    "<label>To</label><input type = 'text' min='0' value='0' class='userInput' id='weightsTo' disabled>" +
    "<select name='weightsToUnit'>" +
    "<option value='kg'>kg</option>" +
    "<option value='gram'>gram</option>" + 
    "<option value='lb'>lb</option>" +
    "<option value='oz'>oz</option></select></p><wbr>" +

    "<h3>Length</h3>" + 
    "<p><label>From</label><input type = 'number' min='0' value='0' class='userInput' id='lengthFrom' >" +
    "<select name='lengthFromUnit'>" +
    "<option value='m'>m</option>" + 
    "<option value='mile'>mile</option>" + 
    "<option value='ft'>ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='inch'>inch</option></select>" +
    "<label>To</label><input type = 'text' min='0' value='0' class='userInput disabled' id='lengthTo' disabled>" +
    "<select name='lengthToUnit'>" +
    "<option value='m'>m</option>" + 
    "<option value='mile'>mile</option>" + 
    "<option value='ft'>ft</option>" +
    "<option value='cm'>cm</option>" +
    "<option value='inch'>inch</option></select></p>" +

    "<h3>Area</h3>"  + 
    "<p><label>From</label><input type = 'number' min='0' value='0' class='userInput' id='areaFrom'>" +
    "<select name='areaFromUnit'>" +
    "<option value='sq.m'>sq.m</option>" + 
    "<option value='sq.ft'>sq.ft</option>" +
    "<option value='acre'>acre</option>" +
    "<option value='sq.km'>sq.km</option>" +
    "<option value='hectare'>hectare</option></select>" +
    "<label>To</label><input type = 'text' min='0' value='0' class='userInput disabled' id='areaTo' disabled>" +
    "<select name='areaToUnit'>" +
    "<option value='sq.m'>sq.m</option>" + 
    "<option value='sq.ft'>sq.ft</option>" +
    "<option value='acre'>acre</option>" +
    "<option value='sq.km'>sq.km</option>" +
    "<option value='hectare'>hectare</option></select></select></p>" +

    "<h3>Volume</h3>"  +  
    "<p><label>From</label><input type = 'number' min='0' value='0' class='userInput' id='volumeFrom' >" +
    "<select name='volumeFromUnit'>" +
    "<option value='cub.m'>cub.m</option>" + 
    "<option value='barrel'>barrel</option>" +
    "<option value='litre'>litre</option>" +
    "<option value='gallon'>gallon</option>" +
    "<option value='pint'>pint</option></select>" +
    "<label>To</label><input type = 'text' min='0' value='0' class='userInput disabled' id='volumeTo' disabled>" +
    "<select name='volumeToUnit'>" +
    "<option value='cub.m'>cub.m</option>" + 
    "<option value='barrel'>barrel</option>" +
    "<option value='litre'>litre</option>" +
    "<option value='gallon'>gallon</option>" +
    "<option value='pint'>pint</option></select></p><br>" +
    "<input type='reset' class='resetButton' value='Clear fields'/></form>" +
    
    "</div>";

    //Add event listeners to input fields
    //Weight
    document.getElementById("weightsFrom").addEventListener("keyup", processInput, false);
    document.getElementById("weightsFrom").addEventListener("change", processInput, false);

    //Add event listeners to weight unit type fields
    document.getElementsByName("weightsFromUnit")[0].addEventListener("change", (event) => {
        document.getElementById("weightsFrom").dispatchEvent(new Event("change") );
    }, false);
    document.getElementsByName("weightsToUnit")[0].addEventListener("change", (event) => {
        document.getElementById("weightsFrom").dispatchEvent(new Event("change"));
    }, false);

    //Length
    document.getElementById("lengthFrom").addEventListener("keyup", processInput, false);
    document.getElementById("lengthFrom").addEventListener("change", processInput, false);
    //Add event listeners to length unit type fields
    document.getElementsByName("lengthFromUnit")[0].addEventListener("change", (event) => {
        document.getElementById("lengthFrom").dispatchEvent(new Event("change") );
    }, false);
    document.getElementsByName("lengthToUnit")[0].addEventListener("change", (event) => {
        console.log(event);
        document.getElementById("lengthFrom").dispatchEvent(new Event("change"));
    }, false);

    //Area
    document.getElementById("areaFrom").addEventListener("keyup", processInput, false);
    document.getElementById("areaFrom").addEventListener("change", processInput, false);
    //Add event listeners to length unit type fields
    document.getElementsByName("areaFromUnit")[0].addEventListener("change", (event) => {
        document.getElementById("areaFrom").dispatchEvent(new Event("change") );
    }, false);
    document.getElementsByName("areaToUnit")[0].addEventListener("change", (event) => {
        console.log(event);
        document.getElementById("areaFrom").dispatchEvent(new Event("change"));
    }, false);

    
    //Volume
    document.getElementById("volumeFrom").addEventListener("keyup", processInput, false);
    document.getElementById("volumeFrom").addEventListener("change", processInput, false);
    //Add event listeners to length unit type fields
    document.getElementsByName("volumeFromUnit")[0].addEventListener("change", (event) => {
        document.getElementById("volumeFrom").dispatchEvent(new Event("change") );
    }, false);
    document.getElementsByName("volumeToUnit")[0].addEventListener("change", (event) => {
        console.log(event);
        document.getElementById("volumeFrom").dispatchEvent(new Event("change"));
    }, false);
};

//Function processing user input when field are changed
const processInput = (event) => {
    //Get id of the adjacent field that will be used as output field 
    let inputValue =  event.currentTarget.value;
    let outputValue = 0;
    let inputFieldId = event.currentTarget.id;
    let outputFieldId = (inputFieldId.includes('From')) ? inputFieldId.replace("From", "To") : inputFieldId.replace("To", "From");

    //Check if input is not a number or negative,
    //only after user started typing something, i.e. not when they just pressed backspace (keyCode = 8) or del (keyCode 46) keys
    if (isNaN(parseInt(inputValue)) && (event.keyCode != 8 && event.keyCode != 46)) {        
        window.alert("Input values cannot be negative, blank or contain letters! Please check your input ");
        event.currentTarget.value = 0;
        document.getElementById(outputFieldId).value = 0;
        return;
    }

    //Get units value selected by user
    let inputUnit = document.getElementsByName(inputFieldId + "Unit")[0].value;
    let outputUnit = document.getElementsByName(outputFieldId + "Unit")[0].value;

    outputValue = calculateOutput(inputValue, inputUnit, outputUnit);
    document.getElementById(outputFieldId).value = outputValue;
};


//Function used to calculate output based on user input
const calculateOutput = (inputValue, inputUnit, outputUnit) => {
    let outputValue;

    switch(inputUnit) {
        //Weight
        case "kg" :
            if (outputUnit === "kg") {
                outputValue = inputValue;
            }
            else if (outputUnit === "gram") {
                outputValue = 1000 * inputValue;
            }
            else if (outputUnit === "lb") {
                outputValue = 2.20462 * inputValue;
            }
            else if (outputUnit === "oz") {
                outputValue = 35.274 * inputValue;
            }
            break;
        case "lb" :
            if (outputUnit === "kg") {
                outputValue = 2.204 * inputValue;
            }
            else if (outputUnit === "gram") {
                outputValue = 2.204 * inputValue * 1000;
            }
            else if (outputUnit === "lb") {
                outputValue = inputValue;
            }
            else if (outputUnit === "oz") {
                outputValue = 16 * inputValue;
            }    
            break;
        case "gram" :
            if (outputUnit === "kg") {
                outputValue = inputValue/1000;
            }
            else if (outputUnit === "gram") {
                outputValue = inputValue;
            }
            else if (outputUnit === "lb") {
                outputValue = 0.00220462 * inputValue;
            }
            else if (outputUnit === "oz") {
                outputValue = 0.035274 * inputValue;
            }    
            break;
        case "oz" :
            if (outputUnit === "kg") {
                outputValue = 0.0283495 * inputValue;
            }
            else if (outputUnit === "gram") {
                outputValue = 28.3495 * inputValue;
            }
            else if (outputUnit === "lb") {
                outputValue = inputValue/16;
            }
            else if (outputUnit === "oz") {
                outputValue = inputValue;
            }    
            break;
        //Length
        case "m" :
            if (outputUnit === "m") {
                outputValue =  inputValue;
            }
            else if (outputUnit === "mile") {
                outputValue = 0.000621371 * inputValue;
            }
            else if (outputUnit === "ft") {
                outputValue = 3.28084 * inputValue;
            }
            else if (outputUnit === "cm") {
                outputValue = 100 * inputValue;
            } 
            else if (outputUnit === "inch") {
                outputValue = 39.3701 * inputValue;
            }        
            break;
        case "mile" :
            if (outputUnit === "m") {
                outputValue =  1609.34 * inputValue;
            }
            else if (outputUnit === "mile") {
                outputValue = inputValue;
            }
            else if (outputUnit === "km") {
                outputValue = 1.609 * inputValue;
            }
            else if (outputUnit === "ft") {
                outputValue = 5280 * inputValue;
            }
            else if (outputUnit === "cm") {
                outputValue = 160934 * inputValue;
            } 
            else if (outputUnit === "inch") {
                outputValue = 63360 * inputValue;
            }        
            break;
        case "ft" :
            if (outputUnit === "m") {
                outputValue =  0.3048 * inputValue;
            }
            else if (outputUnit === "mile") {
                outputValue = 0.000189394 * inputValue;
            }
            else if (outputUnit === "km") {
                outputValue = 0.0003048 * inputValue;
            }
            else if (outputUnit === "ft") {
                outputValue =  inputValue;
            }
            else if (outputUnit === "cm") {
                outputValue = 30.48 * inputValue;
            } 
            else if (outputUnit === "inch") {
                outputValue = 12 * inputValue;
            } 
            break;
        case "cm" :
            if (outputUnit === "m") {
                outputValue =  inputValue/100;
            }
            else if (outputUnit === "mile") {
                outputValue = 6.2137 * inputValue/1000000;
            }
            else if (outputUnit === "km") {
                outputValue = 0.001 * inputValue;
            }
            else if (outputUnit === "ft") {
                outputValue =  0.0328084 * inputValue;
            }
            else if (outputUnit === "cm") {
                outputValue = inputValue;
            } 
            else if (outputUnit === "inch") {
                outputValue = 0.393701 * inputValue;
            } 
            break;
        case "inch" :
            if (outputUnit === "m") {
                outputValue =  0.0254 * inputValue;
            }
            else if (outputUnit === "mile") {
                outputValue = 1.5782 * inputValue/100000
            }
            else if (outputUnit === "km") {
                outputValue = 2.54 * inputValue/100000;
            }
            else if (outputUnit === "ft") {
                outputValue =  0.0833333 * inputValue;
            }
            else if (outputUnit === "cm") {
                outputValue = 2.54 * inputValue;
            } 
            else if (outputUnit === "inch") {
                outputValue = inputValue;
            } 
            break;
        //Area
        case "sq.m" :
            if (outputUnit === "sq.m") {
                outputValue =  inputValue;
            }
            else if (outputUnit === "sq.ft") {
                outputValue = 10.7639 * inputValue;
            }
            else if (outputUnit === "sq.km") {
                outputValue = inputValue/1000000;
            }
            else if (outputUnit === "acre") {
                outputValue =  0.000247105 * inputValue;
            }
            else if (outputUnit === "hectare") {
                outputValue = 0.0001 * inputValue;
            } 
            break;
        case "sq.ft" :
            if (outputUnit === "sq.m") {
                outputValue =  0.092903 * inputValue;
            }
            else if (outputUnit === "sq.ft") {
                outputValue = inputValue;
            }
            else if (outputUnit === "sq.km") {
                outputValue = 9.2903 * inputValue/100000000;
            }
            else if (outputUnit === "acre") {
                outputValue =  2.9568 * inputValue/100000;
            }
            else if (outputUnit === "hectare") {
                outputValue = 9.2903 * inputValue/100000;
            } 
            break;
        case "sq.km" :
            if (outputUnit === "sq.m") {
                outputValue =  1000000 * inputValue;
            }
            else if (outputUnit === "sq.ft") {
                outputValue = 1.076 * inputValue * 10000000;
            }
            else if (outputUnit === "sq.km") {
                outputValue = inputValue;
            }
            else if (outputUnit === "acre") {
                outputValue =  247.105 * inputValue;
            }
            else if (outputUnit === "hectare") {
                outputValue = 100 * inputValue;
            } 
            break;
        case "acre" :
            if (outputUnit === "sq.m") {
                outputValue =  4046.86 * inputValue;
            }
            else if (outputUnit === "sq.ft") {
                outputValue = 43560 * inputValue;
            }
            else if (outputUnit === "sq.km") {
                outputValue = 0.00404686 * inputValue;
            }
            else if (outputUnit === "acre") {
                outputValue =  inputValue;
            }
            else if (outputUnit === "hectare") {
                outputValue = 0.404686 * inputValue;
            } 
            break;
        case "hectare" :
            if (outputUnit === "sq.m") {
                outputValue =  10000 * inputValue;
            }
            else if (outputUnit === "sq.ft") {
                outputValue = 107639 * inputValue;
            }
            else if (outputUnit === "sq.km") {
                outputValue = 0.01 * inputValue;
            }
            else if (outputUnit === "acre") {
                outputValue =  2.47105 * inputValue;
            }
            else if (outputUnit === "hectare") {
                outputValue = inputValue;
            } 
            break;
        //Volume
        case "cub.m" :
            if (outputUnit === "cub.m") {
                outputValue =  inputValue;
            }
            else if (outputUnit === "barrel") {
                outputValue = 6.28981 * inputValue;
            }
            else if (outputUnit === "litre") {
                outputValue = inputValue * 1000;
            }
            else if (outputUnit === "gallon") {
                outputValue =  264.172 * inputValue;
            }
            else if (outputUnit === "pint") {
                outputValue = 2113.38 * inputValue;
            } 
            break;

        case "barrel" :
          if (outputUnit === "cub.m") {
              outputValue =  0.158987 * inputValue;
          }
          else if (outputUnit === "barrel") {
              outputValue = inputValue;
          }
          else if (outputUnit === "litre") {
              outputValue = inputValue * 159;
          }
          else if (outputUnit === "gallon") {
              outputValue =  35 * inputValue;
          }
          else if (outputUnit === "pint") {
              outputValue = 336 * inputValue;
          } 
          break;
        case "litre" :
          if (outputUnit === "cub.m") {
              outputValue =  0.001 * inputValue;
          }
          else if (outputUnit === "barrel") {
              outputValue = inputValue / 159;
          }
          else if (outputUnit === "litre") {
              outputValue = inputValue;
          }
          else if (outputUnit === "gallon") {
              outputValue =  0.264172 * inputValue;
          }
          else if (outputUnit === "pint") {
              outputValue = 2.11 * inputValue;
          } 
          break;
        case "gallon" :
          if (outputUnit === "cub.m") {
              outputValue =  0.00378541 * inputValue;
          }
          else if (outputUnit === "barrel") {
              outputValue = inputValue / 159;
          }
          else if (outputUnit === "litre") {
              outputValue = 3.78541 * inputValue;
          }
          else if (outputUnit === "gallon") {
              outputValue =  inputValue;
          }
          else if (outputUnit === "pint") {
              outputValue = 8 * inputValue;
          } 
          break;
        case "pint" :
          if (outputUnit === "cub.m") {
              outputValue =  0.000473176 * inputValue;
          }
          else if (outputUnit === "barrel") {
              outputValue = inputValue * 0.00297619;
          }
          else if (outputUnit === "litre") {
              outputValue = 0.473176 * inputValue;
          }
          else if (outputUnit === "gallon") {
              outputValue =  0.125 * inputValue;
          }
          else if (outputUnit === "pint") {
              outputValue = inputValue;
          } 
          break;
    }

    return outputValue;
};