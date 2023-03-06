var countryListHard = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];
const easyCountries = countryListHard.filter(country => country.length <= 13);
let countryList = easyCountries;

const levelSelect = document.getElementById("level");
// console.log({easyCountries});
function updateCountryList(){
  if (levelSelect.value === "hard"){
    countryList = countryListHard;
  };
}
levelSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
  updateCountryList();
});

function getRandomCountries(countryList, numberOfCountriesToPick) {
  const randomCountries = [];
  const numCountries = countryList.length;
  while (randomCountries.length < numberOfCountriesToPick) {
    const randomIndex = Math.floor(Math.random() * numCountries);
    const randomCountry = countryList[randomIndex];
    if (!randomCountries.includes(randomCountry)) {
      randomCountries.push(randomCountry);
    }
  }
  return randomCountries;
}

function combineCountryNameInTheList(randomCountryList, divisor) {
  const chunkSize = Math.ceil(randomCountryList.length / divisor);

  const subarrays = [];
  for (let i = 0; i < randomCountryList.length; i += chunkSize) {
    const subarray = randomCountryList.slice(i, i + chunkSize);
    subarrays.push(subarray);
  }

  // concatenate strings
  const concatenated = [];
  for (let i = 0; i < subarrays[0].length; i++) {
    let string = "";
    for (let j = 0; j < subarrays.length; j++) {
      if (subarrays[j][i]) {
        string += subarrays[j][i];
      }
    }
    concatenated.push(string);
  }

  return concatenated;
}

function shuffleStringAndRemoveWhiteSpace(str) {
  // Split the string into an array of characters
  const chars = str.split("");

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  // Join the shuffled characters back into a string
  const strWithWhiteSpace = chars.join("");

  // now, split the string at whitespace and join them back
  return strWithWhiteSpace.split(" ").join("");
}

function pushResultToDOM(sectionId,arrToPush,title){
  const sectionToPush = document.getElementById(sectionId);
  sectionToPush.innerHTML = '';
  // Add an <h2> element before the list
  const heading = document.createElement("h2");
  const headingText = document.createTextNode(title);
  heading.appendChild(headingText);
  sectionToPush.appendChild(heading);

  const list = document.createElement("ol");
  arrToPush.forEach((item) => {
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(item);
    listItem.appendChild(textNode);
    list.appendChild(listItem);
  });

  sectionToPush.appendChild(list);
  
}

function generateList(numberOfWords, numberOfCountriesEachWord) {
  const numberOfCountriesToPick = numberOfWords * numberOfCountriesEachWord;
  // new country list with the number of countries to pick, in random order
  const randomCountryList = getRandomCountries(
    countryList,
    numberOfCountriesToPick
  );
  const combinedCountryList = combineCountryNameInTheList(
    randomCountryList,
    numberOfCountriesEachWord
  );
  const scrambledCountryList = combinedCountryList.map(str => shuffleStringAndRemoveWhiteSpace(str));
  pushResultToDOM("scrambled-section",scrambledCountryList,"Scrambled List");
  pushResultToDOM("original-section",combinedCountryList,"Original List");
}

const form = document.querySelector("form");
const numOfWordsInput = document.getElementById("num-of-words");
const numOfCountriesInput = document.getElementById("num-of-countries");
const currentNumOfWords = numOfWordsInput.value;


function updateMaxValues() {
  const maxLength = countryList.length;
  const maxWords = Math.floor(maxLength / numOfCountriesInput.value);
  const maxCountries = Math.floor(maxLength / numOfWordsInput.value);

  numOfWordsInput.max = maxWords;
  numOfCountriesInput.max = maxCountries;

  // Check if the value of numOfWordsInput has changed
  if (numOfWordsInput.value !== currentNumOfWords) {
    currentNumOfWords = numOfWordsInput.value;

    // Calculate the new max value for numOfCountriesInput
    const newMaxCountries = Math.floor(maxLength / currentNumOfWords);
    const currentNumOfCountries = parseInt(numOfCountriesInput.value);

    // Update the default value of numOfCountriesInput
    if (currentNumOfCountries > newMaxCountries) {
      numOfCountriesInput.defaultValue = newMaxCountries;
    }
  }
}

numOfWordsInput.addEventListener("change", updateMaxValues);
numOfCountriesInput.addEventListener("change", updateMaxValues);
const generateButton = document.getElementById("generate");
const printAllButton = document.getElementById("print-countries");
const removePrintAllButton = document.getElementById("remove-print-countries");
generateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const numOfWords = numOfWordsInput.value;
  const numOfCountries = numOfCountriesInput.value;
  generateList(numOfWords, numOfCountries);
});
printAllButton.addEventListener("click", (event) => {
  event.preventDefault();
  
    // The country list is long. 
    // I"m breaking it out to 4 parts to print
  // Add an <h2> element before the list
  const heading = document.createElement("h2");
  const headingText = document.createTextNode("List of all countries");
  heading.appendChild(headingText);
  const outerContainer = document.getElementById('all-countries-section');
  outerContainer.innerHTML='';
  outerContainer.appendChild(heading);
  const container= document.createElement("div");
  container.setAttribute('id',"all-countries-list");
  outerContainer.appendChild(container);
  const chunkSize = Math.ceil(countryList.length / 4);
  const chunks = [];
  for (let i = 0; i < countryList.length; i += chunkSize) {
    chunks.push(countryList.slice(i, i + chunkSize));
  }

  // Loop through each chunk and create an ordered list
  let index = 1;
  for (let chunk of chunks) {
    const ol = document.createElement('ol');
    ol.setAttribute('start', index); // Set the start attribute to index
    for (let country of chunk) {
      const li = document.createElement('li');
      li.innerText = country;
      ol.appendChild(li);
      index++;
    }
    container.appendChild(ol);
  }
  // pushResultToDOM("all-countries-section",countryList,"List of all countries");
});
removePrintAllButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("all-countries-section").innerHTML='';
});


