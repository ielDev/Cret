

//Preload Images
function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}

preload_image("envelope.closed.png");
preload_image("envelope.open.png");
preload_image("red_tulip.png");
preload_image("yellow_tulip.png");
preload_image("purple_tulip.png");
preload_image("pink_tulip.png");
preload_image("variegated_tulip.png");
preload_image("orange_tulip.png");
preload_image("white_tulip.png");
preload_image("tuli.png");
preload_image("hoo.png");
preload_image("rat_spin.gif");
preload_image("wow.png");
preload_image("hand_face.png");
preload_image("haha.png");

function changeBodyColor() {

    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    
    document.body.style.backgroundColor = randomColor;
}




var snd = new Audio("shing.mp3");
var msc = new Audio("lopey.mp3");

const hoverImage = document.getElementById('envelop_id');

hoverImage.addEventListener('mouseenter', () => {
    hoverImage.src = 'envelope-open.png';
});

hoverImage.addEventListener('mouseleave', () => {
    hoverImage.src = 'envelope-closed.png';
});

const hoverImage2 = document.getElementById("roseguy_id");
var envelopBotton = document.getElementById('envelopBtn_id');

envelopBotton.onclick = function () {
    setTimeout(() => {
        msc.play();
    }, 1500);
    document.getElementById("envelop_div_id").style.animationIterationCount = "2";

    setTimeout(() => {
        document.getElementById("envelop_div_id").style.animation = "zoom-fade-out 4s forwards";
        document.querySelector('.text_1').style.animation = "move-out 1s forwards";
        document.body.style.backgroundColor = "#FECDBC"
    }, 1200);

    setTimeout(() => {
        document.getElementById("mainCntr_1_id").style.display = "none";
    }, 3000);

    setTimeout(() => {
        document.getElementById("mainCntr_2_id").style.display = "flex";
        snd.play();
    }, 4000);
}

var roseBotton = document.getElementById("roseBtn_id");
let currentTextIndex = 0;
let currentState = 0;

const text2Element = document.querySelector('.text_2');

roseBotton.onclick = function () {
    console.log("TITE ACCEPTED")
    


    switch (currentState) {
        case 0:
            text2Element.textContent = "May ka valentines ka ngayon? ";
            hoverImage2.src = "wow.png";
            
            currentState = 1;
            break;
        case 1:
            text2Element.textContent = "ahh wala... kawawa ka naman "
            hoverImage2.src = "haha.png";
            currentState = 2;
            break;
        case 2:
            text2Element.textContent = "Pero kahit wala ka man valentines ngayon"
            hoverImage2.src = "rat_spin.gif";
            currentState = 3;
            break;
        case 3:
            text2Element.textContent = "meron ka paring....";
            hoverImage2.src = "hoo.png";
            currentState = 4;

            break
        case 4:
            text2Element.textContent = "isang basket ng...";
            hoverImage2.src = "hand_face.png";
            currentState = 5;

            break;
        case 5:
            document.querySelector('.text_2').style.animation = "exit-top 1s forwards";
            document.querySelector('.emoji').style.animation = "exit-bottom 1s forwards";

            setTimeout(() => {
                document.getElementById("mainCntr_3_id").style.display = "flex";
                document.getElementById("mainCntr_2_id").style.display = "none";
                document.getElementById("mainCntr_3_id").style.animation = "swingIn 3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
                snd.play();
            }, 500);
            break;
    }
    
}

 // Handles the baseImg that spawn the tulips
document.addEventListener("DOMContentLoaded", function () {
    const container = document.body;
    const baseImage = document.getElementById("tuli_id");

    baseImage.addEventListener("click", function (event) {
        generateRandomTulip(event.clientX, event.clientY);
        shakeBasket();
    });

    function shakeBasket() {
        const tuli = document.getElementById("tuli_id");
        tuli.style.animation = "shake 0.5s ease-in-out";
        setTimeout(() => {
            tuli.style.animation = "";
        }, 500);
    }

    // Rng Function
    function generateRandomTulip(x, y) {
        const tulipColors = [
            { color: "Red", image: "red_tulip.png" },
            { color: "Yellow", image: "yellow_tulip.png" },
            { color: "White", image: "white_tulip.png" },
            { color: "Purple", image: "purple_tulip.png" },
            { color: "Pink", image: "pink_tulip.png" },
            { color: "Orange", image: "orange_tulip.png" },
            { color: "Variegated", image: "variegated_tulip.png" },
        ];
    
        const randomTulip = tulipColors[Math.floor(Math.random() * tulipColors.length)];
    
        const spawnedImage = document.createElement("img");
        spawnedImage.src = randomTulip.image;
        spawnedImage.id = "spawnedImage";
        spawnedImage.classList.add("draggable");
        spawnedImage.setAttribute("data-color", randomTulip.color);
    
        
        // Change the width and height here
        
        spawnedImage.style.width = "80px"; 
        spawnedImage.style.height = "80px";

    
        spawnedImage.style.left = x - spawnedImage.offsetWidth / 1 + "px";
        spawnedImage.style.top = y - spawnedImage.offsetHeight / 1 + "px";
        spawnedImage.style.position = "absolute";
    
        container.appendChild(spawnedImage);
    
        

        makeDraggable(spawnedImage);
    }
    

function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;


    // handles when droped
    // ... (previous code)

function handleMouseDown(event) {
    isDragging = true;
    if (event.type === "mousedown") {
        offsetX = event.clientX - parseFloat(element.style.left);
        offsetY = event.clientY - parseFloat(element.style.top);
    } else if (event.type === "touchstart") {
        offsetX = event.touches[0].clientX - parseFloat(element.style.left);
        offsetY = event.touches[0].clientY - parseFloat(element.style.top);
    }
    element.style.cursor = "grabbing";

    // Apply the transition effect to the dragged tulip
    element.style.width = "100px";
    element.style.height = "100px";
    element.style.transition = "width 0.3s ease, height 0.3s ease";
    // Add a class for the goofy transition
    element.classList.add("goofy-transition");

    element.style.cursor = "grabbing";
}

function handleMouseUp() {
    isDragging = false;
    element.style.cursor = "grab";

    // Check if the spawned image is above the box
    const targetBox = document.getElementById("box_id");
    const imageRect = element.getBoundingClientRect();
    const targetRect = targetBox.getBoundingClientRect();

    
    element.style.width = "80px";
    element.style.height = "80px";
    


    if (
        imageRect.left < targetRect.right &&
        imageRect.right > targetRect.left &&
        imageRect.top < targetRect.bottom &&
        imageRect.bottom > targetRect.top
    ) {
        
            const color = element.getAttribute("data-color");
            const mainCntr3 = document.getElementById("mainCntr_3_id");
            var resultHeading = document.getElementById("text_6_id");
            var okek = document.getElementById("text_5_id");
            var resultImage = document.getElementById("youGotImg_id");
            var resultMeans = document.getElementById("means_id");
            var resultContainer = document.getElementById("mainCntr_4_id");
            var blackFade = document.getElementById("blackfade_id");
            var mainCntr4 = document.getElementById("mainCntr_4_id");




            
    
            // Perform different actions based on the color
            switch (color) {
                case "Red":
                    console.log("Red Tulip dropped into the target box!");
                    resultHeading.textContent = "Red Tulip!!";
                    resultImage.src = "red_tulip.png"
                    resultMeans.textContent = "Symbolizing deep love and passion, red tulips convey a sense of romance and undying affection. They are a powerful expression of love and are often given to convey strong emotions.";
                    break;
                case "Yellow":        
                    console.log("Yellow Tulip dropped into the target box!");
                    resultHeading.textContent = "Yellow Tulip!!";
                    resultImage.src = "yellow_tulip.png";
                    resultMeans.textContent = "Radiating happiness and cheerfulness, yellow tulips represent sunshine and positive energy. They are a symbol of joy, friendship, and the simple pleasures of life.";
                    break;
                case "White":
                    console.log("White Tulip dropped into the target box!");
                    resultHeading.textContent = "White Tulip!!";
                    resultImage.src = "white_tulip.png";
                    resultMeans.textContent = "Pure and elegant, white tulips are associated with purity, forgiveness, and new beginnings. They can be given as a gesture of apology or to signify a fresh start in relationships.";
                    break;
                case "Purple":
                    console.log("Purple Tulip dropped into the target box!");
                    resultHeading.textContent = "Purple Tulip!!";
                    resultImage.src = "purple_tulip.png";
                    resultMeans.textContent = "Representing royalty and luxury, purple tulips convey a sense of elegance and sophistication. They are a symbol of admiration and are often given to express a sense of regality.";
                    break;
                case "Pink":
                    console.log("Pink Tulip dropped into the target box!");
                    resultHeading.textContent = "Pink Tulip!!";
                    resultImage.src = "pink_tulip.png";
                    resultMeans.textContent = "Gentle and graceful, pink tulips are often linked to affection and caring. They convey a sense of thoughtfulness and are a wonderful choice for expressing admiration and appreciation.";
                    break;
                case "Orange":
                    console.log("Orange Tulip dropped into the target box!");
                    resultHeading.textContent = "Orange Tulip!!";
                    resultImage.src = "orange_tulip.png";
                    resultMeans.textContent = "Vibrant and energetic, orange tulips are associated with enthusiasm and a zest for life. They symbolize a sense of fascination and are often given to express admiration or a strong desire.";
                    break;
                case "Variegated":
                    console.log("Variegated Tulip dropped into the target box!");
                    resultHeading.textContent = "Variegated Tulip!!";
                    resultImage.src = "variegated_tulip.png";
                    resultMeans.textContent = "With their captivating mix of colors, variegated tulips represent beauty in diversity. They symbolize the uniqueness and individuality of each person, making them a great choice for celebrating differences."
                    break;
                default:
                    console.log(`tite ko dropped into the target box!`);
            }

            element.style.transition = "width 0.3s ease, height 0.3s ease, transform 2s ease-in-out";
            element.style.animation = "puffOut 2s cubic-bezier(0.165, 0.840, 0.440, 1.000) both";


            setTimeout(() => {
                
                blackFade.style.display = "flex";
                blackFade.style.animation = "fadeInOut 5s forwards";
                
            }, 1000);

            setTimeout(() => {         
                mainCntr3.style.display = "none";
                resultContainer.style.display = "flex";

                setTimeout(() => {
                    snd.play();
                }, 500);
                
            }, 3500);


            setTimeout(() => {
                setInterval(changeBodyColor, 1000);
                okek.textContent = "Yun na yon haha"
                resultHeading.textContent = "gawa ni kel thenks👍👍";
                resultImage.src = "rat_spin.gif";
                resultMeans.textContent = "(pwede mo i refresh para matry ibang color ng tulips, tapon mo lang yung iba)";
                mainCntr4.style.justifyContent = "center";
            }, 15000);
        


        } else {
            element.style.transition = "width 0.3s ease, height 0.3s ease, transform 2s ease-in-out";
            element.style.transform = "scale(0)";

        }
    }

    // Responsible for x and y coordinates of spawnedImg
    function handleMouseMove(event) {
        if (isDragging) {
            if (event.type === "mousemove") {
                element.style.left = event.clientX - offsetX + "px";
                element.style.top = event.clientY - offsetY + "px";
            } else if (event.type === "touchmove") {
                element.style.left = event.touches[0].clientX - offsetX + "px";
                element.style.top = event.touches[0].clientY - offsetY + "px";
            }
        }
    }

    

    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("touchstart", handleMouseDown);

    element.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("touchend", handleMouseUp);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleMouseMove);
}


});
