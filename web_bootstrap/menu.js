
fetch("menu.html")
  .then(res => res.text())
  .then(data => {
      document.getElementById("menu-container").innerHTML = data;

      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
          sidebarToggle.addEventListener('click', event => {
              event.preventDefault();
              document.body.classList.toggle('sb-sidenav-toggled');
          });
      }
  })
  .catch(err => console.error("Error loading menu:", err));
