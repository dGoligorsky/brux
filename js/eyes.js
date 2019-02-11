const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

const moveEye = function(tag, mouseX, mouseY) {
    // tag.style.left = mouseX + "px"
    // tag.style.top = mouseY + "px"

    // center of the eye
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top

    // find the different between the eye and the mouse
    diffX = mouseX - eyeMidX
    diffY = mouseY - eyeMidY - window.pageYOffset

    // pythagorean theorem
    const diff = Math.sqrt(diffX * diffX + diffY * diffY) 
    const radius = Math.min(3, diff)

    const angle = Math.atan2(diffY, diffX)

    // lets get the capped version of this, based on the angle
    // (eyeball is 6px, so radius is 3px)
    const cappedX = radius * Math.cos(angle)
    const cappedY = radius * Math.sin(angle)

    const eyeTag = tag.querySelector("div")
    
    eyeTag.style.left = cappedX+"px"
    eyeTag.style.top = cappedY+"px"
}

document.addEventListener("mousemove", function(event) {
    //   console.log(event)  
    moveEye(irisLeft, event.pageX, event.pageY)
    moveEye(irisRight, event.pageX, event.pageY)
})