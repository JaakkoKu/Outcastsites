const pages = [
    {title: "Main city", url: "maincity.html"},
    {title: "Other cities", url: ""},
    {title: "Fallen gods area", url: ""},
    {title: "Edron bossrun area", url: ""},
    {title: "Kingdom Farmlands", url: ""},
    {title: "Yalahar abysses of achernar", url: ""},
    {title: "Set upgrades", url: ""},
    {title: "Weapon and shield upgrades", url: ""},
    {title: "Access quests", url: ""},
    {title: "Vroengaard", url: "cities/Vroengaard.html"},
    {title: "Wild warrior cave", url: "cities/Wildwarriorcave.html"},
    {title: "World teleport", url: "cities/worldteleport.html"},
    {title: "Aberon", url: "cities/Aberon.html"},
    {title: "Adicama", url: "cities/adicama.html"},
    {title: "Drushak", url: "cities/drushak.html"},
    {title: "Edron/qutor's grove", url: "cities/edron.html"},
    {title: "Forbidden forest", url: "cities/forbidden.html"},
    {title: "Fendal", url: "cities/fendal.html"},
    {title: "Lithgow", url: "cities/Lithgow.html"},
    {title: "Snowmania", url: "cities/Snowmania.html"},
    {title: "Tarid", url: "cities/tarid.html"},
    {title: "Valmoor", url: "cities/valmoor.html"},
    {title: "Plains of gold", url: ""},
    {title: "Mysticon", url: ""},
    {title: "Wrecked ship", url: ""},
    {title: "Skyrider waterfalls", url: ""},
    {title: "Spaceship key", url: ""},
    {title: "Beluna", url: ""},
    {title: "Desert of zenith", url: ""},
    {title: "Yalahar", url: ""},
    {title: "Yalahar cirlces", url: ""},
    {title: "Yalahar spaceship", url: ""},
    { title: "Kingdom farmlands 1", url: "cities/kf/kingdom1.html" },
    { title: "Kingdom farmlands 2", url: "cities/kf/kingdom2.html" },
    {title: "Kingdom farmlands part 3", url: ""},
    {title: "Yalahar abysses of achernar part 1", url: ""},
    {title: "Yalahar abysses of achernar part 2", url: ""},
    {title: "Yalahar abysses of achernar part 3", url: ""},
    {title: "Spacewalk", url: ""},
    {title: "Achernar's prison", url: ""},
    {title: "Dark warrior set", url: ""},
    {title: "Zenith set to draconian set", url: ""},
    {title: "Draconia set to Fallen gods set", url: ""},
    {title: "Fallen gods set to Helarctos set", url: ""},
    {title: "Helarctos set to Dark overlord set", url: ""},
    {title: "Dark overlord set to Cyclip set", url: ""},
    {title: "Cyclip set to Craak slayer set", url: ""},
    {title: "Full hota quest", url: ""},
    {title: "Oceanic lizard weapon to skyrider weapon", url: ""},
    {title: "Cyclip shield quest", url: ""},
    {title: "Oceanic lizard shield quest", url: ""},
    {title: "Skyrider shield quest", url: ""}
 ];



  const searchBar = document.getElementById('search-bar');
  const suggestionsContainer = document.getElementById('suggestions');
  let activeIndex = -1;

  searchBar.addEventListener('input', function () {
    const query = searchBar.value.toLowerCase();
    suggestionsContainer.innerHTML = '';
    activeIndex = -1;

    if (query) {
      const filteredPages = pages.filter(page =>
        page.title.toLowerCase().includes(query)
      );

      filteredPages.forEach((page, index) => {
        const suggestion = document.createElement('div');
        suggestion.textContent = page.title;

        suggestion.addEventListener('click', () => {
          window.location.href = page.url;
        });
        suggestion.dataset.index = index;
        suggestionsContainer.appendChild(suggestion);
      });
    }
  });

  searchBar.addEventListener('keydown', function (e){
    const suggestions = suggestionsContainer.querySelectorAll('div');
    if(!suggestions.length) return;

    if(e.key=== 'ArrowDown'){
        activeIndex = (activeIndex + 1)% suggestions.length;
        updateActiveSuggestion(suggestions);
    } else if(e.key === 'ArrowUp'){
        activeIndex = (activeIndex -1 + suggestions.length)% suggestions.length;
        updateActiveSuggestion(suggestions);
    } else if(e.key==='Enter'){
        e.preventDefault();
        if(activeIndex > -1){
            suggestions[activeIndex].click();
        }
    }
  });

  document.addEventListener('click', (e) => {
    if (!suggestionsContainer.contains(e.target) && e.target !== searchBar) {
      suggestionsContainer.innerHTML = '';
    }
  });

  function updateActiveSuggestion(suggestions){
    suggestions.forEach((suggestion, index) => {
        suggestion.classList.toggle('active', index === activeIndex);
    });
  }