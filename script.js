const cardsId = document.getElementById('wheelcardsId');
const wheelId1 = document.getElementById('wheelId1');
const wheelId2 = document.getElementById('wheelId2');
const cycleId = document.getElementById('cycleId');
const detailsId = document.getElementById('detailsId');
const checkoutBtn = document.getElementById('checkoutId');
const mainId = document.getElementById('mainId');
const checkId = document.getElementById('checkId');

const wheelItems = [{
        id: 1,
        src: './images/wheel1.png',
        title: 'Wheel Type 1'
    },
    {
        id: 2,
        src: './images/wheel2.png',
        title: 'Wheel Type 2'
    }, {
        id: 3,
        src: './images/wheel3.png',
        title: 'Wheel Type 3'
    }, {
        id: 4,
        src: './images/wheel4.png',
        title: 'Wheel Type 4'
    }
];

let total = '';

async function getWheelsOnId(id) {
    wheelId1.classList.add('wheel1_1_wrapper');
    wheelId2.classList.add('wheel1_2_wrapper');
    cycleId.classList.add('cycle_anim');
    wheelId1.removeAttribute('wheel1_1');
    wheelId2.removeAttribute('wheel1_2');
    const newFilter = wheelItems.filter((items) => items.id === id);

    await new Promise((resolve) => setTimeout(resolve, 500));

    wheelId1.classList.remove('wheel1_1_wrapper');
    wheelId2.classList.remove('wheel1_2_wrapper');
    wheelId1.style.backgroundImage = `url(${newFilter[0].src})`;
    wheelId2.style.backgroundImage = `url(${newFilter[0].src})`;
    wheelId1.className = "wheel1_1";
    wheelId2.className = "wheel1_2";
    
    await new Promise((resolve) => setTimeout(resolve,1500));
    cycleId.classList.remove('cycle_anim');
}

async function checkoutProduct () {
    cycleId.classList.add('cycle_pos');
    detailsId.style.opacity = 0;
    wheelId1.classList.add('rotate');
    wheelId2.classList.add('rotate');
    checkoutBtn.style.display = 'none';
    await new Promise(resolve => setTimeout(resolve, 2000))
    mainId.classList.add('main_bg');
    checkId.style.display = 'flex';
}

async function backToProduct () {
    cycleId.classList.remove('cycle_pos');
    wheelId1.classList.remove('rotate');
    wheelId2.classList.remove('rotate');
    checkId.style.display = 'none';
    await new Promise(resolve=>setTimeout(resolve, 2500));
    mainId.classList.remove('main_bg');
    checkoutBtn.style.display = 'block';
    detailsId.style.opacity = 1;
}
 
wheelItems.forEach((wheel) => {
    const {
        id,
        title,
        src
    } = wheel;
    let newEle = `
        <a href = "#" class="wheels" onclick = "getWheelsOnId(${id})">
            <img class="cards_wheels" src="${src}" alt="wheel${id}"/>
            <span>${title}</span>
        </a>
    `;
    total += newEle;
})
cardsId.innerHTML = total;