document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById("header-placeholder");
    const leftIconsPlaceholder = document.getElementById("left-icons");
  
    // Load JSON data and generate the navigation bar and icons
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const siteName = data.siteName;
        const menuItems = data.menuItems;
        const icons = data.icons;
        
        // Get the current page URL
        const currentPage = window.location.pathname.split("/").pop();
        
        // Generate the innerHTML for the navbar
        let navbarHTML = `
        <nav id="navbar">
            <a href="https://skylerhe.github.io/" id="site-name">${siteName}</a>
            <ul>
        `;

        // Add menu items to the navbar
        menuItems.forEach((item) => {
          navbarHTML += `
            <li>
              <a href="${item.link}" ${item.link === currentPage ? 'class="active"' : ''}>${item.name}</a>
            </li>
          `;
        });

        navbarHTML += `</ul></nav>`;

        // Set the generated HTML as the content of the navbar placeholder
        navbarPlaceholder.innerHTML = navbarHTML;
        
        // Generate the innerHTML for the left-side icons
        let iconsHTML = '';
        icons.forEach((icon) => {
          iconsHTML += `
            <a href="${icon.link}" target="_blank">
              <i class="${icon.icon}"></i>
              <span class="name">${icon.name}</span>
            </a>
          `;
        });


        // Set the generated HTML for the left-side icons
        leftIconsPlaceholder.innerHTML = iconsHTML;
      })
      .catch((error) => console.error("Error loading data.json:", error));
});
