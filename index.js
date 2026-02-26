/*function savelead(){
console.log("Button Clicked 1")
}*/

let myLeads=[]
const inputEl=document.getElementById("input-el")


const inputbtn= document.getElementById("input-btn")
const deletebtn= document.getElementById("delete-btn")
const ulEl=document.getElementById("ul-el")
let  leadfromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")



if(leadfromLocalStorage){
myLeads=leadfromLocalStorage
renderLeads(myLeads) 
}


console.log( leadfromLocalStorage)



function renderLeads(leads){


let listItems=""
for(let i=0;i<leads.length;i++)
{
listItems+=`<li>

                <a href="${leads[i]}" target='_blank'>
                ${leads[i]}
                </a>
                
            </li>`
            
//let li=document.createElement("li")
//li.textContent+=myLeads[i]
//ulEl.append(li)

}

ulEl.innerHTML=listItems

}



inputbtn.addEventListener("click",function(){
if(inputEl.value){
myLeads.push(inputEl.value)}
//console.log(myLeads)
inputEl.value=""


localStorage.setItem("myLeads",JSON.stringify(myLeads))

renderLeads(myLeads);
//ulEl.innerHTML+="<li><a href='inputEl.value' target='_blank'>"+inputEl.value+"</a></li>"

})

deletebtn.addEventListener("click",function(){
myLeads=[]
localStorage.clear()
renderLeads(myLeads)
})




/* function renderLeads()
{
let listItems="<li><a href='" +inputEl.value+ "' target='_blank'>"+inputEl.value+"</a></li>"
ulEl.innerHTML+=listItems
}*/





tabBtn.addEventListener("click",function(){

chrome.tabs.query({active:true, currentWindow:true},function(tabs){

myLeads.push(tabs[0].url)
localStorage.setItem("myLeads",JSON.stringify(myLeads))
//console.log(tabs[0].url)
renderLeads(myLeads)

})

})



 

