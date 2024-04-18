"use strict";
const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileNavCont = document.querySelector(".mobile");
const mobileNav = document.querySelector(".mobile-nav");

const parentLinkCont = document.querySelector(".parent-linkcont");

/**Control toggle display of the mobile navigation */
hamburgerBtn.addEventListener("click", function (e) {
  console.log("you have clicked me!!");
  if (e.target) {
    mobileNavCont.classList.toggle("hide-mobile");
    mobileNav.classList.toggle("hide-mobile-navi");
  }
});

/*THE URL SHORTENING API */
const shorten = async function (url) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: "Bearer 823679581d801d982024ed1c9196854367a90aeb",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: url,
      domain: "bit.ly",
    }),
  });

  const data = await response.json();
  return data;
};

/**Getting the form data from the form */
const form = document.querySelector("#form");
const errorMsg = document.querySelector(".error-msg");
const formInput = document.querySelector(".form-link-input");

/*Validate if its a valid url */
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

/*Function for building the links template */
const renderLinkHtml = function (link, long_url) {
  let html = `
     
            <div class="bg-white rounded-md link-item">
              <p
                class="w-[100%] flex md:items-center max-md:flex-col max-md:gap-4 px-4 py-3"
              >
                <a href="#" class="input-link nline-block w-full overflow-clip">
                  ${long_url}
                </a>
                <a href="#" class="shortenedUrl  inline-block text-Cyan overflow-clip"
                  >${link}</a
                >
                <button
                  class="copy-btn py-1 px-5 bg-Cyan rounded-md cursor-pointer text-white md:ml-5 max-md:block max-md:w-full"
                >
                  Copy
                </button>
              </p>
            </div>
    `;

  parentLinkCont.insertAdjacentHTML("afterbegin", html);
};

/*Initialize the itemsArray which will hold all the data to be stored on the local storage API */
let itemsArray = [];

function handleFormData() {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (formInput.value === "") {
      formInput.classList.add("input-invalid");
      errorMsg.classList.add("error-msg-hide");
    } else if (
      formInput.value !== "" &&
      isValidUrl(formInput.value) === false
    ) {
      formInput.classList.add("input-invalid");
      errorMsg.classList.add("error-msg-hide");
      errorMsg.innerHTML = "Please enter  a valid link!!";
      return;
    } else {
      formInput.classList.remove("input-invalid");
      errorMsg.classList.remove("error-msg-hide");
      console.log(formInput.value);
      ``;
    }

    // If all the tests pass then we can call the URL shortening API
    const { link, long_url } = await shorten(formInput.value);

    // Lets now build our template html which will be rendered after the url has been shortened
    renderLinkHtml(link, long_url);

    // Clear the input fields
    formInput.value = "";

    // Store the links data to the local storage API
    const dataStored = [link, long_url];
    itemsArray.push(dataStored);
    localStorage.setItem("items", JSON.stringify(itemsArray));

    // location.reload();
  });
}

handleFormData();

/*Check if there is any data in the local storage and only render the data */
if (JSON.parse(localStorage.getItem("items"))) {
  // Fetch the items from the local storage
  const linkItems = JSON.parse(localStorage.getItem("items"));

  // Lets now build our template html which will be rendered for the saved links
  linkItems.forEach(item => {
    const [link, long_url] = item;
    renderLinkHtml(link, long_url);
  });
}

// copy to clipboard functionality
const linkCont = document.querySelector(".link-cont");
const shortenedUrl = document.querySelector(".shortenedUrl");

parentLinkCont.addEventListener("click", function (event) {
  // Getting the Shortened url
  let text;
  if (event.target.classList.contains("shortenedUrl")) {
    text = shortenedUrl.innerHTML;
  }

  // Attaching the event handler to the button inorder for us to be able to copy the shortened url
  if (event.target.classList.contains("copy-btn")) {
    /*Here we interact with the clipboard API which will enable us to copy the shortened URL */
    const copyContent = async () => {
      try {
        // let text = shortenedUrl.innerHTML;
        await navigator.clipboard.writeText(text);

        event.target.style.backgroundColor = "hsl(257, 27%, 26%)";
        event.target.textContent = "Copied!";
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };

    copyContent();
  }
});

// localStorage.clear();
