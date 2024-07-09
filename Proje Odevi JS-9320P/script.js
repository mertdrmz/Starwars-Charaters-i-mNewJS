let charactersData = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine" ,
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      homeworld: "other",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

const button = document.getElementById("toggleButton");
let homeworldsRaw = charactersData.characters.map(
  (character) => character.homeworld ?? "other"
);
let homeworldsUnique = [...new Set(homeworldsRaw)];
let homeworldsUniqueLowercase = [];

for (let i = 0; i < homeworldsRaw.length; i++) {
  let lowercaseHomeworld = homeworldsRaw[i].toLowerCase();
  if (!homeworldsUniqueLowercase.includes(lowercaseHomeworld)) {
    homeworldsUniqueLowercase.push(lowercaseHomeworld);
  }
}

const homeworlds = homeworldsUniqueLowercase;
console.log(homeworlds);

let isActive = false;


  function renderCharacters() {
    const swCharactersContainer = document.getElementById("swCharacters2");
    const button = document.getElementById("toggleButton");
  
    if (swCharactersContainer.children.length === 0) {
      const radioContainer = document.createElement("div");
      radioContainer.id = "radioContainer";
  
      homeworlds.forEach((homeworld) => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = homeworld.toLowerCase();
        radioInput.name = "homeworld";
        radioInput.value = homeworld;
  
        const label = document.createElement("label");
        label.textContent = homeworld;
        label.setAttribute("for", radioInput.id);
  
        radioInput.addEventListener("change", function () {
          const selectedHomeworld = this.value;
          filterCharacters(selectedHomeworld);
        });
  
        radioContainer.appendChild(radioInput);
        radioContainer.appendChild(label);
      });
  
      swCharactersContainer.appendChild(radioContainer);
  
      const swDiv = document.createElement("div");
      swDiv.classList.add("row");
  
      let characterCards = "";
      for (let i = 0; i < charactersData.characters.length; i++) {
        let character = charactersData.characters[i];
        characterCards += `
            <div class="card" style="width: 18rem;">
              <img src="${character.pic}" alt="${character.name}">
              <h2>${character.name}</h2>
              <p>Homeworld: ${character.homeworld}</p>
            </div>
          `;
      }
  
      swDiv.innerHTML = characterCards;
      swCharactersContainer.appendChild(swDiv);
  
      button.innerText = "Karakterleri gizle";
      button.classList.replace("btn-primary", "btn-danger");
    } else {
      swCharactersContainer.innerHTML = "";
      button.innerText = "Karakterleri göster";
      button.classList.replace("btn-danger", "btn-primary");
    }
  }
  
function filterCharacters(selectedHomeworld) {
  const swCharactersContainer = document.getElementById("swCharacters2");
  const characterCards = charactersData.characters.filter((character) => {
    return (
      character.homeworld.toLowerCase() === selectedHomeworld.toLowerCase()
    );
  });

  const swDiv = document.createElement("div");
  swDiv.classList.add("row");

  let filteredCards = "";
  characterCards.forEach((character) => {
    filteredCards += `
        <div class="card" style="width: 18rem;">
          <img src="${character.pic}" alt="${character.name}">
          <h2>${character.name}</h2>
          <p>Homeworld: ${character.homeworld}</p>
        </div>
      `;
  });

  swDiv.innerHTML = filteredCards;
  swCharactersContainer.appendChild(swDiv);
}

document
  .getElementById("toggleButton")
  .addEventListener("click", renderCharacters);

  function filterCharacters(selectedHomeworld) {
    const swCharactersContainer = document.getElementById("swCharacters2");
  
    
    const characterCards = charactersData.characters.filter(character => {
      
      if (character.homeworld) {
        return character.homeworld.toLowerCase() === selectedHomeworld.toLowerCase();
      }
      return false; 
    });
  
    
    const swDiv = document.createElement('div');
    swDiv.classList.add('row');
  
    let filteredCards = '';
    characterCards.forEach(character => {
      filteredCards += `
        <div class="card" style="width: 18rem;">
          <img src="${character.pic}" alt="${character.name}">
          <h2>${character.name}</h2>
          <p>Homeworld: ${character.homeworld}</p>
        </div>
      `;
    });
  
    swDiv.innerHTML = filteredCards;
    swCharactersContainer.innerHTML = ''; 
    swCharactersContainer.appendChild(swDiv);
  }
  