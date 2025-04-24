class Card {
  constructor(imageUrl, name, fName, age, gender, dob, department, address) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.fName = fName;
    this.age = age;
    this.gender = gender;
    this.dob = dob;
    this.department = department;
    this.address = address;
  }
  generatedCard() {
    return `
    <div class="id-card">
    <div class="header">Institute Name</div>
    <div class="photo">
      <img src="https://via.placeholder.com/100" alt="Profile Photo" />
    </div>
    <div class="info">
      <h3>Name: ${this.name}</h3>
      <p>Father's Name: ${this.fName}</p>
      <p>Age: ${this.age}</p>
      <p>Gender: ${this.gender}</p>
      <p>DOB: ${this.dob}</p>
      <p>Department: ${this.department}</p>
      <p>Address: ${this.address}</p>
    </div>
    </div>`;
  }
}


const generateCard = () => {
    const getPic = document.getElementById("pic");
    const profilePicFile = getPic.files?.[0];
      const profilePicURL = profilePicFile
        ? URL.createObjectURL(profilePicFile)
        : "";
  const getName = document.getElementById("name").value;
  const getFname = document.getElementById("fName").value;
  const getAge = document.getElementById("age").value;
  const getGender = document.getElementById("gender").value;
  const getDob = document.getElementById("dob").value;
  const getdepartment = document.getElementById("department").value;
  const getAddress = document.getElementById("address").value;
  const getCardSec = document.getElementById("cardSec");
  let student = new Card(
    profilePicURL,
    getName,
    getFname,
    getAge,
    getGender,
    getDob,
    getdepartment,
    getAddress
  );
  getCardSec.innerHTML += student.generatedCard();
};
