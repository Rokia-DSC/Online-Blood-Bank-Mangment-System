
// function handleSubmit () {
    // const name = document.getElementById('name').value;
    // const surname = document.getElementById('surname').value;
    // const firstname= document.getElementById('fmane').value;
    // const lastname= document.getElementById('lname').value;
    // const ssn= document.getElementById('nid').value;
    // const mail= document.getElementById('email').value;
    // const tele= document.getElementById('phone').value;
    // const birthDate= document.getElementById('bdate').value;
    // const kg= document.getElementById('weight').value;
    // const location= document.getElementById('address').value;

    
    // sessionStorage.setItem("NAME", name);
    // sessionStorage.setItem("SURNAME", surname);
    // sessionStorage.setItem("FirstName", firstname);
    // sessionStorage.setItem("LastName", ssn);
    // sessionStorage.setItem("E-mail", mail);
    // sessionStorage.setItem("PhoneNum", tele);
    // sessionStorage.setItem("BirthDate", birthDate);
    // sessionStorage.setItem("Weight", kg);
    // sessionStorage.setItem("Address", location);

//     return;
// }

// const btn = document.getElementById('Abtn');
// btn.addEventListener('click', () => {
//     const data = localStorage.getItem('users')
//     const users = JSON.parse(data);
//     document.getElementById('show').innerHTML=''

// })

// function myfunc(event){
//     event.preventDefault();

//     var firstname= document.getElementById('fmane').value;
//     var lastname= document.getElementById('lname').value;
//     var ssn= document.getElementById('nid').value;
//     var mail= document.getElementById('email').value;
//     var tele= document.getElementById('phone').value;
//     var birthDate= document.getElementById('bdate').value;
//     var kg= document.getElementById('weight').value;
//     var location= document.getElementById('address').value;


//     localStorage.setItem("FirstName", firstname);
//     localStorage.setItem("LastName", ssn);
//     localStorage.setItem("E-mail", mail);
//     localStorage.setItem("PhoneNum", tele);
//     localStorage.setItem("BirthDate", birthDate);
//     localStorage.setItem("Weight", kg);
//     localStorage.setItem("Address", location);


// }



var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
//var list9=[];

var n=1;
var x=0;

function Addrrow(){

    var AddRown=document.getElementById('show');
    var NewRow=AddRown.inserRow(n);

    list1[x]= document.getElementById('fmane').value;
    list2[x]= document.getElementById('lname').value;
    list3[x]= document.getElementById('nid').value;
    list4[x]= document.getElementById('email').value;
    list5[x]= document.getElementById('phone').value;
    list6[x]= document.getElementById('bdate').value;
    list7[x]= document.getElementById('weight').value;
    list8[x]= document.getElementById('address').value;
    //list9[x]= document.getElementsByName('gender').chacked;

    var cel1 =NewRow.insertCell(0);
    var cel2 =NewRow.insertCell(1);
    var cel3 =NewRow.insertCell(2);
    var cel4 =NewRow.insertCell(3);
    var cel5 =NewRow.insertCell(4);
    var cel6 =NewRow.insertCell(5);
    var cel7 =NewRow.insertCell(6);
    var cel8 =NewRow.insertCell(7);
    var cell9 = NewRow.insertCell(8);
    var cell10 = NewRow.insertCell(10);
    //var cel9 =NewRow.insertCell(8);

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    cel5.innerHTML=list5[x];
    cel6.innerHTML=list6[x];
    cel7.innerHTML=list7[x];
    cel8.innerHTML=list8[x];
    cell9.innerHTML='<button type="button"  onclick="productDelete(this);"class="btn">X</button>';
    cell10.innerHTML='<button type="button"  onclick="productDelete(this);"class="btn">X</button>';
    //cel9.innerHTML=list9[x];

    n++;
    x++;
    
}
function productDelete() {
    document.getElementById("show").deleteRow(1);
}