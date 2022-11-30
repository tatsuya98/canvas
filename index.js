const canvasContainer = document.querySelector('.canvasContainer')
canvasContainer.style.display = 'flex'
canvasContainer.style.width = '50em'
canvasContainer.style.height = '50em'

const button = document.querySelector('button')

const CreatePanels = () =>{
    for(let i = 0; i < 16; i++){
        CreatePanel()
    }
    addEvents()
}
const resetCanvas = () =>{
    const colorPanels = document.querySelectorAll('.panel')
    colorPanels.forEach(colorPanel =>{
        canvasContainer.removeChild(colorPanel)
        colorPanel.removeEventListener('mouseover',changeColour)
    })
    let numberofPanels = Number(prompt('How man panels do you wish to add',''))
    
    if(numberofPanels !== numberofPanels || (numberofPanels < 1 || numberofPanels > 100)){
        numberofPanels = errorCheck()
        }
        
        for(let i =0; i < numberofPanels; i++){
            CreatePanel()
        }
        addEvents()
    }


const changeColour = (e) =>{
 e.currentTarget.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}
const addEvents = () =>{
    const colorPanels = document.querySelectorAll('.panel')
    colorPanels.forEach(colorPanel =>{
    colorPanel.addEventListener('mouseover',changeColour)
    })
}
const errorCheck = () =>{
    const numberofPanels = Number(prompt('you have entered a value that is larger than 100 or is not a number please enter again',''))
    
    if(numberofPanels !== numberofPanels || (numberofPanels < 1 || numberofPanels > 100)){
        return errorCheck()
    }else if(numberofPanels >= 1 && numberofPanels <= 100){
        return numberofPanels
    }
}
const CreatePanel = ()=>{
    const colorPanel = document.createElement('div');   
        colorPanel.style.width = `10em`
        colorPanel.style.height = `10em`
        colorPanel.setAttribute('class','panel')
        canvasContainer.appendChild(colorPanel)
}
CreatePanels()
button.addEventListener('click',resetCanvas)