let sidebar = document.getElementById('sidebar');
let sidebarButton = document.getElementById('sidebar_button');
let content = document.getElementById('content');
let closeButton = document.getElementById('close_button');

closeButton.addEventListener("click", toggleSidebar)
sidebarButton.addEventListener("click", toggleSidebar)

function toggleSidebar() {
    if (sidebar.classList.contains("d-none")) {
        sidebar.classList.remove("d-none");
        sidebarButton.classList.add("d-none")
        content.classList.remove('col-md-12')
        content.classList.add('col-md-9')
    }
    else {
        sidebar.classList.add("d-none");
        sidebarButton.classList.remove("d-none")
        content.classList.remove('col-md-9')
        content.classList.add('col-md-12')
    }
}