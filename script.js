
const categories = ["All","Men","Women","Kids"];
const content = [{
    id:"Men",
    label:"Men Shirt 1"

},
{
    id:"Men",
    label:"Men Shirt 2"

},
{
    id:"Men",
    label:"Men Shirt 3"

},
{
    id:"Men",
    label:"Men Shirt 4"

},
{
    id:"Men",
    label:"Men Shirt 5"

},

{
    id:"Women",
    label:"Women Shirt 1"

},
{
    id:"Women",
    label:"Women Shirt 2"

},
{
    id:"Women",
    label:"Women Shirt 3"

},
{
    id:"Women",
    label:"Women Shirt 4"

},
{
    id:"Women",
    label:"Women Shirt 5"

},
{
    id:"Kids",
    label:"Kids Shirt 1"

},
{
    id:"Kids",
    label:"Kids Shirt 2"

},
{
    id:"Kids",
    label:"Kids Shirt 3"

},
{
    id:"Kids",
    label:"Kids Shirt 4"

},
{
    id:"Kids",
    label:"Kids Shirt 5"

}
]

const filterButtonsWraper = document.querySelector(".filter-buttons-wraper");
const contentWraper = document.querySelector(".content-wraper");

function createCategory(){
    categories.forEach(category=>{
        const buttonEle = document.createElement("button");
        buttonEle.innerText=category;
        buttonEle.classList.add("filter-button");
        buttonEle.setAttribute("data-filter",category)
        filterButtonsWraper.appendChild(buttonEle);
    })
}

function createContent(){
    content.forEach(singleContent=>{
        const div = document.createElement("div");
        div.classList.add("card",singleContent.id)
        div.textContent=singleContent.label
        contentWraper.appendChild(div)
    })
}

createCategory();
createContent();

function filterCardsByCategory(extractCurrentCategory,allCards){
    allCards.forEach(item=>{
        const isShowAllCards = extractCurrentCategory.toLowerCase()=="all";
        const isItemFilterd = item.classList.contains(extractCurrentCategory);
        if(!isItemFilterd && !isShowAllCards){
            item.classList.add("hide")
        }
        else{
            item.classList.remove("hide")
        }
    })
}


const filterButton = document.querySelectorAll(".filter-button");
const allCards = document.querySelectorAll(".card");

filterButton.forEach(singleFilterButton=>{
    singleFilterButton.addEventListener("click",()=>{
        const extractCurrentCategory  = singleFilterButton.dataset.filter;
        // console.log(SelectedSingleFilterButton)
        filterCardsByCategory(extractCurrentCategory ,allCards)
    })
})

