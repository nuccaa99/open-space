let okBtn = document.getElementById('ok-btn');
const password = document.getElementById('password');

const checkbox = document.querySelectorAll('input[type=checkbox]');
const levers = document.querySelectorAll('input[type=range]');
const launch = document.getElementById('launch');
let rocket = document.querySelector('.rocket');

const disableInputs = () => {
    checkbox.forEach(function (e) {
        e.setAttribute('disabled', '');
    })

    levers.forEach(function (e) {
        e.setAttribute('disabled', '');
    })

    launch.setAttribute('disabled', '');
}

disableInputs();

const enableInputs = () => {
    checkbox.forEach(function (e) {
        e.removeAttribute('disabled');
    })

    levers.forEach(function (e) {
        e.removeAttribute('disabled');
    })

    password.setAttribute('disabled', '');
    okBtn.setAttribute('disabled', '');
}


const switchOn = () => {
    password.value === 'TrustNo1' ? enableInputs() : console.log('not valid');
}

okBtn.addEventListener("click", () => {
    switchOn();
})



function enableLaunch() {
    let checkedBoxes;
    let maxedRanges;
    checkbox.forEach(function (e){
        if(!e.checked) {
            checkedBoxes=false;
        }
        checkedBoxes=true;
    })
    levers.forEach(function (e){
        if(e.value<100) {
            maxedRanges=false;
        }
        maxedRanges=true;
    })
    if(checkedBoxes && maxedRanges) {
        launch.removeAttribute("disabled");

    } else {
        launch.setAttribute('disabled', '');
    }
}

function fly() {
    setTimeout( function() {
        rocket.style.left = '500px';
        rocket.style.top = '150px';
    }, 500);
    setTimeout( function() {
        rocket.style.left = '600px';
        rocket.style.top = '75px';
    }, 750);
    setTimeout( function() {
        rocket.style.left = '700px';
        rocket.style.top = '0px';
    }, 1000);
    setTimeout( function() {
        rocket.style.left = '800px';
        rocket.style.bottom = '75px';
        rocket.style.transform = 'rotate(85deg)';
    }, 1250);
    setTimeout( function() {
        rocket.style.left = '900px';
        rocket.style.bottom = '150px';
    }, 1500);
    setTimeout( function() {
        rocket.style.left = '1000px';
        rocket.style.bottom = '225px';
    }, 1750);
    setTimeout( function() {
        rocket.style.left = '1100px';
        rocket.style.bottom = '300px';
    }, 2000);
    setTimeout( function() {
        rocket.style.left = '1200px';
        rocket.style.bottom = '375px';
    }, 2250);
    setTimeout( function() {
        rocket.style.left = '1400px';
        rocket.style.bottom = '500px';
    }, 2500);
    setTimeout( function() {
        rocket.style.left = '1600px';
        rocket.style.bottom = '600px';
    }, 2750);


}

checkbox.forEach( button => {
    button.onchange = enableLaunch;
});
levers.forEach( button => {
    button.onchange = enableLaunch;
});
launch.addEventListener('click', () => fly());

