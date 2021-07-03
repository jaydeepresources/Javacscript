var phones = ["apple", "samsung", "one plus"];

function mapPhonesToList() {
  var listStr = "";
  for (var i = 0; i < phones.length; i++) {
    listStr += '<li class="list-group-item">' + phones[i] + "</li>";
  }
  document.getElementById("phonesList").innerHTML = listStr;
}