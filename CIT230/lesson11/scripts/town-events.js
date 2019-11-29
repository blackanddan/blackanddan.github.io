//APT for Town Events
let resquestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(resquestURL).then(response => {
    response.json().then(response => {
        const towns = response.towns;
        towns.forEach(towns => {

            // Fish Haven
            if (towns.name.toLowerCase() === "fish haven" && 
            document.getElementById(`cityID`).value === '5585010') {

                for (let i = 0; i < towns.events.length; i++) {
                    let events = document.createElement('div');
                    events.textContent = towns.events[i];
                    document.querySelector("#fishHavenEvents").appendChild(events);
                }

            // Preston
            } else if (towns.name.toLowerCase() === "preston" && 
            document.getElementById(`cityID`).value === '5604473') {

                for (let i = 0; i < towns.events.length; i++) {
                    let events = document.createElement('div');
                    events.textContent = towns.events[i];
                    document.querySelector("#prestonEvents").appendChild(events);
                }


            // Soda Springs
            } else if (towns.name.toLowerCase() === "soda springs" && 
            document.getElementById(`cityID`).value === '5607916') {

                for (let i = 0; i < towns.events.length; i++) {
                    let events = document.createElement('div');
                    events.textContent = towns.events[i];
                    document.querySelector("#sodaSpringsEvents").appendChild(events);
                }
            }
        });
    });
});