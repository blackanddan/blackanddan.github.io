const requestURL = "/blackanddan.github.io/CIT230/lesson9/json/towndata.json";

fetch(requestURL)
  .then(response => {
    response.json()
      .then(
        response => {
          const towns = response.towns;

          towns.forEach(

              (town, index) => {
                  if (town.name .toLowerCase() === 'Fish Haven'){
                      //fish haven
                      document.querySelector('#fishHavenYearFounded')
                        .textContent = town.year
                  }
              }
          );
        }
      )
    });