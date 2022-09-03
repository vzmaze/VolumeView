//выводим текущие размеры окна
const tempX = 18;
let windowInnerWidth = document.documentElement.clientWidth+tempX;
let windowInnerHeight = document.documentElement.clientHeight+tempX;
let windowSizes = document.createElement("span");
windowSizes.style.color = "white";
windowSizes.style.position = "absolute";
// windowSizes.style.top = 1000 + "px";

windowSizes.innerHTML = windowInnerWidth + " " + windowInnerHeight;
document.body.prepend(windowSizes);
window.addEventListener("resize", () => {
    windowInnerWidth = document.documentElement.clientWidth+tempX;
    windowInnerHeight = document.documentElement.clientHeight+tempX;
    windowSizes.innerHTML = windowInnerWidth + " " + windowInnerHeight;
});


//настраиваем взаимодействие с кнопкой меню
let menuBtn = document.querySelector("#menu_btn_frame");
let menuBtnLines = document.querySelectorAll(".menu_btn_line");
let menu = document.querySelector("#menu_div");
let isMenuActive = false;

menuBtn.addEventListener("mouseover", function(){
    menuBtnLines.forEach(line => {
        line.classList.add('menu_btn_line_orange');
    });
});
menuBtn.addEventListener("mouseout", function(){
    menuBtnLines.forEach(line => {
        line.classList.remove('menu_btn_line_orange');
    });
});

menuBtn.addEventListener("click", () => {
    if(!isMenuActive) {
        menu.style.display = 'block';
        crossDissolve(menu);
        isMenuActive = true;
        menuBtnLines[0].hidden = true;
        menuBtnLines.forEach(line => {
            line.classList.add('menu_btn_line_longer');
        });
        menuBtnLines[1].style.transform = 'rotate(45deg)';
        menuBtnLines[2].style.transform = 'rotate(-45deg)';
    } else {
        menu.style.display = 'none';
        menu.style.opacity = 0;
        isMenuActive = false;
        menuBtnLines[0].hidden = false;
        menuBtnLines.forEach(line => {
            line.classList.remove('menu_btn_line_longer');
        });
        menuBtnLines[1].style.transform = 'unset';
        menuBtnLines[2].style.transform = 'unset';
    }
});

// Настраиваем кнопку "Х" для меню SIGN IN
let signInWin = document.querySelector("#sign_in_window");
let windowBtn = document.querySelector("#window_btn_frame");
let windowBtnX = Array.from(windowBtn.children);
let signWindows = document.querySelectorAll(".sign_in_up");

windowBtn.addEventListener("mouseover", () => {
    windowBtnX.forEach(line => {
        line.style.borderColor = `#b49c6e`;
    });
});
windowBtn.addEventListener("mouseout", () => {
    windowBtnX.forEach(line => {
        line.style.borderColor = `#b4b4b4`;
    });
});
windowBtn.addEventListener("click", () => {
    signInWin.style.display = 'none';
    signInWin.style.opacity = 0;
});

function showSignIn(){
    signInWin.style.display = 'flex';
    crossDissolve(signInWin);
}
signWindows.forEach(win => {
    win.addEventListener("click", function(e){
        showSignIn();
    });
});

//Функция плавного появления окна
function crossDissolve(elem, which = true) {
    if(which){
        let x = 0;
        let t = setInterval(() => {
            x += 0.05;
            elem.style.opacity = x;
            if(x >= 1)
                clearInterval(t);
        }, 15);
    } else {
        let x = 1;
        let t = setInterval(() => {
            x -= 0.05;
            elem.style.opacity = x;
            if(x == 0)
                clearInterval(t);
        }, 15);
    }
}

// Скроллинг кнопкой arrow_down

let bodyWidth = parseInt(getComputedStyle(document.body).width);

let arrowDownBtn = document.querySelector("#arrow_down");
let scrollY = 1000;
if(window.matchMedia("(max-width: 1400px) and (orientation: landscape)").matches) {
    scrollY = 820;
    console.log("1");
} else if (window.matchMedia("(orientation: portrait) and (max-device-width: 412px)").matches && bodyWidth <= 412) {
    scrollY = 860;
    console.log("5");
} else if (window.matchMedia("(max-width: 1300px) and (orientation: landscape)").matches) {
    scrollY = 800;
    console.log("2");
} else if (window.matchMedia("(orientation: portrait)").matches && window.matchMedia("(max-width: 1023px)").matches) {
    scrollY = 950;
    console.log("3");
} else if (window.matchMedia("(orientation: portrait)").matches && window.matchMedia("(min-width: 1024px)").matches) {
    scrollY = 1300;
    console.log("4");
}
arrowDownBtn.addEventListener("click", () => {
    window.scrollTo({
        top: scrollY,
        behavior: "smooth"
    })
});

//SERVICES

let services = document.querySelector("#services");
//создадим массив из эл-в li
let serviceElements = Array.from(document.querySelector("#services_list").querySelector("ul").children);
//создадим массив из описаний (эл-в p)
// let serviceDescrBlock = document.querySelector(".service_descr_block");

let serviceDescriptions = Array.from(document.querySelectorAll(".service_description"));

//созданим класс, в котором будут храниться настройки стилей для фоновых изобр-й
class StyleSets {
    constructor(url, positionX, positionY){
        this.url = url;
        this.x = positionX;
        this.y = positionY;
    }
}
let ServicesBGStyles = [];
let sbgs1 = new StyleSets("img/services/service_1.jpg", 102, 60);
let sbgs2 = new StyleSets("img/services/service_2.jpg", 80, 80);
let sbgs3 = new StyleSets("img/services/service_1.jpg", 102, 60);
let sbgs4 = new StyleSets("img/services/service_3.jpg", 80, -50);
let sbgs5 = new StyleSets("img/services/service_4.jpg", 100, -10);
let sbgs6 = new StyleSets("img/services/service_2.jpg", 80, 30);
ServicesBGStyles.push(sbgs1, sbgs2, sbgs3, sbgs4, sbgs5, sbgs6);

let descriptionStyles = getComputedStyle(document.querySelector("#design_descr"), null);
let getDescrSize = parseFloat(descriptionStyles.fontSize);
Number.isInteger(getDescrSize) ? getDescrSize = parseInt(getDescrSize) : {};
function checkDescrSize() {
    getDescrSize = parseFloat(descriptionStyles.fontSize);
    Number.isInteger(getDescrSize) ? getDescrSize = parseInt(getDescrSize) : {};
    switch(getDescrSize) {
        case 19:
            sbgs1.x = -80; sbgs1.y = 40;
            sbgs2.x = -120; sbgs2.y = 55;
            sbgs3.x = -80; sbgs3.y = 80;
            sbgs4.x = -40; sbgs4.y = -30;
            sbgs5.x = -70; sbgs5.y = 8;
            sbgs6.x = -100; sbgs6.y = 0;
        break;
        case 18:
            sbgs1.x = 120; sbgs1.y = 40;
            sbgs2.x = 140; sbgs2.y = 50;
            sbgs4.x = 120; sbgs4.y = -30;
            sbgs5.x = 120; sbgs5.y = 0;
            sbgs6.x = 140; sbgs6.y = 20;
        break;
        case 17:
            sbgs1.x = 120; sbgs1.y = 20;
            sbgs2.x = 140; sbgs2.y = 40;
            sbgs3.x = 120; sbgs3.y = 50;
            sbgs4.x = 130; sbgs4.y = -15;
            sbgs5.x = 135; sbgs5.y = 5;
            sbgs6.x = 140; sbgs6.y = 0;
        break;
        case 16:
            sbgs1.x = 140; sbgs1.y = 20;
            sbgs2.x = 140; sbgs2.y = 40;
            sbgs3.x = 140; sbgs3.y = 30;
            sbgs4.x = 130; sbgs4.y = -20;
            sbgs5.x = 135; sbgs5.y = -5;
            sbgs6.x = 140; sbgs6.y = 0;
        break;
        case 15:
            sbgs1.x = 150; sbgs1.y = 30;
            sbgs2.x = 140; sbgs2.y = 40;
            sbgs3.x = 140; sbgs3.y = 30;
            sbgs4.x = 130; sbgs4.y = -10;
            sbgs5.x = 135; sbgs5.y = 5;
            sbgs6.x = 140; sbgs6.y = 5;
        break;
        case 14.9:
            sbgs1.x = 15; sbgs1.y = 10;
            sbgs2.x = 7; sbgs2.y = 84;
            sbgs3.x = 10; sbgs3.y = 60;
            sbgs4.x = 30; sbgs4.y = -55;
            sbgs5.x = 0; sbgs5.y = -50;
            sbgs6.x = 7; sbgs6.y = 5;
        break;
        case 24:
            sbgs1.x = 400; sbgs1.y = 100;
            sbgs2.x = 400; sbgs2.y = 120;
            sbgs3.x = 340; sbgs3.y = -10;
            sbgs4.x = 400; sbgs4.y = 10;
            sbgs5.x = 135; sbgs5.y = 55;
            sbgs6.x = 400; sbgs6.y = 35;
        break;
        default:
            sbgs1.x = 102; sbgs1.y = 60;
            sbgs2.x = 80; sbgs2.y = 80;
            sbgs3.x = 102; sbgs3.y = 60;
            sbgs4.x = 100; sbgs4.y = -50;
            sbgs5.x = 100; sbgs5.y = -10;
            sbgs6.x = 80; sbgs6.y = 30;
    }
}
checkDescrSize();

function changeBGPosition(imgNumber) {
    services.style.backgroundPosition = ServicesBGStyles[imgNumber].x + "%"+ " "
                                      + ServicesBGStyles[imgNumber].y + "%";
}
changeBGPosition(0);


serviceElements[0].classList.add("services_selected"); //делаем 1-й пункт Services активным по-умолчанию
serviceDescriptions[0].style.opacity = 1;        //а также описание к нему видимым

serviceElements.forEach(li => {
    li.addEventListener("click", () => { //вешаем на каждый li обработчик события
        for(let i=0; i<serviceElements.length; i++) {
            if(serviceElements[i].classList.contains("services_selected")){//выключаем ранее включенный эл-т
                serviceElements[i].classList.remove("services_selected");
                serviceDescriptions[i].style.opacity = 0;
            }
        }
        li.classList.add("services_selected");    //дедаем выбранный эл-т видимым
        let i = serviceElements.indexOf(li);      //получаем его индекс
        services.style.backgroundImage = "url("+ServicesBGStyles[i].url+")";
        checkDescrSize();
        changeBGPosition(i);
        serviceDescriptions[i].style.opacity = 1; //и используем его, чтобы сделать видимым нужное описание
    }, true);
});


// PORTFOLIO
// присваиваем select и его опции отдельным переменным
let pfolioSel = document.querySelector("#portfolio_sel");
let pfolioOptions = pfolioSel.getElementsByTagName("option");
// сохраняем выбранный option в переменную sIndex
let sIndex = pfolioSel.selectedIndex;
// ранее выбранный option будет в переменной prev
let prev = sIndex;
// делаем изначально выбранный option невидимым в выпадающем списке
pfolioOptions[sIndex].style.display = 'none';
// вешаем на select обработчик события change, который при срабатывании
// обновляет sIndex и в случае, если sIndex отличается от prev,
// делает видимым предыдущий скрытый option и не видимым новый,
// prev обновляется.
pfolioSel.addEventListener("change", ()=>{
    sIndex = pfolioSel.selectedIndex;
    if(prev !== sIndex) {
        pfolioOptions[prev].style.display = 'block';
        pfolioOptions[sIndex].style.display = 'none';
        prev = sIndex;
    }
});

let portfolioItems = Array.from(document.querySelector("#portfolio_block").querySelectorAll(".portfolio_example"));
portfolioItems.forEach(item => {
    item.insertAdjacentHTML("afterbegin", '<div class="see_full_project">SEE FULL PROJECT</div>');
    item.firstElementChild.setAttribute('data-show', 'false');
    
    item.addEventListener('click' && 'mouseover', (e) => {
        function check() {
            return new Promise((resolve)=>{
                let p = 0;
                let t = setInterval(()=>{
                    p++;
                    console.log(p);
                    if (p >= 2) {
                        clearInterval(t);
                        resolve(p);
                    }
                }, 200);
                item.addEventListener('mouseout', ()=>{
                    clearInterval(t);
                    if (p >= 2) {
                        resolve(p);
                    }
                })
            })
        }
        let promise1 = check();
        promise1.then(() => {
            let t2 = setTimeout(()=> {
                let x = portfolioItems.findIndex(el => {
                    return el.firstElementChild.dataset.show === "true";
                });
                if(x !== -1) {
                    portfolioItems[x].firstElementChild.style.display = 'none';
                    portfolioItems[x].firstElementChild.dataset.show = 'false';
                }
                item.firstElementChild.style.display = 'flex';
                item.firstElementChild.dataset.show = "true";
            }, 1000);
        }, ()=>{console.log("Что-то пошло не так...")})
        
    });
});
