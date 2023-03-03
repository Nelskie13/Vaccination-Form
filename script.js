//list of Objects
const form=document.forms.vaccInfo;
const firstName=form.firstname;
const middleName=form.middlename;
const lastName=form.lastname;
const birthDay=form.birthday;
const Email=form.email;
const region=form.regionList;
const Province=form.province;
const Barangay=form.barangay;
const Street=form.street;
const Gender=form.gender;
const otherGender=form.otherField;
const VaccListBrand=form.vaccBrandList;
const VaccDate=form.vaccDate;
const VaccSite=form.vaccSite;
const getSecVacc=form.ifsecvacc;
const VaccListBrand2=form.vaccBrandList2;
const VaccDate2=form.vaccDate2;
const VaccSite2=form.vaccSite2;


form.addEventListener('submit', function(event){
    event.preventDefault();

    if (!firstName.value){
        setError(firstName, 'Required in this field');
        return;
    }
    if  (!middleName.value){
        setError(middleName, 'Required in this field');
        return;
    }
    if  (!lastName.value){
        setError(lastName, 'Required in this field');
        return;
    }
    if  (!Email.value){
        setError(Email, 'Required in this field')
        return;
    }
    if  (!Province.value){
        setError(Province, 'Required in this field');
        return;
    }
    if  (!Barangay.value){
        setError(Barangay, 'Required in this field');
        return;
    }
    if (!Street.value){
        setError(Street, 'Required in this field');
        return;
    }
    console.log('Name: ', firstName.value);
    console.log('Middle Name: ', middleName.value);
    console.log('Last Name: '+lastName.value);
    console.log('Birthday: '+birthDay.value);
    console.log('Email: '+Email.value);
    console.log('Region: '+region.value);
    console.log('Province: '+Province.value);
    console.log('Barangay: '+Barangay.value);
    console.log('Street: '+Street.value);
    console.log('Gender: '+Gender.value);
    console.log('Other Gender: '+otherGender.value);
    console.log('Vaccination Dose 1 Brand: '+VaccListBrand.value);
    console.log('Vaccination Dose 1 Date: '+VaccDate.value);
    console.log('Vaccination Dose 1 Site: '+VaccSite.value);
    console.log('Did you already get your second vaccination?: '+getSecVacc.value);
    console.log('Second Vaccination Dose 2 Brand: '+VaccListBrand2.value);
    console.log('Second Vaccination Dose 2 Date: '+VaccDate2.value);
    console.log('Second Vaccination Dose 2 Site: '+VaccSite2.value);
    alert('Succesfully submitted!');
})
function setError(field, errorMsg){
    field.style.borderColor='red';
    document.getElementById('error-'+field.name).innerText=errorMsg;
}

//THE VALUE OF THE TEXTBOXES USING EACH ID'S
function submitInput(){ // FUNCTION FOR SUBMIT BUTTON
const FirstNameValue=document.getElementById('firstnametxt').value;
const MiddleNameValue=document.getElementById('middlenametxt').value;
const LastNameValue=document.getElementById('lastnametxt').value;
const BirthdayValue=document.getElementById('birthdaytxt').value;
const EmailValue=document.getElementById('emailtxt').value;
const RegionValue=document.getElementById('regiontxt').value;
const ProvinceValue=document.getElementById('provincetxt').value;
const BarangayValue=document.getElementById('barangaytxt').value;
const StreetValue=document.getElementById('streettxt').value;
const genderSelection=document.getElementsByName('gender');
const otherGenderOpt=document.getElementById('otherOption').value;
const VaccBrandListValue=document.getElementById('brandlisttxt').value;
const VaccDateValue=document.getElementById('vaccdatetxt').value;
const VaccSiteValue=document.getElementById('vaccsitetxt').value;
const DidGetSecVaccValue=document.getElementsByName('ifsecvacc');
const VaccBrandListValue2=document.getElementById('vaccBrandDose2txt').value;
const VaccDateValue2=document.getElementById('vaccdate2txt').value;
const VaccSiteValue2=document.getElementById('vaccsite2txt').value;
//Displays the elements on the pages
document.getElementById('DisplayInputContainer').style.display="block";
document.getElementById('content').style.display="block";
document.getElementById('displayFullname').innerHTML='Your Full Name is:'+" "+FirstNameValue+" "+MiddleNameValue+" "+LastNameValue;
document.getElementById('dateOfBirth').innerHTML='Your Date of Birth: '+BirthdayValue;
document.getElementById('emailAddress').innerHTML='Your Email Address: '+EmailValue;
document.getElementById('regionLoc').innerHTML='Region: '+ RegionValue;
document.getElementById('provinceLoc').innerHTML='Province: '+ProvinceValue;
document.getElementById('barangayLoc').innerHTML='Barangay: '+BarangayValue;
document.getElementById('streetNames').innerHTML='Street Name: '+StreetValue;
for(i = 0; i < genderSelection.length; i++){
    if(genderSelection[i].checked)
    document.getElementById('gender').innerHTML='Gender: '+ genderSelection[i].value;
}
document.getElementById('otherGender').innerHTML='Other Gender: '+otherGenderOpt;
document.getElementById('vaccineDose1Brand').innerHTML='Vaccination Dose 1: '+VaccBrandListValue;
document.getElementById('vaccineDose1Date').innerHTML='Vaccination Dose 1 Date: '+VaccDateValue;
document.getElementById('vaccineDose1Site').innerHTML='Vaccination Dose 1 Site: '+VaccSiteValue;
for(i = 0; i < DidGetSecVaccValue.length; i++){
    if(DidGetSecVaccValue[i].checked)
    document.getElementById('vaccinationsQA').innerHTML='Did you already get your second vaccination?: '+ DidGetSecVaccValue[i].value;
}
document.getElementById('vaccineDose2Brand').innerHTML='Vaccination Dose 2: '+VaccBrandListValue2;
document.getElementById('vaccineDose2Date').innerHTML='Vaccination Dose 2 Date: '+VaccDateValue2;
document.getElementById('vaccineDose2Site').innerHTML='Vaccination Dose 2 Site: '+VaccSiteValue2;
}
//FUNCTIONS FOR BUTTONS
function resetInput(){
    document.getElementById('DisplayInputContainer').style.display="none";
    document.getElementById('getOtherGender').style.display="none";
    document.getElementById('options').style.display="none";
    
}
function clickMale(){
    if(document.getElementById('maleClk').checked){
        document.getElementById('getOtherGender').style.display="none";
    }
}
function clickFemale(){
    if(document.getElementById('femaleClk').checked){
        document.getElementById('getOtherGender').style.display="none";
    }
}
function clickOthers(){
    if(document.getElementById('otherClk').checked){
        document.getElementById('getOtherGender').style.display="block";
}
}
function clickYes(){
    if(document.getElementById('YesValue').checked){
        document.getElementById('options').style.display="block";
    }
}
function clickNo(){
    if(document.getElementById('NoValue').checked){
        document.getElementById('options').style.display="none";
    }
}
