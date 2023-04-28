const complimentBtn = document.getElementById("complimentButton");
const falseBtn = document.getElementById("falseBtn");
const desireBtn = document.getElementById("desire-submit");
const desireBox = document.getElementById("answerbox").value
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
    .post("http://localhost:4000/api/desire/", {desireBox}).then((res) => {
        res.data.value = desireBox
        let data = res.data
        alert(data)
    })
    .catch((err) => console.log(err));
};

complimentBtn.addEventListener("mouseover", getFortune);
falseBtn.addEventListener("click", getCompliment);
desireBtn.addEventListener("click", getDesire);

// need 3 features incorperated into the page
