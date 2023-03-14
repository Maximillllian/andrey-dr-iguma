import { gsap } from "gsap";
import { DrawSVGPlugin } from '/node_modules/gsap/DrawSVGPlugin.js';
import { ScrollToPlugin } from '/node_modules/gsap/ScrollToPlugin.js';
import { TextPlugin } from '/node_modules/gsap/TextPlugin.js';
// import { ScrollTrigger } from ;

gsap.registerPlugin(DrawSVGPlugin, ScrollToPlugin, TextPlugin);

export default function animateMainPage() {

    let white = '#f5f5f5';
    let green = '#7ccf9e';


    // Scroll to top when reloading page
    window.onbeforeunload = () => {
        // window.scrollTo(0, 0);
        document.body.classList.remove('dark-mode');
    };

    // Fix height of navbar in mobile

    // function resetHeight(){
    //     // reset the body height to that of the inner browser
    //     headerNav.style.height = window.innerHeight + "px";
    // }
    // // reset the height whenever the window's resized
    // window.addEventListener("resize", resetHeight);
    // // called to initially set the height.
    // resetHeight();


    // Intro animation

    // Intro page

    let introTextField = document.querySelector('.intro h1.code-text');
    let introButton = document.querySelector('.intro button')
    let introWords = ['крутой_разработчик', 'хороший_наставник', 'отличный_техлид'];
    let igumaIs = document.querySelector('.intro .static');
    let colors = [white, green];


    function shuffleArrayWithColor(array, colors) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        for (let i = array.length - 1; i >= 0; i--) {
            let binaryJ = Math.round(Math.random());
            array[i] = [array[i], colors[binaryJ]]
        }
    }


    shuffleArrayWithColor(introWords, colors);

    let sliderTl = gsap.timeline();
    sliderTl
            .to(igumaIs, {x: "0", opacity: 1, duration: .5, delay: .5})
            .to(introButton, {opacity: 1}, "0+=.75")


    let sliderWordsTl = gsap.timeline({repeat: -1});
    introWords.forEach(word => {
        let localTl = gsap.timeline({repeatDelay: .5, repeat: 1, yoyo: true});
        localTl.to(introTextField, {text: {value: word[0]+'.', delimiter: ""}, duration: .5});
        sliderWordsTl.add(localTl);
    });

    sliderTl.add(sliderWordsTl);
}
