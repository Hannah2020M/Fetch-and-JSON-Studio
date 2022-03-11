
window.addEventListener("load", async function () {
    let astroInfo = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            // console.log(response);
            return (response.json());
        })
        .then(function (response) {
            console.log(response);
            return response;
        });
    //console.log(astroInfo);
    const container = document.getElementById("container");
    astroInfo.map(astro => {
        //return console.log(astro.firstName);
        // return container.innerHTML +=`<h2>${astro.firstName } ${astro.lastName} </h2>`
        return container.innerHTML += `<div class="astronaut">
        <div class="bio">
        <h3>${astro.firstName } ${astro.lastName}</h3>
        <ul>
           <li>Hours in space: ${astro.hoursInSpace}</li>
           <li>Active: false</li>
           <li>Skills: ${astro.skills.map(skill => skill)}</li>
        </ul>
     </div>
     <img class="avatar" src="${astro.picture}">
     </div>`
    })


    //
    // console.log(astroInfo[0].firstName);
    // console.log(astroInfo[0].lastName);

});

