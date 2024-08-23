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
    // Send email using EmailJS
    emailjs.sendForm('service_uaz9itp', 'template_cdfwsep', consultationForm, 'AxW4BXAbeQVbfueqH')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            consultationHeader.classList.add('slide-out');
            setTimeout(function() {
                consultationHeader.classList.remove('slide-in', 'slide-out');
                document.querySelector('.consultation-form').style.display = 'none';
            }, 500);
        }, function(error) {
            console.log('FAILED...', error);
        });
});
// "Animated" Header Background
document.querySelector('.header').addEventListener('mousemove', function(e) {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth: width, offsetHeight: height } = target;
    const moveX = (offsetX / width) * 5; // Smaller multiplier for slower movement
    const moveY = (offsetY / height) * 5;

    target.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});

