const DECATH_URL = "images/decathlon.JPG";
const SEARCH_URL = "images/search.jpg";
const MOBILE_MENU_URL = "images/mobile_menu.jpg";
const NAVBAR_DATA = [
  {
    id: 1,
    url: "/#contactus",
    label: "CONTACT US",
    img_url: "images/contact_us.JPG"
  },
  { id: 2, url: "#store", label: "FIND A STORE", img_url: "images/store.jpg" },
  {
    id: 3,
    url: "#account",
    label: "MY ACCOUNT",
    img_url: "images/account.jpg"
  },
  { id: 4, url: "#basket", label: "", img_url: "images/basket1.jpg" }
];
const MENUBAR_DATA = {
  MENU1: "ALL SPORTS",
  MENU2: "MEN",
  MENU3: "WOMEN",
  MENU4: "KIDS",
  MENU5: "ACCESSORIES",
  MENU6: "NUTRITION &BODY CARD"
};
const MAIN_CONENT = {
  HEADING: "Get ready to wrap up",
  SUBHEADING: "Decathalon. Discover yourself",
  BUTTONCONTENT: "DISCOVER>",
  DESKTOP_IMG: "images/getreadywrapup-desktop@2x.png",
  MOB_IMG: "images/getreadywrapup-desktop.png",
  UHD_IMG: "images/getreadywrapup-desktop@3x.png"
};

const PRODUCT_TITLE = "Most Searched Products";

const EXPBANNER = "images/expbanner.png";
const MULTICAROUSEL = [
  { path: "images/outdoorgear.jpg", id: 1, title: "OUTDOOR GEAR" },
  { path: "images/outdoorgames.jpg", id: 2, title: "OUTDOOR GAMES" },
  { path: "images/beach.jpg", id: 3, title: "BEACH TENTS" }
  // ,  { path: "images/ecoproduct.jpg", id: 4, title: "ECO PRODUCT" },
  // { path: "images/beach.jpg", id: 5, title: "BEACH TENTS" },
  // { path: "images/ecoproduct.jpg", id: 6, title: "ECO PRODUCT" }
];

const LISTCAROUSEL = [
  "images/outdoorgear.jpg",
  "images/ecoproduct.jpg",
  "images/beach.jpg",
  "images/ecoproduct.jpg"
];

const MOCK_DATA = {
  DECATH_URL,
  NAVBAR_DATA,
  MOBILE_MENU_URL,
  MENUBAR_DATA,
  SEARCH_URL,
  MAIN_CONENT,
  PRODUCT_TITLE,
  EXPBANNER,
  MULTICAROUSEL,
  LISTCAROUSEL
};

export default MOCK_DATA;
