const canvasContainer = document.querySelector('.canvasContainer')
const topContainer = document.querySelector('.top')
canvasContainer.style.display = 'grid'
canvasContainer.style.margin = '0 auto'
canvasContainer.style.width = '500px'
canvasContainer.style.height = '500px'
canvasContainer.style.backgroundColor = 'white'
topContainer.style.textAlign = 'center'
topContainer.style.paddingBottom = '50px'
document.querySelector('body').style.backgroundColor = '#F9F5E3'

const button = document.querySelector('button')

const CreatePanels = (numberOfPanels) =>{
    canvasContainer.style.gridTemplateColumns = `repeat(${numberOfPanels},1fr)`;
    for(let i = 0; i < Math.pow(numberOfPanels,2); i++){
        CreatePanel(numberOfPanels)
    }
    addEvents()
}
const resetCanvas = () =>{
    const colorPanels = document.querySelectorAll('.panel')
    colorPanels.forEach(colorPanel =>{
        canvasContainer.removeChild(colorPanel)
        colorPanel.removeEventListener('mouseover',changeColour)
    })
    let numberOfPanels = Number(prompt('choose a value between 1 and 100.',''))
    
    if(numberOfPanels !== numberOfPanels || (numberOfPanels < 1 || numberOfPanels > 100)){
        numberOfPanels = errorCheck()
        }
        CreatePanels(numberOfPanels)
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
    const numberOfPanels = prompt('you have entered a number less than 1 or higher than 100 please enter again','')
    if(numberOfPanels !== numberOfPanels || (numberOfPanels < 1 || numberOfPanels > 100)){
        return errorCheck()
    }
    return numberOfPanels
}
const CreatePanel = ()=>{
    const colorPanel = document.createElement('div');   
        colorPanel.style.padding = '0'
        colorPanel.style.margin = '0'
        colorPanel.setAttribute('class','panel')
        canvasContainer.appendChild(colorPanel)
}
CreatePanels(16)
button.addEventListener('click',resetCanvas)