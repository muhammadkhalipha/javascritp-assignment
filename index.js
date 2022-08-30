function changeBackground() {
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
  let hexcode = "";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * number.length);
    console.log(randomIndex);

    hexcode += number[randomIndex];
    //color = color + number[randomIndex]
  }
  document.getElementsByTagName("body")[0].style.background = `#${hexcode}`;
  document.body.style.background = `#${hexcode}`;
}
// function changeBackground() {
//   let color = ["red", "blue", "yellow"];
//   let usedColor = "";
//   let randomIndex = Math.floor(Math.random() * color.length);
//   usedColor += color[randomIndex];
//   console.log(randomIndex);

//   // document.getElementsByTagName("body")[0].style.background = `#${hexcode}`;
//   document.body.style.background = `${usedColor}`;
// }
