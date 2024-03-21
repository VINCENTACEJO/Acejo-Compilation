import { rightDiv } from "./image.js"
import { leftdiv } from "./info.js"

const data ={
    title1:     "GOOD",
    title2:     "Dog",
    para1:      "Golden Retriever - an Affectionate, Trustworthy, Confident, Kind, Intelligent and Best Family. Beautiful dog breeds, Golden retriever, Labrador retriever.",
    para2:      "Golden Retriever - an Affectionate, Trustworthy, Confident, Kind, Intelligent and Best Family. Beautiful dog breeds, Golden retriever, Labrador retriever.",
    button1:    "Home",
    button2:    "View",
    button3:    "Contact Us",
    button4:    "About Us",
    myImage:    "dog.jpg"
}

const{ title1, title2, para1, para2, button1, button2, button3, button4, myImage} = data

container.append(leftdiv(title1, title2, para1, para2, button1, button2, button3, button4))
container.append(rightDiv( myImage))