const requestURL = "json/towndata.json";

fetch(requestURL)
  .then(response => {
      response.json()
        .then(
          response => {
            const towns = response.towns;

            towns.forEach(

              (town) => {
                if (town.name.toLowerCase() === 'fish haven') {
                  //Fish Haven
                  document.querySelector('#mottoFishHaven')
                    .textContent = town.motto;

                  document.querySelector('#fishHavenYearFounded')
                    .textContent = town.yearFounded;

                  document.querySelector('#fishPopulation')
                    .textContent = town.currentPopulation;

                  document.querySelector('#fishRainFall')
                    .textContent = town.averageRainfall;

                  document.querySelector('#fishHavenImage')
                    .setAttribute('src', 'images/' + town.photo);


                } else if (town.name.toLowerCase() === 'preston') {
                  //Preston
                  document.querySelector('#mottoPreston')
                    .textContent = town.motto;

                  document.querySelector('#prestonYearFounded')
                    .textContent = town.yearFounded;

                  document.querySelector('#prestonPopulation')
                    .textContent = town.currentPopulation;

                  document.querySelector('#prestonRainfall')
                    .textContent = town.averageRainfall;

                  document.querySelector('#prestonImage')
                    .setAttribute('src', 'images/' + town.photo);

                } else if (town.name.toLowerCase() === 'soda springs') {
                  //Soda Springs
                  document.querySelector('#mottoSodaSprings')
                    .textContent = town.motto;

                  document.querySelector('#sodaSpringsYearFounded')
                    .textContent = town.yearFounded;

                  document.querySelector('#sodaSpringsPopulation')
                    .textContent = town.currentPopulation;

                  document.querySelector('#sodaSpringsRainFall')
                    .textContent = town.averageRainfall;

                  document.querySelector('#sodaSpringsImage')
                    .setAttribute('src', 'images/' + town.photo);
                }
               }
              );
            }
          )
        });