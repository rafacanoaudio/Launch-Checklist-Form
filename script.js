// Write your JavaScript code here!
window.addEventListener("load", function() {
   let json = [];
   let i = Math.floor(Math.random()*6);
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[i].name}</li>
                     <li>Diameter: ${json[i].diameter}</li>
                     <li>Star: ${json[i].star}</li>
                     <li>Distance from Earth: ${json[i].distance}</li>
                     <li>Number of Moons: ${json[i].moons}</li>
                  </ol>
                  <img src="${json[i].image}">
                  `;
               });
            });


   let form = document.querySelector("form");
   let button = document.getElementById("formSubmit");

   // add event handler for when button clicked

   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }
      //CONTINUE HERE: ADDING ALERTS FOR INVALID INPUT TYPES****************
      if (Number(pilotName.value)) {
         alert(pilotName.value + " is not a valid Pilot Name.");
         event.preventDefault();
      }
      if(Number(copilotName.value)) {
         alert(copilotName.value + " is not a valid Co-pilot Name.");
         event.preventDefault();
      }
      // if (typeof pilotName.value != "string") {
      //    alert(pilotName.value + " is not a valid Pilot Name.");
      //    event.preventDefault();
      // }
      // if (copilotName.value !== "string") {
      //    alert(copilotName.value + " is not a valid Co-pilot Name.");
      //    event.preventDefault();
      // }
      if (isNaN(fuelLevel.value)) {
         alert("Please enter valid Fuel Level");
         event.preventDefault();
      }
      if(isNaN(cargoMass.value)) {
         alert("Please enter valid Cargo Mass");
         event.preventDefault(); 
      }
      
   
      let pilot = document.querySelector("#pilotStatus");
      pilot.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
      let copilot = document.querySelector("#copilotStatus");
      copilot.innerHTML =`Co-pilot ${copilotName.value} is ready for launch.`;

      if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
         let lowFuel = document.querySelector("#fuelStatus");
         lowFuel.innerHTML = "Fuel level too low for launch!"
         let overCargo = document.querySelector("#cargoStatus");
         overCargo.innerHTML = "Cargo exceeds allowed weight!"
         let launchStatus = document.querySelector("#launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000) {
         let lowFuel = document.querySelector("#fuelStatus");
         lowFuel.innerHTML = "Fuel level too low for launch!"
         let overCargo = document.querySelector("#cargoStatus");
         overCargo.innerHTML = "Cargo mass low enough for launch"
         let launchStatus = document.querySelector("#launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else if (cargoMass.value > 10000 && fuelLevel.value >= 10000) {
         let overCargo = document.querySelector("#cargoStatus");
         overCargo.innerHTML = "Cargo exceeds allowed weight!"
         let lowFuel = document.querySelector("#fuelStatus");
         lowFuel.innerHTML = "Fuel level high enough for launch"
         let launchStatus = document.querySelector("#launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

        } else if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
         let launchStatus = document.querySelector("#launchStatus");
         let overCargo = document.querySelector("#cargoStatus");
         overCargo.innerHTML = "Cargo mass low enough for launch"
         let lowFuel = document.querySelector("#fuelStatus");
         lowFuel.innerHTML = "Fuel level high enough for launch"
         launchStatus.innerHTML = "Shuttle ready for launch";
         launchStatus.style.color = "green";
        }

      event.preventDefault();  
      let faultyItems = document.querySelector("#faultyItems");
      faultyItems.style.visibility = "visible";

   });
   
   
   
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
