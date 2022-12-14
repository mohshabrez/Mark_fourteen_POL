const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercentage = ((loss*100) /initial)/quantity;
        outputBox.innerText = `Hey the loss is ${loss} and the percent is ${lossPercentage}%`;

    }
    else if(current > initial){
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercentage = ((profit * 100) / initial)/quantity;
       outputBox.innerText =  `Hey the profit is ${profit} and the percent is ${profitPercentage}% for each stock`;

    }
    else{
        outputBox.innerText = `No Pain No gain`;

    }
}

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;
    if(ip >=1 && qty >=1 && curr >=1){
        calculateProfitAndLoss(ip, qty, curr);
    }
    else{
        outputBox.innerText = `Invalid Data entered!!!`
    }
    
}

// function showOutput(message, status){
//     outputBox.innerHTML = message;
// }

submitButton.addEventListener("click", submitHandler)