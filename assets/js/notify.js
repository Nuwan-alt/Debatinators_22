const inpNumber = document.getElementById('phone');
const inplName = document.getElementById('lname');
const inpfName = document.getElementById('fname');
const inpEmail = document.getElementById('email');
const inpdate = document.getElementById('bday');
const inpuni = document.getElementById('uni');


function showNotification(msg){
    var note = document.getElementById("note");
    note.innerHTML = msg;
    note.style.display = "block";
   // setTimeout(hideNotification(),3000);
    setTimeout(function(){
    
      document.getElementById("note").style.display = "none";
    
    }, 4000);
    
  }

  function nameVallast() {

    var regName = new RegExp('^[-a-zA-Z ]+$');
    if (inplName.value != "") {
        if (!inplName.value.match(regName)) {
            showNotification("Last name can only contain English letters");
            return false;
        } else {
            return true;
        }
    } else {
        showNotification("Last Name can't be blank");
        return false;
    }

}

function emailVal() {

    var regName = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$");

    if (inpEmail.value != "") {
        if (inpEmail.value.match(regName)) {
            return true;

        } else {
            showNotification("Enter a valid email");
            return false;
        }
    } else {
        showNotification("Email field can't be blank");
        return false;
    }
}

  function nameValfirst() {

    var regName = new RegExp('^[-a-zA-Z ]+$');
    if (inpfName.value != "") {
        if (!inpfName.value.match(regName)) {
            showNotification("First name can only contain English letters");
            return false;
        } else {
            return true;
        }
    } else {
        showNotification("First Name can't be blank");
        return false;
    }

}

  function mobileVal() {
    var regName = new RegExp("^[0]{1}[0-9]{9}$");


    if (inpNumber.value.match(regName)) {

        return true;


    } else {



        if (inpNumber.value != "") {


            if (((inpNumber.value).substr(0, 1) != "0")) {
                showNotification("First digit should be 0");
                return false;
            } else if (inpNumber.value.length == 10) {
                showNotification("The contact number should only consist of digits");
                return false;

            } else {
                showNotification("Contact Number must have 10 digits");
                return false;
            }



        } else {

            showNotification("Number field can't be blank");
            return false;

        }

    }
}

function doCalculate() {
    
    var nic = document.getElementById('nic').value.trim();
    if(nic == ""){
        showNotification("Enter Your NIC ");
        return false;

    }
    var pattern = /[0-9]{9}[V|X|v|x]/;
    var newId = false;
    var NIC;
    if (nic.length == 12) {

        NIC = nic.substr(2, 5) + nic.substr(8, 12);
        nic = NIC + "v";

    }
    if (!pattern.test(nic)) {
        showNotification("Invalid NIC");
        return false;
    }else{
        return true;
    }   
}

function uniVali(){
    if (inpuni.value == ""){
        showNotification("Enter Your University ");
        return false;
    }else{
        return true;
    }

}

function dateVali(){
    if (inpdate.value == ""){
        showNotification("Enter Your Birthday ");
        return false;
    }else{
        return true;
    }

}


