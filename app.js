let btn = document.getElementById("fetchie");
let container = document.getElementById("container");
// WITHOUT JQUERY
// btn.onclick = () => {
//   let xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", () => {
//     console.log("Data is loaded", xhr.status);
//     xhr.status === 200
//       ? renderHTML(JSON.parse(xhr.responseText))
//       : alert("failed with status " + xhr.status);
//   });
//   xhr.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
//   xhr.send();
// };

const renderHTML = data => {
  data.forEach(animal => {
    let htmlString = `${animal.name} is a ${animal.species} that likes to eat`;
    animal.foods.likes.forEach(food => {
      htmlString += ` ${food} `;
    });

    let newPar = document.createElement("p");
    newPar.innerHTML = htmlString;
    $("#container").append(newPar);
  });
};

let i = 1;
while (i <= 3) {
  $("#fetchie").on("click", function() {
    if (i === 3) {
      this.style.display = "none";
    }
    $.ajax({
      type: "GET",
      url: `https://learnwebcode.github.io/json-example/animals-${[i]}.json`,
      success: function(data) {
        renderHTML(data);
        i++;
      },
      error: function() {
        alert("failed to get data");
      }
    });
  });
  break;
}
