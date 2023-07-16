// Create elements
const body = document.body;

const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg navbar-light bg-orange sticky-top';
body.appendChild(nav);

const navBrand = document.createElement('a');
navBrand.className = 'navbar-brand text-white ms-3';
navBrand.href = '#';
navBrand.textContent = 'Nationality';
nav.appendChild(navBrand);

const navButton = document.createElement('button');
navButton.className = 'navbar-toggler bg-light';
navButton.type = 'button';
navButton.setAttribute('data-bs-toggle', 'collapse');
navButton.setAttribute('data-bs-target', '#navbarSupportedContent');
navButton.setAttribute('aria-controls', 'navbarSupportedContent');
navButton.setAttribute('aria-expanded', 'false');
navButton.setAttribute('aria-label', 'Toggle navigation');
nav.appendChild(navButton);

const navButtonIcon = document.createElement('span');
navButtonIcon.className = 'navbar-toggler-icon';
navButton.appendChild(navButtonIcon);

const navCollapse = document.createElement('div');
navCollapse.className = 'collapse navbar-collapse';
navCollapse.id = 'navbarSupportedContent';
nav.appendChild(navCollapse);

const ul = document.createElement('ul');
ul.className = 'navbar-nav ms-auto me-3';
navCollapse.appendChild(ul);

const li = document.createElement('li');
li.className = 'nav-item active';
ul.appendChild(li);

const navLink = document.createElement('a');
navLink.className = 'nav-link text-white ms-3';
navLink.href = '#';
navLink.textContent = 'Home';
li.appendChild(navLink);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.className = 'd-block mx-auto w-50 bg-light border-1 form-control mt-5';
searchInput.id = 'search';
searchInput.placeholder = 'Enter search text';
body.appendChild(searchInput);

const searchButton = document.createElement('input');
searchButton.type = 'button';
searchButton.className = 'd-block mx-auto bg-warning rounded mt-3';
searchButton.name = 'Search';
searchButton.title = 'Search any name';
searchButton.value = 'Search';
searchInput.id = 'search_button';
searchInput
body.appendChild(searchButton);

const table = document.createElement('table');
table.className = 'table table-bordered border-warning w-50 mx-auto my-5 table-dark';
body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const trHead = document.createElement('tr');
thead.appendChild(trHead);

const th1 = document.createElement('th');
th1.setAttribute('scope', 'col');
th1.className = 'bg-transparent';
th1.textContent = 'Country';
trHead.appendChild(th1);

const th2 = document.createElement('th');
th2.setAttribute('scope', 'col');
th2.className = 'bg-transparent';
th2.textContent = 'Probability';
trHead.appendChild(th2);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

// Create table headers

// Network call

let country = [];


const apiRead = async (value) => {
    try {
        let url = new URL("https://api.nationalize.io");
        url.searchParams.append("name", value);
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                Array.from(tbody.children).forEach((child) => {
                    child.remove();
                })
                
                let countries = data.country;
                let countries_mod = [countries[0], countries[1]];
                

                for (let country of countries_mod) {
                    
                    const trBody = document.createElement('tr');
                    tbody.appendChild(trBody);

                    const td1 = document.createElement('td');
                    td1.setAttribute('scope', 'col');
                    td1.className = 'bg-transparent';
                    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
                    td1.textContent = regionNames.of(country.country_id);
                    trBody.appendChild(td1);

                    const td2 = document.createElement('td');
                    td2.setAttribute('scope', 'col');
                    td2.className = 'bg-transparent';
                    td2.textContent = country.probability;
                    trBody.appendChild(td2);
                }
            })
    }
    catch (error) {
        console.log("Error:", error);
        alert(`Error: ${error}`);
    }
}


searchButton.addEventListener("click", () => {
    let text = searchInput.value;
    searchInput.select();
    apiRead(text);
})

