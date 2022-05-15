document.querySelector("button").addEventListener("click", () => {
  let date = document.querySelector("input").value;
  console.log(date);

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=ZvbFtlbeDZxxmkzOPw0Y7dFDG29T9YnCZgNNxjhn&date=${date}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("main > div").innerHTML = `
      <h2>${data.title}</h2>
      <img class="image" src="${data.hdurl}" />
      <p>${data.explanation}</p>
      `;
    });
});
