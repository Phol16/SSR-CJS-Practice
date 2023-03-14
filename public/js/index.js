const image = document.querySelector('#upload')
const submit = document.querySelector('#submit')
const prev = document.querySelector('#prevButton')
const next = document.querySelector('#nextButton')

submit.addEventListener('click',(e)=>{
  if(image.value){
    const reader = new FileReader()
    reader.readAsDataURL(image.files[0])
    reader.onloadend = ()=>{
      upload(reader.result)
    }
  }
})

const upload =async(image)=>{
   const result = await fetch('/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        image
      })
    }).then((res)=>res.json())
      window.location.reload()
}