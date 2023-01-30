const projectButton = window.document.getElementById('projectButton');
const chapter2= window.document.querySelector('[rel="chapter2"]');
const chapter1= window.document.querySelector('[rel="chapter1"]');
const projectText= window.document.getElementById('projectText');
const aboutMeButton= window.document.getElementById('aboutMeButton');
const skillButton = window.document.getElementById('skillButton');
const projectClick =window.document.getElementById('projectClick');
// chapter2.addEventListener("click",()=>{
//     alert("dadsf")
// })
function clickedProject(){

    chapter1.classList.add("clickedProject")
    chapter2.classList.add("button-click");
    chapter1.classList.add("button-click");
    projectText.innerText = "PROJECT";
}
function clickedAboutMe(){


    if(chapter1.classList.contains("clickedAboutMe")) {
        chapter2.classList.remove("button-click");
        chapter1.classList.remove("button-click");
        chapter1.classList.remove("clickedAboutMe");
        projectText.innerText = "";

    }
    else {

        chapter2.classList.add("button-click");
        chapter1.classList.add("button-click");

        chapter1.classList.add("clickedAboutMe");
        chapter1.classList.remove("clickedSkill");
        chapter1.classList.remove("clickedProject");
        projectText.innerText = "PROJECT";
    }
}

function clickedSkill(){

    if(chapter1.classList.contains("clickedSkill")){
        chapter2.classList.remove("button-click");
        chapter1.classList.remove("button-click");

        chapter1.classList.remove("clickedSkill");
        projectText.innerText = "";

    }else {
        chapter2.classList.add("button-click");
        chapter1.classList.add("button-click");
        chapter1.classList.add("clickedSkill");

        chapter1.classList.remove("clickedAboutMe");
        chapter1.classList.remove("clickedProject");
        projectText.innerText = "PROJECT";
    }



}
function clickedProject2(){
    if(chapter1.classList.contains("clickedProject")){

        chapter2.classList.remove("button-click");
        chapter1.classList.remove("button-click");

        chapter1.classList.remove("clickedProject")
        chapter1.classList.remove("clickedAboutMe");
        chapter1.classList.remove("clickedSkill");

        projectText.innerText = "";

    }else {

        chapter1.classList.add("clickedProject");
        chapter1.classList.remove("clickedAboutMe");
        chapter1.classList.remove("clickedSkill");

    }

}

projectButton.addEventListener("click", clickedProject);

aboutMeButton.addEventListener("click", clickedAboutMe);

skillButton.addEventListener("click", clickedSkill);

projectClick.addEventListener("click", clickedProject2);


window.document.querySelector('.next').addEventListener('click',()=>{

    if(!chapter1.classList.contains("clickedProject")&&
        !chapter1.classList.contains("clickedAboutMe")&&
        !chapter1.classList.contains("clickedSkill")){
        clickedAboutMe();
    }else if( chapter1.classList.contains("clickedAboutMe")){
        clickedSkill();

    }else if( chapter1.classList.contains("clickedSkill")){
        clickedProject2();
    }else if( chapter1.classList.contains("clickedProject")){
    clickedProject2();
}


});

window.document.querySelector('.before').addEventListener('click',()=>{

    if(!chapter1.classList.contains("clickedProject")&&
        !chapter1.classList.contains("clickedAboutMe")&&
        !chapter1.classList.contains("clickedSkill")){
        clickedProject();
    }else if( chapter1.classList.contains("clickedProject")){
        clickedSkill();
    }else if( chapter1.classList.contains("clickedSkill")){
        clickedAboutMe();

    }else if( chapter1.classList.contains("clickedAboutMe")) {
        clickedAboutMe();

    }


});
