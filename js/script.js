emailjs.init('AxW4BXAbeQVbfueqH');

const consultationHeader = document.querySelector('.consultation-header');
const consultationForm = document.querySelector('#consultation-form');

document.querySelector('.free-consultation-btn').addEventListener('click', function() {
    consultationHeader.classList.add('slide-in');
    document.querySelector('.consultation-form').style.display = 'block';
});

consultationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(consultationForm);
    var submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.innerHTML = 'Loading...';
    }
    emailjs.sendForm('uaz9itp', 'cdfwsep', consultationForm, 'AxW4BXAbeQVbfueqH')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            if (submitButton) {
                submitButton.innerHTML = 'Submitted';
                setTimeout(function() {
                    submitButton.innerHTML = 'Submit';
                }, 1);
            }
            consultationHeader.classList.remove('slide-in');
            consultationHeader.classList.add('slide-out');
            setTimeout(function() {
                consultationHeader.classList.remove('slide-out');
                document.querySelector('.consultation-form').style.display = 'none';
            }, 500);
        }, function(error) {
            console.log('FAILED...', error);
        });
});

document.getElementById('options').addEventListener('change', function() {
    var selectedValue = this.value;
    var submenu1 = document.getElementById('submenu1');
    var submenu2Container = document.getElementById('submenu2-container');

    if (selectedValue === 'Repair') {
        submenu1.style.display = 'block';
        submenu2Container.style.display = 'none';
    } else if (selectedValue === 'Tutoring') {
        submenu1.style.display = 'none';
        submenu2Container.style.display = 'flex';
    } else {
        submenu1.style.display = 'none';
        submenu2Container.style.display = 'none';
    }
});

document.querySelector('.header').addEventListener('mousemove', function(e) {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth: width, offsetHeight: height } = target;
    const moveX = (offsetX / width) * 5;
    const moveY = (offsetY / height) * 5;

    target.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});