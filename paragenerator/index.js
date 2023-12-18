const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

//this function will give random once at at a time

const generateword = (n) => {
  let text = "";
  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < n; i++) {
    const random = (Math.random() * 25).toFixed(0);
    text = text + letters[random];
  }
  return text;
};

//generate random this will decide how may time above function will run

const generatepara = () => {
  //getting value from enter no button;

  let numOfWords = Number(input.value);

  //creating paragraph element
  const para = document.createElement("p");

  //creating random variable
  let data = "";
  for (let i = 0; i < numOfWords; i++) {
    //get random number
    const randomNumber = (Math.random() * 15).toFixed(0);

    // give that random number to
    data = data + generateword(randomNumber);

    //send this number to above created function,with spaces ;
    data = data + " ";
  }
  //data string we have created
  para.innerText = data;

  //set that test attribute to paragraph attribute
  para.setAttribute("class", "paras");

  //apend this created para in actual web page
  container.append(para);
};
