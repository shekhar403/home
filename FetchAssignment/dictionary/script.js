// Create elements
const body = document.body;

const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg navbar-light bg-orange sticky-top';
body.appendChild(nav);

const navBrand = document.createElement('a');
navBrand.className = 'navbar-brand text-white ms-3';
navBrand.href = '#';
navBrand.textContent = 'Dictionary';
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
searchInput.placeholder = 'Enter word';
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
th1.textContent = 'Word';
trHead.appendChild(th1);

const th2 = document.createElement('th');
th2.setAttribute('scope', 'col');
th2.className = 'bg-transparent';
th2.textContent = 'Meaning';
trHead.appendChild(th2);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

// Create table headers

// Network call

let country = [];


const apiRead = async (value) => {
    try {
        let url = new URL(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                data.forEach(word => {
                    const phonetic = word.phonetic;
                    word.meanings.forEach(meaning => {
                        const definitions = meaning.definitions;
                        const partOfSpeech = meaning.partOfSpeech;
                        definitions.forEach(definition => {
                            // word
                            // part of speech
                            // definition.definition
                            const trBody = document.createElement('tr');
                            tbody.appendChild(trBody);

                            const td1 = document.createElement('td');
                            td1.setAttribute('scope', 'col');
                            td1.className = 'bg-transparent';
                            td1.textContent = word.word;
                            trBody.appendChild(td1);

                            const td2 = document.createElement('td');
                            td2.setAttribute('scope', 'col');
                            td2.className = 'bg-transparent';

                            const posText = document.createElement("p");
                            posText.textContent = `Part of Speech : ${partOfSpeech}`;
                            const definitionText = document.createElement("p");
                            definitionText.textContent = `Definition: ${definition.definition}`;
                            const phoneticText = document.createElement("p");
                            phoneticText.textContent = `Phonetic: ${word.phonetic}`;

                            td2.appendChild(posText);
                            td2.appendChild(phoneticText);
                            td2.appendChild(definitionText);
                            
                            trBody.appendChild(td2);
                        })
                    })
                });


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

