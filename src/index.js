import("./index.css")

import { LoaderTargetPlugin } from "webpack";
import Icon from "./icon.png";

document.querySelector("#myform").addEventListener("submit",addItem);
function addItem(event){
    event.preventDefault();
    var name = document.querySelector("#name").value
    var quantity = document.querySelector("#dec").value
  

    var row=document.createElement("tr");
   
    var td1=document.createElement("td");
    td1.textContent = name;
    var td2=document.createElement("td");
    td2.textContent = quantity;
   
    row.append(td1,td2);
    document.querySelector("tbody").append(row);
}
 const img_div=document.getElementById("form")
 const logo=document.createElement("img");
 logo.src=Icon
 logo.setAttribute("class","logo");
 document.getElementById("form").append(logo)
// logo.src="https://images.app.goo.gl/SfjwuJ3mz4dRGuwA9";
 append(logo)