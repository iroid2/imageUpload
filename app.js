const form=document.querySelector("#form")

const card=document.querySelector(".card")
const banner=document.querySelector("#banner")
const username=document.querySelector("#username")
const profImg=document.querySelector("#profImg")
const description=document.querySelector("#description")
const imagConatiner=document.querySelector('img')

form.addEventListener('submit',(event)=>{
     event.preventDefault()
     const card= {
          banner:"",
          profImg:"",
          username:username.value,
          description:description.value
     }
     const fileImg=profImg.files[0] 
     const banImg=banner.files[0]
     console.log(banner.files[0])

     const reader= new FileReader()
     reader.onload=function (event){
          card.fileImg=event.target.result;
          card.banImg=event.target.result;
          username.textContent=card.username; 
          description.textContent=card.description;
          imagConatiner.src=card.fileImg;
          imagConatiner.src=card.banImg;
          console.log(event.target)

          localStorage.setItem('card',JSON.stringify(card))
     };
     reader.readAsDataURL(fileImg)
     reader.readAsDataURL(banImg)
     console.log(card)
})
