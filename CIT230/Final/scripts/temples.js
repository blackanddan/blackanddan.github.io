const requestURL = 'https://blackanddan.github.io/CIT230/Final/json/temples.json';

fetch(requestURL)
  .then(response => {
    response.json()
      .then(
        response => {
          const temples = response.temples;

          temples.forEach(
            
            (temple) => {
              //DEBUG:
              console.log(temple.name)

              if (temple.name.toLowerCase() === 'salt lake temple') {
                //Salt Lake Temple
                document.querySelector('#saltOrdiance')
                    .textContent = temple.ordianceSchedule;

                document.querySelector('#yearDedicatedSalt')
                    .textContent = temple.yearDedicated;

                    document.querySelector('#saltAddress')
                    .textContent = temple.address;

                    document.querySelector('#saltEmail')
                    .textContent = temple.email;

                    document.querySelector('#saltTele')
                    .textContent = temple.telephone;

                    document.querySelector('#saltServices')
                    .textContent = temple.services;

                    document.querySelector('#saltHistory')
                    .textContent = temple.history;

                    document.querySelector('#saltLake')
                    .setAttribute('src', 'images/' + temple.photo);

    
              }
              else if (temple.name.toLowerCase() === 'calgary alberta temple') {
                //Salt Lake Temple
                document.querySelector('#calOrdiance')
                    .textContent = temple.ordianceSchedule;

                document.querySelector('#yearDedicatedCal')
                    .textContent = temple.yearDedicated;

                    document.querySelector('#calAddress')
                    .textContent = temple.address;

                    document.querySelector('#calEmail')
                    .textContent = temple.email;

                    document.querySelector('#calTele')
                    .textContent = temple.telephone;

                    document.querySelector('#calServices')
                    .textContent = temple.services;

                    document.querySelector('#calHistory')
                    .textContent = temple.history;

                    document.querySelector('#calgary')
                    .setAttribute('src', 'images/' + temple.photo);

    
              }
              else if (temple.name.toLowerCase() === 'gilbert arizona temple') {
                //Salt Lake Temple
                document.querySelector('#ariOrdiance')
                    .textContent = temple.ordianceSchedule;

                document.querySelector('#yearDedicatedAri')
                    .textContent = temple.yearDedicated;

                    document.querySelector('#ariAddress')
                    .textContent = temple.address;

                    document.querySelector('#ariEmail')
                    .textContent = temple.email;

                    document.querySelector('#ariTele')
                    .textContent = temple.telephone;

                    document.querySelector('#ariServices')
                    .textContent = temple.services;

                    document.querySelector('#ariHistory')
                    .textContent = temple.history;

                    document.querySelector('#arizona')
                    .setAttribute('src', 'images/' + temple.photo);

    
              }
               else if (temple.name.toLowerCase() === 'manila philippines temple') {
                //Salt Lake Temple
                document.querySelector('#manilaOrdiance')
                    .textContent = temple.ordianceSchedule;

                document.querySelector('#yearDedicatedManila')
                    .textContent = temple.yearDedicated;

                    document.querySelector('#manilaAddress')
                    .textContent = temple.address;

                    document.querySelector('#manilaEmail')
                    .textContent = temple.email;

                    document.querySelector('#manilaTele')
                    .textContent = temple.telephone;

                    document.querySelector('#manilaServices')
                    .textContent = temple.services;

                    document.querySelector('#manilaHistory')
                    .textContent = temple.history;

                    document.querySelector('#manila')
                    .setAttribute('src', 'images/' + temple.photo);
    
              }
              
              }
            
       )
    }
    )
});