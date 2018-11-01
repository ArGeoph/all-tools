    //Check if entered values are negative, and alert user if it so, zero input values, and return from function
    if (inputValue < 0 ||  inputValue === "") {
        window.alert("Input values cannot be negative, blank or contain letters! Check your input ");
        event.currentTarget.value = 0;
        return;
    }
