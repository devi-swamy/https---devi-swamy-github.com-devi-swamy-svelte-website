<script>
  export let multicarousel = [];
  export let imagewidth = 350;

  // Now you can use all slider methods like

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      bulletElement: "button",
      clickable: true
    }
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });
</script>

<div class="swiper-container mySwiper">
  <div class="swiper-wrapper">
    {#each multicarousel as multiimage (multiimage.id)}
      <div class="swiper-slide">
        <img
          class="multiimage"
          src={multiimage.path}
          alt=""
          id={multiimage.id}
          style={`width:${imagewidth}px margin:0 2%;`}
        />
      </div>
    {/each}
  </div>
  <div class="swiper-button-next" />
  <div class="swiper-button-prev" />
  <div class="swiper-pagination" />
</div>

<style>
  body {
    overflow: hidden;
  }
  .carousel {
    margin: auto;
    width: 800px;
  }

  .swiper-container {
    overflow: visible;
    width: 80%;

    margin-bottom: 5%;
  }
  .swiper-slide {
    width: 40%;
    display: flex;
    height: 20%;
    /* display: flex;
    height: 200px;
    background-color: silver;
    align-items: center;
    justify-content: center; */
  }
  /* .swiper-pagination {
  }
  [class^="swiper-button"] {
    border: none;
    background-color: transparent;
  } */
</style>
