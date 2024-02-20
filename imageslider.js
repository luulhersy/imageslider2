const imageslider=document.querySelector("#imageslider")
const prevbtn=document.querySelector("#prevbutton")
const nextbtn=document.querySelector("#nextbutton")

const images=[
   "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.1.947985006.1700639758&semt=sph",
  "https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?size=626&ext=jpg&ga=GA1.1.947985006.1700639758&semt=sph",
  "https://img.freepik.com/free-photo/vertical-shot-buildings-skyscrapers-new-york-city-united-states_181624-26915.jpg?size=626&ext=jpg&ga=GA1.1.947985006.1700639758&semt=sph",
]
let indexImage=0
function currentImage(){
    imageslider.src=images[indexImage]
}
currentImage()
console.log(imageslider)
nextbtn.addEventListener("click",function(){
    indexImage++
    if(indexImage>images.length -1){
        indexImage=0
    }
    currentImage()
})

prevbtn.addEventListener("click",function(){
    
    if(indexImage>0){
        indexImage--
        console.log(indexImage)
        currentImage()
    }else{
        indexImage = images .length - 1
        console.log(indexImage)

        currentImage()
    }
    currentImage()
})