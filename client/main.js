const complimentBtn = document.getElementById("complimentButton");
const falseBtn = document.getElementById("falseBtn");
const desireBtn = document.getElementById("desire-submit");
const desireBox = document.getElementById("answerbox");
const catBtn = document.getElementById("cat-button");
const dogBtn = document.getElementById("dog-button");
const nameSubBtn = document.getElementById("name-submit");
const deleteAccBtn = document.getElementById("delete-account");
const noBtn = document.getElementById("no-button")

let dogcount = 0;
let catcount = 0;

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((err) => console.log(err));
};

const getDesire = () => {
  axios
    .put(`http://localhost:4000/api/${desireBox.value}`)
    .then((res) => {
      let data = res.data;
      alert(data);
    })
    .catch((err) => console.log(err.message));
  reload();
};

const addDogCounter = () => {
  dogcount++;
  axios
    .put(`http://localhost:4000/api/dog/${dogcount}`)
    .then((res) => {
      let data = res.data;
      alert(data);
    })
    .catch((err) => err.message);
};

const addCatCounter = () => {
  catcount++;
  axios
    .put(`http://localhost:4000/api/cat/${catcount}`)
    .then((res) => {
      let data = res.data;
      alert(data);
    })
    .catch((err) => err.message);
};

const presentName = () => {
  let name = document.getElementById("name");
  axios
    .post(`http://localhost:4000/api/${name.value}`)
    .then((res) => {
      let data = res.data;
      alert(data);
    })
    .catch((err) => console.log(err.message));
};

const deleteAcc = () => {
  let account = document.getElementById("name-to-delete").value;
  axios
    .delete(`http://localhost:4000/api/${account}`)
    .then((res) => {
      data = res.data;
      alert(data);
      
    })
    .catch((err) => console.log(err.message));
};

const reload = () => setTimeout(() => location.reload(), 500);

complimentBtn.addEventListener("mouseover", getFortune);
falseBtn.addEventListener("click", getCompliment);
desireBtn.addEventListener("click", getDesire);
dogBtn.addEventListener("click", addDogCounter);
catBtn.addEventListener("click", addCatCounter);
nameSubBtn.addEventListener("click", presentName);
deleteAccBtn.addEventListener("click", deleteAcc);
noBtn.addEventListener('click', reload)

// need 3 features incorperated into the page
