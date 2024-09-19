document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);

      contents.forEach(content => content.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Set initial active tab (home)
  document.getElementById('home').classList.add('active');
});
