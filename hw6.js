function add() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        document.getElementById("result").textContent = `Result: ${input1} + ${input2} = ${input1 + input2}`;
    } else {
        document.getElementById("result").textContent = "Error: Input1 or Input2 is empty, please enter a number.";
    }
}

function subtract() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        document.getElementById("result").textContent = `Result: ${input1} - ${input2} = ${input1 - input2}`;
    } else {
        document.getElementById("result").textContent = "Error: Input1 or Input2 is empty, please enter a number.";
    }
}

function multiply() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        document.getElementById("result").textContent = `Result: ${input1} * ${input2} = ${input1 * input2}`;
    } else {
        document.getElementById("result").textContent = "Error: Input1 or Input2 is empty, please enter a number.";
    }
}

function divide() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        if (input2 !== 0) {
            document.getElementById("result").textContent = `Result: ${input1} / ${input2} = ${input1 / input2}`;
        } else {
            document.getElementById("result").textContent = `Input1 = ${input1}<br>Input2 = ${input2}<br>Input1 / Input2 = ${input1} / ${input2} = Infinity`;
        }
    } else {
        document.getElementById("result").textContent = "Error: Input1 or Input2 is empty, please enter a number.";
    }
}

function clearResult() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").textContent = "Result:";
}
