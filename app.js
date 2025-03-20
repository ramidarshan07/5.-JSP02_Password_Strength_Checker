const passwordinput = document.querySelector("#password")
const conformpasswordinput = document.querySelector("#conformPassword")
const togglepassword = document.querySelector("#toggelButton")
const togglepasswordconform = document.querySelector("#toggelButtonConform")
const submitbtn = document.querySelector("#submitbtn")
const criteriaList = document.querySelector("#criteriaList")

const letterCriteria = document.querySelector("#letter")
const capitalCriteria = document.querySelector("#capital")
const symoblCriteria = document.querySelector("#symobl")
const numberCriteria = document.querySelector("#number")
const lengthCritera = document.querySelector("#length")

const letterRegex = /[a-z]/;
const capitalRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const symbolRegex = /[!@#$%^&*]/;

//Togel button 
togglepassword.addEventListener("click", () => {
    const type = passwordinput.type === "password" ? "text" : "password";
    passwordinput.type = type;
    togglepassword.textContent = type === "password" ? "👁️" : "🙈";
})

togglepasswordconform.addEventListener("click", () => {
    const type = conformpasswordinput.type === "password" ? "text" : "password";
    conformpasswordinput.type = type;
    togglepasswordconform.textContent = type === "password" ? "👁️" : "🙈";
})

passwordinput.addEventListener("input", (e) => {
    const value = passwordinput.value;
    console.log(value)

    //small letter
    if (letterRegex.test(value)) {
        letterCriteria.classList.remove("invalid")
        letterCriteria.classList.add("valid")
    } else {
        letterCriteria.classList.remove("valid")
        letterCriteria.classList.add("invalid")
    }

    //capital letter
    if (capitalRegex.test(value)) {
        capitalCriteria.classList.remove("invalid")
        capitalCriteria.classList.add("valid")
    } else {
        capitalCriteria.classList.remove("valid")
        capitalCriteria.classList.add("invalid")
    }

    //number
    if (numberRegex.test(value)) {
        numberCriteria.classList.remove("invalid")
        numberCriteria.classList.add("valid")
    } else {
        numberCriteria.classList.remove("vlaid")
        numberCriteria.classList.add("invlaid")
    }

    //symbol
    if (symbolRegex.test(value)) {
        symoblCriteria.classList.remove("invalid")
        symoblCriteria.classList.add("valid")
    } else {
        symoblCriteria.classList.remove("valid")
        symoblCriteria.classList.add("invalid")
    }

    //length
    if (value.length >= 8) {
        lengthCritera.classList.remove("invalid");
        lengthCritera.classList.add("valid");
      } else {
        lengthCritera.classList.remove("valid");
        lengthCritera.classList.add("invalid");
      }
})

submitbtn.addEventListener("click",()=>{
    alert("Your password is storng")
})  