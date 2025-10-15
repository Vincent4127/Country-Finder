let countries = [];

fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
    .then(response => response.json())
    .then((json) => {
        let select = document.getElementById("countrySelect");
        json.forEach(country => {
            let option = document.createElement("option");
            option.innerHTML = country.name.common;
            option.value = country.name.common;
            select.appendChild(option);
        });
    })


function displayCountryInfo() {
    let container = document.getElementById("container");
    let select = document.getElementById("countrySelect");

    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
        .then(response => response.json())
        .then((json) => {
            (json).forEach(country => {
                if (select.value === country.name.common) {
                    alert(`${country.name.common}, \n Capital: ${country.capital}, \n Region: ${country.region}`);
                }

            })
            container.appendChild(info)
        })
        ;

}

function displayAllCountries() {
    let container = document.getElementById("allCountries");

    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
        .then(response => response.json())
        .then((json) => {
            (json).forEach(country => {
                let countries = document.createElement("img");
                countries.src = country.flags.png;
                countries.addEventListener("click", () => {
                    alert(`${country.name.common}, \n Capital: ${country.capital}, \n Region: ${country.region}`);
                })
                container.appendChild(countries);
            })
        });

}

function searchCountry() {
    let searchdiv = document.getElementById("Search");
    let search = document.getElementById("countryInput").value;

    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
        .then(response => response.json())
        .then((json) => {
            (json).forEach(country => {
                if (search === country.name.common) {
                    alert(`${country.name.common}, \n Capital: ${country.capital}, \n Region: ${country.region}`);
                }

            })
            searchdiv.appendChild(info)
        })
        ;
}

