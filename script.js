const tabs = document.querySelectorAll('.tab');

const sections = document.querySelectorAll('.menu-section');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        tabs.forEach(btn => {
            btn.classList.remove('active');
        });

        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        tab.classList.add('active');

        const target =
            document.getElementById(
                tab.dataset.tab
            );

        target.classList.add(
            'active-section'
        );

    });

});
