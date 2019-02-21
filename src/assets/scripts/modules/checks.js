
const registration = document.querySelector(".registration"),
content = document.querySelector(".content"),
platform = document.querySelector(".platform"),
goals = document.querySelectorAll(".form__checkbox"),
formWithGoals = document.querySelector(".form");

let goalsArr = [];
const showContent = createContent();

for (let i = 0; i < goals.length; i++) {
goalsArr.push(goals[i]);
}

hideContent();
createContent();

goals.forEach(function(goal) {

goal.addEventListener("change", () => {
    if (!goalsArr[0].checked && !goalsArr[1].checked && !goalsArr[2].checked) {
        showContent.hide('');
    } else if (goalsArr[0].checked && !goalsArr[1].checked && !goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Iphone Xs");
        showContent.setPrize("Цена <b>1000$</b>");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и 2 дня </b> торговли на платформе.");
    } else if (!goalsArr[0].checked && goalsArr[1].checked && !goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Audi A5");
        showContent.setPrize("Цена <b>30000$</b>");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и 2 часа</b> торговли каждый вечер.");
    } else if (!goalsArr[0].checked && !goalsArr[1].checked && goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Финансовая независимость - бесценно");
        showContent.setPrize("");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и занятие любимым делом</b> в любой точке мира всю вашу жизнь.");
    } else if (goalsArr[0].checked && goalsArr[1].checked && !goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Iphone Xs - Цена 1000$");
        showContent.setChoiseSc("Audi A5 - Цена 30000$");
        showContent.setPrize("31000$");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и 3 часа</b> торговли каждый вечер.");
    } else if (goalsArr[0].checked && goalsArr[1].checked && goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Iphone Xs - Цена 1000$");
        showContent.setChoiseSc("Audi A5 - Цена 30000$");
        showContent.setChoiseTrd("Финансовая независимость - бесценно");
        showContent.setPrize("");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и занятие любимым делом</b> в любой точке мира всю вашу жизнь.");
    } else if (goalsArr[0].checked && !goalsArr[1].checked && goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Iphone Xs - Цена 1000$");
        showContent.setChoiseSc("Финансовая независимость - бесценно");
        showContent.setPrize("");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и занятие любимым делом</b> в любой точке мира всю вашу жизнь.");
    } else if (!goalsArr[0].checked && goalsArr[1].checked && goalsArr[2].checked) 
    {
        showContent.clear();
        showContent.open();
        showContent.setChoise("Audi A5 - Цена 30000$");
        showContent.setChoiseSc("Финансовая независимость - бесценно");
        showContent.setPrize("");
        showContent.setText("<b>Цена для трейдера Olymp Trade - 50$ и занятие любимым делом</b> в любой точке мира всю вашу жизнь.");
    } 

    moveScreen();
});
});

function createContent() {
const container = document.createElement("div");

container.className = "content-template";
container.innerHTML = `<div class="content__wrap">
<div class="content__col content__col-left">
    <ul class="content__list">
        <li class="content__choise"></li>
        <li class="content__choise-sc"></li>
        <li class="content__choise-trd"></li>
        <li class="content__prize"></li>
    </ul>
</div>
<div class="content__col content__col-right">
    <div class="content__text"></div>
</div>
</div>`;

let contentChoise = container.querySelector(".content__choise"),
    contentChoiseSc = container.querySelector(".content__choise-sc"),
    contentChoiseTrd = container.querySelector(".content__choise-trd"),
    contentPrize = container.querySelector(".content__prize"),
    contentText = container.querySelector(".content__text");

return {
    clear() {
        contentChoise.innerHTML = "";
        contentChoiseSc.innerHTML = "";
        contentChoiseTrd.innerHTML = "";
        contentPrize.innerHTML = "";
        contentText.innerHTML = "";
    },
    open() {
        content.appendChild(container);
        content.style.display = "";
        platform.style.display = "";
        registration.style.display = "";
    },
    setChoise(choise) {
        contentChoise.innerHTML = choise;
    },
    setChoiseSc(choise) {
        contentChoiseSc.innerHTML = choise;
    },
    setChoiseTrd(choise) {
        contentChoiseTrd.innerHTML = choise;
    },
    setPrize(prize) {
        contentPrize.innerHTML = prize;
    },
    setText(text) {
        contentText.innerHTML = text;
    },
    hide(){
        content.style.display = "none";
    }
};
}

function hideContent() {
content.style.display = "none";
platform.style.display = "none";
registration.style.display = "none";
}

function moveScreen() {
window.scrollTo({
    top: formWithGoals.offsetTop,
    behavior: "smooth"
});
}

