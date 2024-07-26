document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.classList.contains('hidden')) {
                targetElement.classList.remove('hidden');
                targetElement.style.maxHeight = targetElement.scrollHeight + 'px';
                targetElement.style.opacity = 1;
            } else {
                targetElement.style.maxHeight = 0;
                targetElement.style.opacity = 0;
                setTimeout(() => {
                    targetElement.classList.add('hidden');
                }, 300); // Wait for the animation to finish before hiding
            }
        });
    });
});
