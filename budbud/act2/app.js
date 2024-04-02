
import { imgfun } from "./image.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "Henry Cavill",
    par     : "Henry William Dalgliesh Cavill is a British actor. He is known for his portrayal of Charles Brandon in Showtime's The Tudors, DC Comics character Superman in the DC Extended Universe, Geralt of Rivia in the Netflix fantasy series The Witcher, and Sherlock Holmes in the Netflix film Enola Holmes and its 2022 sequel.",
    button  : "Contact me",
    img     : "henry.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "manOS.JPG",
    desc    : "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth. Kal-El, son of Jor-El and Lara, is sent to Earth after his home planet Krypton leads to a complete incineration..",
    button1 : "learn more",
    title2  : "PROJECT COMPLETED"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))