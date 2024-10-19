//create object

 let data=[
   {id:1, name:"smith", email:"smith@gmail.com",code:54},
     {id:2, name:"anu", email:"anu@gmail.com",code:55}

]

// create function to read data

function readAll(){

    // write the data to the local storage
    localStorage.setItem("object", JSON.stringify(data));   // local storage accept json format data so convert it into json format

    // first we get table body to write the data in table , for that
    var tabledata=document.querySelector(".data_table");


    // read data
     var object= localStorage.getItem("object");

     // to change into JSON format

     var objectdata=JSON.parse(object);

     var elements ="";


     objectdata.map(record =>{
        elements+=
         `<tr>
          <td>${record.name}</td>   
          <td>${record.email}</td>
          <td>${record.code}</td>
          

          <td>
          <button class="edit" onclick={edit(${record.id})}>Edit</button>
          <button class="delete" onclick={delet(${record.id})}>Delete</button>
          </td>
      </tr>` 
     })

     // if edit the contents then it add to table

      tabledata.innerHTML= elements;
}


//delete

function delet(id){
    data = data.filter(rec => rec.id !==id);
    readAll();
}



//create

// when you click add button , dispaly the form for create
function create(){
    document.querySelector(".create_form").style.display="block";
    document.querySelector(".add_div").style.display = "none";
    document.querySelector(".update_form").style.display = "none";


}

//add
// to add new created details in table

function add(){
    var name= document.querySelector(".name").value;
    var email=document.querySelector(".email").value;
    var code=document.querySelector(".code").value;

    // create new object

    var newObj ={id:3, name:name,email:email,code:code};

    //push object details to data
    data.push(newObj)

    document.querySelector(".create_form").style.display="none";
    document.querySelector(".add_div").style.display="block";

    // read
    readAll();

}

//edit

function edit(id){
    document.querySelector('.update_form').style.display="block";  // show update form

    // to get the value

    var obj=data.find(rec => rec.id===id);                 // find the contact by id
    document.querySelector('.uname').value= obj.name;
    document.querySelector('.uemail').value= obj.email;
    document.querySelector('.id').value= obj.id;
    document.querySelector('.ucode').value= obj.code;
      


}


//update
function update(){
   var id=parseInt(document.querySelector('.id').value);   // get id from hidden field
   var name=document.querySelector('.uname').value;
   var email=document.querySelector('.uemail').value;
   var code=document.querySelector('.ucode').value;

   // find index

   var index= data.findIndex(rec => rec.id ===id);

   //after finding index change the data
   data[index]={id, name, email, code};

   document.querySelector('.update_form').style.display="none";
   readAll();


}



