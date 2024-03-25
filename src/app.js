/* eslint-disable */

import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["footballer", "catdog", "hawk", "runner"];
  let action = ["broke my", "hit my", "bit my", "stole my", "hide my"];
  let possetion = ["playstation", "nintendo", "sneakers", "hat", "backpack"];
  let where = [
    "on my porch",
    "in my living room",
    "in my house",
    "on my roof",
    "in my garage"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posseIndx = Math.floor(Math.random() * possetion.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[posseIndx] +
    " " +
    where[wheIndx]
  );
};
