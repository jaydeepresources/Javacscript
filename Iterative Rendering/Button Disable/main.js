var phones = ["apple", "samsung", "one plus"];

function mapPhonesToList() {
  var listStr = "";
  for (var i = 0; i < phones.length; i++) {
    listStr +=
      '<li class="list-group-item d-flex justify-content-between align-items-center">' +
      '<span class="lead">' +
      phones[i] +
      "</span>" +
      '<span><button class="btn btn-danger material-icons" onclick="deletePhone(' +
      i +
      ')">clear</button></span>' +
      "</li>";
  }
  document.getElementById("phonesList").innerHTML = listStr;
}

function deletePhone(index) {
  phones.splice(index, 1);
  mapPhonesToList();
}

function addPhone() {
  var newPhone = document.getElementById("newPhoneText").value;
  phones.push(newPhone);
  mapPhonesToList();
  document.getElementById("newPhoneText").value = "";
}

// func for oninput
// get value dynamically and check for length
// if length is > 0 enable or else disable

function textChanged() {
  var len = document.getElementById("newPhoneText").value.length;
  if (len == 0) document.getElementById("saveBtn").disabled = true;
  else if (len > 0) document.getElementById("saveBtn").disabled = false;
}
