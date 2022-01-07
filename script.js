//Danil Ermolin
//Assignment #3 (Part 1) ---TTP


//1. Select the section with an id of container without using querySelector
const noquery = document.getElementById("container")

//2. Select the section with an id of container using querySelector
const query = document.querySelector("#container")

//3. Select all of the list items with a class of "second"
const aLL = document.querySelectorAll("second")

//4. Select a list item with a class of third, but only the list item inside of the ol tag
const classThird = document.querySelector("#ol.third")

//5. Give the section with an id of container the text "Hello!"
const hEllo = document.querySelector("#container")
console.log("Hello!")

//6. Add the class main to the div with a class of footer
const add_footer = document.querySelector("footer")
add_footer.classList.add("main")

//7. Remove the class main on the div with a class of footer
const rem_footer = document.querySelector("footer")
rem_footer.classList.remove("main")

//8. Create a new li element
const li = document.createElement("li")

//9. Give the li the text "four"
li.addchild("four")

//10. Append the li to the ul element
const ul_elem = document.querySelector("ul")
ul_elem.appendChild("li")

//11. Loop over all of the lis inside the ol tag and give them a background color of "green"
const all_List = document.querySelector("ol.li")
let color = "green"

for (int i = 0;i<all_List.length;i++){
    all_List[i].style.backgroundColor = color
}

//12. Remove the div with a class of footer
remove.removeChild("div")









