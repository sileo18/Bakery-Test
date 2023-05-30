//Seletores

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const addresInput = document.querySelector("#addres");
const buttonSubmit = document.querySelector("#buttonSubmit");

const urlBackEnd = "http://localhost:3333/customer";

//Listener

buttonSubmit.addEventListener(
  "click",
  async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`${urlBackEnd}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value,
          addres: addresInput.value,
        }),
      });

      const divRes = document.querySelector("#responseFetch");

      if (!response.ok) {
        const newParagraph = document.createElement("p");

        const contentParagraph = document.createTextNode("Error");

        newParagraph.appendChild(contentParagraph);

        divRes.classList.add("bg-red-600");

        divRes.appendChild(newParagraph);
      }

      const newParagraph = document.createElement("p");

      const contentParagraph = document.createTextNode("Success");

      newParagraph.appendChild(contentParagraph);

      divRes.classList.add("bg-green-600");

      console.log(response)

      divRes.appendChild(newParagraph);
    } catch (error) {
      console.log(error);
    }
  }
);
