import "./modules/checks.js";

const registration = document.querySelector(".registration"),
    content = document.querySelector(".content"),
    platform = document.querySelector(".platform"),
    goals = document.querySelectorAll(".form__checkbox"),
    formWithGoals = document.querySelector('.form'),
    template = document.querySelector('#content-tmp').innerHTML;

const showContent = openHiddenContent();

hideContent();

goals.forEach(function(goal, i) {
    console.log(goal, i);
    let goalsChecked = [];
    console.log(goalsChecked);
    goalsChecked.push(goal[i]);
    
    goal.addEventListener("click", () => {
        if (!goal.checked == false && goal.id =='iphone') {
            showContent.open();
            showContent.setChoise('iphone');
            showContent.setPrize('iphone');
            showContent.setText('iphone');
            moveScreen();
        } else if (!goal.checked == false && goal.id =='car') {
            showContent.open();
            showContent.setChoise('audi');
            showContent.setPrize('audi');
            showContent.setText('auditext');
            moveScreen();
        } else if (!goal.checked == false && goal.id =='palm') {
            showContent.open();
            showContent.setChoise('palm');
            showContent.setPrize('palm');
            showContent.setText('palm');
            moveScreen();
        }
        if (!goal.checked == false && goal.id =='palm' && goalscheck[0].checked) {
            showContent.open();
            showContent.setChoise('palm+iphone');
            showContent.setPrize('palm+iphone');
            showContent.setText('palm+iphone');
            moveScreen();
        }
    });
});


function openHiddenContent() {

    const container = document.createElement('div');

    container.className = 'content-template';
    container.innerHTML = template;

    let contentChoise = container.querySelector('.content__choise'),
        contentPrize = container.querySelector('.content__prize'),
        contentText = container.querySelector('.content__text');
        
    return {
        open(){
            content.appendChild(container);
            content.style.display = "";
            platform.style.display = "";
            registration.style.display = "";
        },
        setChoise(choise){
            contentChoise.innerHTML = choise;
        },
        setPrize(prize){
            contentPrize.innerHTML = prize;
        },
        setText(text){
            contentText.innerHTML = text;
        }
    }
} 

function hideContent() {
    content.style.display = "none";
    platform.style.display = "none";
    registration.style.display = "none";
};

function moveScreen(){
    window.scrollTo({
        top: formWithGoals.offsetTop,
        behavior: "smooth"
      })
};

