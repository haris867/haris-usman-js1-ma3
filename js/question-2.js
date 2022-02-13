// Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=85912d1d3ec44f43afe3454c2e192e15";

const divContainer = document.querySelector(".div-container");

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const result = data.results;

    divContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i === 8) {
        break;
      }
      divContainer.innerHTML += ` <div class="game-box">
                                                <div>Name: ${result[i].name}</div>
                                                <div>Rating: ${result[i].rating}</div>
                                                <div>Number of tags: ${result[i].tags.length}</div>
                                    </div>`;
    }
    divContainer.classList.remove("loading");
  } catch (error) {
    divContainer.innerHTML = "An error has occurred";
    divContainer.classList.remove("loading");
  }
}

getData();
