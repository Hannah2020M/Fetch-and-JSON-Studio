
window.addEventListener("load", async function () {
    let astronaut = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            // console.log(response);
            return (response.json());
        })
        .then(function (response) {
            // sort our stuff by hours in Space response is an array of objects
            //create an anon func a and b will be an astronaut object
            let sortedAstronauts = response.sort(function(a,b){return a.hoursInSpace - b.hoursInSpace} )

            //console.log(response);
            //return response;
            let myContainer = document.getElementById('container');
            for (let i=0; i<response.length; i++){
                console.log(response[i]);
                let allMyHtml = "";
                let myHtml = `
                <div class="astronaut">
   <div class="bio">
      <h3>${response[i].firstName} ${response[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${response[i].hoursInSpace}</li>
         <li ${astronaut.active ? 'style="color:green;"':""}>Active:${response[i].active}</li>
         <li>Skills: ${response[i].skills.join(', ')}</li>
      </ul>
   </div>
   <img class="avatar" src="${response[i].picture}">
</div>
                `;
                allMyHtml += myHtml;
            }
            myContainer.innerHTML = allMyHtml;
        });
    //console.log(astroInfo);
    // const container = document.getElementById("container");
    // astroInfo.map(astro => {
    //     //return console.log(astro.firstName);
    //     // return container.innerHTML +=`<h2>${astro.firstName } ${astro.lastName} </h2>`
    //     return container.innerHTML += `<div class="astronaut">
    //     <div class="bio">
    //     <h3>${astro.firstName } ${astro.lastName}</h3>
    //     <ul>
    //        <li>Hours in space: ${astro.hoursInSpace}</li>
    //        <li>Active: false</li>
    //        <li>Skills: ${astro.skills}</li>
    //     </ul>
    //  </div>
    //  <img class="avatar" src="picture/${astro.picture}">
    //  </div>`
    // })


    //
    // console.log(astroInfo[0].firstName);
    // console.log(astroInfo[0].lastName);

});




// // TODO: add code here

// window.addEventListener("load", async function () {
//     let astroInfo = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
//         .then(function (response) {
//             // console.log(response);
//             return (response.json());
//         })
//         .then(function (response) {
//             console.log(response);
//             return response;
//         });
//     //console.log(astroInfo);
//     const container = document.getElementById("container");
//     astroInfo.map(astro => {
//         //return console.log(astro.firstName);
//         // return container.innerHTML +=`<h2>${astro.firstName } ${astro.lastName} </h2>`
//         return container.innerHTML += `<div class="astronaut">
//         <div class="bio">
//         <h3>${astro.firstName } ${astro.lastName}</h3>
//         <ul>
//            <li>Hours in space: ${astro.hoursInSpace}</li>
//            <li>Active: false</li>
//            <li>Skills: ${astro.skills}</li>
//         </ul>
//      </div>
//      <img class="avatar" src="picture/${astro.picture}">
//      </div>`
//     })


//     //
//     // console.log(astroInfo[0].firstName);
//     // console.log(astroInfo[0].lastName);

// });

