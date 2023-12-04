var beverages = ["tea", "coffee", "milk"]

function mapBeveragesToList() {
    var listString = ""
    for (let i = 0; i < beverages.length; i++) {
        listString +=
            `<li class="list-group-item d-flex justify-content-between align-items-center">
            <div id="dataDiv${i}">
                <span id="beverageSpan${i}" class="lead">${beverages[i]}</span>
            </div>    
            
                <div>
                    <button class="btn btn-warning bi bi-pencil" onclick="editBeverage(${i})"></button>
                    <button class="btn btn-danger bi bi-x-lg" onclick="deleteBeverage(${i})"></button>
                </div>
             </li>`
    }
    document.getElementById("beveragesList").innerHTML = listString
}

function deleteBeverage(index) {
    beverages.splice(index, 1)
    mapBeveragesToList()
}

function addBeverage() {
    var newBeverage = document.getElementById("textBox").value
    if (newBeverage === "")
        return
    beverages.push(newBeverage)
    // beverages.unshift(newBeverage)
    document.getElementById("textBox").value = ""
    document.getElementById("addButton").disabled = true
    mapBeveragesToList()
}

function editBeverage(index) {
    document.getElementById(`beverageSpan${index}`).style.display = "none"
    document.getElementById(`dataDiv${index}`).innerHTML =
        `<span class="d-flex" id="editSpan${index}">
            <input id="editTextBox${index}" class="form-control me-1" type="text" value="${beverages[index]}">
            <button class="btn btn-primary" onclick="saveEditedBeverage(${index})">save</button>
        </span>`
}

function saveEditedBeverage(index) {
    var editedValue = document.getElementById(`editTextBox${index}`).value
    beverages[index] = editedValue
    mapBeveragesToList()
}

function textChanged() {
    var textData = document.getElementById("textBox").value

    if (textData === "") {
        document.getElementById("addButton").disabled = true
    }

    else if (textData !== "") {
        document.getElementById("addButton").disabled = false
    }
}