document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById("header-placeholder");
  
    // Load JSON data and generate the navigation bar
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const siteName = data.siteName;
        const menuItems = data.menuItems;
        
        // Get the current page URL
        const currentPage = window.location.pathname.split("/").pop();
        // Generate the innerHTML for the navbar
        let navbarHTML = `
        <nav id="navbar">
            <a href="home.html" id="site-name">${siteName}</a>
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

        // Set the generated HTML as the content of the placeholder
        navbarPlaceholder.innerHTML = navbarHTML;
    })
    .catch((error) => console.error("Error loading menu.json:", error));
});