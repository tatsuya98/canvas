const canvasContainer = document.querySelector('.canvasContainer')
canvasContainer.style.display = 'flex'
canvasContainer.style.width = '50em'
canvasContainer.style.height = '50em'

const button = document.querySelector('button')

const CreatePanels = () =>{
    console.log(canvasContainer.offsetWidth)
    for(let i = 0; i < 16; i++){
        const colorPanel = document.createElement('div');
        
        colorPanel.style.width = `10em`
        colorPanel.style.height = `10em`
        colorPanel.setAttribute('class','panel')
        canvasContainer.appendChild(colorPanel)
    }
    const colorPanels = document.querySelectorAll('.panel')
    colorPanels.forEach(colorPanel =>{
    colorPanel.addEventListener('mouseover',changeColour)
    })
}
const resetCanvas = () =>{
    colorPanels.forEach(colorPanel =>{
        canvasContainer.removeChild(colorPanel)
        colorPanel.removeEventListener('mouseover',changeColour)
    })

}
const changeColour = (e) =>{
 e.currentTarget.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}
CreatePanels()