let captcha = false;

function beforeSubmit(event){
    if(captcha){
        let opDate = document.getElementById("op_lead_date");
        let ipDate = document.getElementById("ip_lead_date"); //Here the input date is a string
        //So we need to convert it into date fromat as per the locale of the user who is the default lead owner
        //To check the default lead owner, go to web-to-lead under setup
        //To check locale, run code, Sytem.debug(userInfo.getLocale());

        let formattedDate = new Date(ipDate.value).toLocaleDateString("en-IN");
        opDate.value = formattedDate;
    }else{
        alert("Please check captcha to proceed");
        event.preventDefault();
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == ""){
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
}
setInterval(timestamp, 500);


function captchaChecked(){
    captcha = true;
}