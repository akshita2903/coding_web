const input=document.getElementById('inputs').value;
document.getElementById('srcbtn').onclick=()=>{
 return tables();
}
var algo=["Binary Search","Linear Search","Bubble Sort","Insertion Sort","Selection Sort","Merge Sort","Heap Sort","Quick Sort","Radix Sort"];
var btc=["O(1)","O(1)","O(n)","O(n)","O(n^2)","O(nlogn)","O(nlogn)","O(nlogn)","O(nk)"];
var avg=["O(logn)","O(n)","O(n^2)","O(n^2)","O(n^2)","O(nlogn)","O(nlogn)","O(nlogn)","O(nk)"];
var wc=["O(logn)","O(n)","O(n^2)","O(n^2)","O(n^2)","O(nlogn)","O(nlogn)","O(n^2)","O(nk)"];
function tables(){
   var x=document.getElementById("inputs").value;
   x=x.toUpperCase(); var z=-1,f=0;
   for(let i=0;i<algo.length;i++)
   {
       algo[i]=algo[i].toUpperCase();
if(x.trim()===algo[i].trim()){
    z=i;
    f=1;
    break;
}
   }
   if(z>-1 ){
   document.getElementById("algo_name").innerText=algo[z];
   document.getElementById("best_case").innerText=btc[z];
   document.getElementById("avg_case").innerText=avg[z];
   document.getElementById("worst_case").innerText=wc[z];
  if(  document.getElementById('show_table').style.visibility=="hidden")
  document.getElementById('show_table').style.visibility="visible";
  else {
  document.getElementById('show_table').style.visibility="hidden";
  document.getElementById("algo_name").value="";
  document.getElementById("algo_name").innerText="";
  document.getElementById("best_case").innerText="";
  document.getElementById("avg_case").innerText="";
  }
   }
   else alert("Not found")
}



    
