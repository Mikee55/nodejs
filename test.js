function greet(callBack) {
  console.log("Halo");
  var data = "Mike";
  callBack(data);
}

greet(function (data) {
  console.log(`first Callback ${data}`);
});
