//-----------------------------------Variables-----------------------------------//
const divMostrarInfoVideos = document.getElementById('info1');
const divMostrarInfoCategorias = document.getElementById("info2");
const divMostrarInfoUser= document.getElementById("info3");
const mostrarCategoria = document.getElementById("DataList");

const formCrearCategorias= document.getElementById("formCrearCategorias");
const formModificarCategorias= document.getElementById("formModificarCategorias");
const formEliminarCategorias= document.getElementById("formDeleteCategorias");

const formCrearVideos= document.getElementById("formCrearVideos");
const formModificarVideos= document.getElementById("formModificarVideos");
const formEliminarVideos= document.getElementById("formDeleteVideos");

const formCrearUser= document.getElementById("formCrearUser");
const formModificarUser= document.getElementById("formModificarUser"); 
const formEliminarUser= document.getElementById("formDeleteUser");
// --------Div mostrar info-----------------//
const InfoVideos = document.getElementById("InfoVideos");
const InfoCat = document.getElementById("InfoCat");
const InfoUser = document.getElementById("InfoUser");



const alerta = document.getElementById("alerta");
//userss
const mostrarUser1 = document.getElementById("DataListUser1");
const mostrarUser2 = document.getElementById("DataListUser2");
// categorias 
const mostrarCategoria1 = document.getElementById("DataListCategoria1");
const mostrarCategoria2 = document.getElementById("DataListCategoria2");

// videos 
const DataListCrearVideoMostrarCategoria=document.getElementById("DataListCrearVideoMostrarCategoria");
const mostrarVideoModificar = document.getElementById("datalistOptions3");
 
var cont444=0;
async function infouser() {
  if(cont444%2==0){
    InfoUser.style.display = "none";
    cont444++;
  }else{
    InfoUser.style.display = "block";
    cont444++;
  }

}

var cont333=0;
async function infoCat() {
  if(cont333%2==0){
    InfoCat.style.display = "none";
    cont333++;
  }else{
    InfoCat.style.display = "block";
    cont333++;
  }

}
var cont222=0;
async function infoVideos() {
  if(cont222%2==0){
    InfoVideos.style.display = "none";
    cont222++;
  }else{
    InfoVideos.style.display = "block";
    cont222++;
  }

}
var cont=1;
async function infouser() {
  if(cont%2==0){
    InfoUser.style.display = "none";
    cont++;
  }else{
    InfoUser.style.display = "block";
    cont++;
  }

}
  
  var cont=1;
  async function deleteUsuarios() {
    
    if(cont%2==0){
     
      formEliminarUser.style.display = "none";
      cont++;
    }else{
  
      formEliminarUser.style.display = "block";
    cont++;
    }
  }
 async function modificarUsuarios() {
 
    if(cont%2==0){
     
        formModificarUser.style.display = "none";
      cont++;
    }else{
       
        formModificarUser.style.display = "block";
    cont++;
    }
  
 }
  async function crearUsuarios() {
         
    if(cont%2==0){
     
        formCrearUser.style.display = "none";
      cont++;
    }else{
    
        formCrearUser.style.display = "block";
    cont++;
    }
  }

  cont2=1;
  
async function crearCategorias() {
  
if(cont2%2==0){
  formCrearCategorias.style.display = "none";
  cont2++;}
  else{
    
    formCrearCategorias.style.display = "block";
    cont2++;
  }
}
async function modificarCategorias() {
  if(cont2%2==0){
    formModificarCategorias.style.display = "none";
    cont2++;}
    else{
      
      
      formModificarCategorias.style.display = "block";
      cont2++;
    }
  }
  async function deleteCategorias() {
    if(cont2%2==0){
      formEliminarCategorias.style.display = "none";
      cont2++;}
      else{
        
        formEliminarCategorias.style.display = "block";
        cont2++;
      }
    }



 

var cont3=1;
async function crearVideos() {
    
    if(cont3%2==0){
      formCrearVideos.style.display = "none";
      cont3++;}
      else{
        
        formCrearVideos.style.display = "block";
        cont3++;
      }
    }


   async function ModificarVideos() {
    if(cont3%2==0){
      formModificarVideos.style.display = "none";
      cont3++;}
      else{
        
        formModificarVideos.style.display = "block";
        cont3++;
      }
    }
    
   async function DeletVideos() {
     
    if(cont3%2==0){
      formEliminarVideos.style.display = "none";
      cont3++;}
      else{
        
        formEliminarVideos.style.display = "block";
        cont3++;
      }
    } 
    