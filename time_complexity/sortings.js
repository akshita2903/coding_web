const input=document.getElementById('inputs').value;
document.getElementById('srcbtn').onclick=()=>{
 tables();
}
function tables(){
    /*if(document.getElementById('show').style.visibility=="hidden"){
    document.getElementById('show').style.visibility="visible";
    document.getElementById('sh').style.visibility="visible";
    document.getElementById('shows').style.visibility="visible";
    document.getElementById('sh').style.visibility="visible";
}
    else{
        document.getElementById('show').style.visibility="hidden";
        document.getElementById('sh').style.visibility="hidden";
        document.getElementById('s').style.visibility="hidden";
        document.getElementById('shows').style.visibility="hidden";

    }*/
  if(  document.getElementById('show_table').style.visibility=="hidden")
  document.getElementById('show_table').style.visibility="visible";
  else
  document.getElementById('show_table').style.visibility="hidden";
}

    
