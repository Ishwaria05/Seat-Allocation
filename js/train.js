function validate(){
    var nameEl = document.getElementById("name"); 
    var nameerr = document.getElementById('name_error');
    if(nameEl.value == ''){
        nameerr.innerHTML = "name is req";
        nameEl.style.borderColor = 'red';
        return '';
    }
    else{
        nameerr.innerHTML = "";
        nameEl.style.borderColor = 'green';
    
    }
    var PhonenumberEl = document.getElementById("Phonenumber");
    var Phonenumbererr = document.getElementById('Phonenumber_error');
   if(PhonenumberEl.value.length==''){
    Phonenumbererr.innerHTML="number is required";
    PhonenumberEl.style.borderColor = 'red';
    return'';
   }
   else if(PhonenumberEl.value.length  !=10){
    Phonenumbererr.innerHTML="Mobile No is not valid";
    PhonenumberEl.style.borderColor = 'red';
    return'';
   }
    else
    {
    Phonenumbererr.innerHTML = "mobile No is  valid";
    PhonenumberEl.style.borderColor = 'green';
}
    var aadharEl = document.getElementById("aadhar");  
    var aadharerr = document.getElementById('aadhar_error');
    if(aadharEl.value == ''){
        aadharerr.innerHTML = "aadharno is req";
        aadharEl.style.borderColor = 'red';
        return '';
    } else if(aadharEl.value.length  !=12){
        aadharerr.innerHTML="aadhar No is not valid";
        aadharEl.style.borderColor = 'red';
        return'';
       }
    else{
        aadharerr.innerHTML = "";
        aadharEl.style.borderColor = 'green';
    }
    var ageEl = document.getElementById("age");  
    var ageerr = document.getElementById('age_error');
    if(ageEl.value == ''){
    
        ageerr.innerHTML = "age is req";
        ageEl.style.borderColor = 'red';
        return '';
    } else if(ageEl.value.length  !=2){
        ageerr.innerHTML="age No is not valid";
        ageEl.style.borderColor = 'red';
        return'';
    }
    else{
        ageerr.innerHTML = "";
        ageEl.style.borderColor = 'green';
    }
    var journeyfromEl = document.getElementById("journeyfrom"); 
    var journeyfromerr = document.getElementById('journeyfrom_error');
    if(journeyfromEl.value == ''){
        journeyfromerr.innerHTML = "journeyfrom is req";
        journeyfromEl.style.borderColor = 'red';
        return '';
    }
    else{
        journeyfromerr.innerHTML = "";
        journeyfromEl.style.borderColor = 'green';
    }
    var journeytoEl = document.getElementById("journeyto"); 
    var journeytoerr = document.getElementById('journeyto_error');
    if(journeytoEl.value == ''){
    
        journeytoerr.innerHTML = "journeyto is req";
        journeytoEl.style.borderColor = 'red';
        return '';
    }
    else{
        journeytoerr.innerHTML = "";
        journeytoEl.style.borderColor = 'green';
    }
    var trainEl = document.getElementById("train"); 
    var trainerr = document.getElementById('train_error');
    if(trainEl.value == ''){
    
        trainerr.innerHTML = "journeyto is req";
        trainEl.style.borderColor = 'red';
        return '';
    }
    else{
        trainerr.innerHTML = "";
        trainEl.style.borderColor = 'green';
    }
    var DateEl = document.getElementById("Date"); 
    var Dateerr = document.getElementById('Date_error');
    if(DateEl.value == ''){
    
        Dateerr.innerHTML = "journeyto is req";
        DateEl.style.borderColor = 'red';
        return '';
    }
    else{
        Dateerr.innerHTML = "";
        DateEl.style.borderColor = 'green';
    }
    const ticket = {
          Name :nameEl.value,
          Phone : PhonenumberEl.value,
          aadhar : aadharEl.value,
          age: ageEl.value,
          journeyfrom : journeyfromEl.value,
          journeyto : journeytoEl.value,
          date:DateEl.value,
          train:trainEl.value,
    };
    console.log(ticket);  
    let bookingarr=JSON.parse(localStorage.getItem('Detail')) || [];
    bookingarr.push(ticket);
    console.log(bookingarr);
    localStorage.setItem('Detail',JSON.stringify(bookingarr));   
    window.location.href="./table.html"
}

