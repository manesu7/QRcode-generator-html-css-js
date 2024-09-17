const message = document.getElementById("message");
message.innerHTML = "";

let imgBox = document.getElementById("qrImage-container");
     let qrImage = document.getElementById("qrImage");
     let qrText = document.getElementById("qrText");

function generateQRcode(){

    if(qrText.value.length > 0){
         qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
       }

  try {
    if(qrText.value.length > 0) throw "correct";
    if(qrText.value.length == 0) throw "empty, write something";
}
catch(err) {
   message.innerHTML = "Input is " + err;
  }
}