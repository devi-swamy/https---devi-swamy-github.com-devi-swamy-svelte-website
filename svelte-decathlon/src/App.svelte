<script>
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Menubar from "./Components/Menubar.svelte";
  import DATA from "./Data/data";
  import MainContent from "./Components/MainContent/MainContent.svelte";
  import Product from "./Components/Product/Product.svelte";
  // import Carousel from "./Components/Carousel/Carousel.svelte";
  // import Newpage from "./Components/Carousel/new.svelte";
  import Swiper from "./Components/Swiper/swiper.svelte";
  import List from "./Components/List.svelte";

  import Expbanner from "./Components/Experience/Experience.svelte";
</script>

<!----Navbar-->
<Navbar
  navlists={DATA.NAVBAR_DATA}
  decath={DATA.DECATH_URL}
  search={DATA.SEARCH_URL}
  mobileimg={DATA.MOBILE_MENU_URL}
/>

<!--Menubar-->

<Menubar menulist={DATA.MENUBAR_DATA} />

<!----Main Content-->

<MainContent mainlist={DATA.MAIN_CONENT} />

<!---Product Content-->

<Product title={DATA.PRODUCT_TITLE} />

<!--Carousel-->
<!-- <Carousel multicarousel={DATA.MULTICAROUSEL} /> -->
<!-- <div class="deskview">
  <Newpage multicarousel={DATA.MULTICAROUSEL} scrollBy="1" />
</div> -->

<div class="deskview">
  <Swiper multicarousel={DATA.MULTICAROUSEL} />
</div>
<div class="mobileview">
  <List listcarousel={DATA.LISTCAROUSEL} />
</div>

<!--Experience banner-->
<Expbanner banner={DATA.EXPBANNER} />

<style>
  @media (min-width: 320px) and (max-width: 767px) {
    .mobileview {
      display: visible;
    }
    .deskview {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .mobileview {
      display: none;
    }
    .deskview {
      display: visible;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .mobileview {
      display: none;
    }
    .deskview {
      display: visible;
    }
  }

  @media (min-width: 1200px) {
    .mobileview {
      display: none;
    }
  }
</style>
