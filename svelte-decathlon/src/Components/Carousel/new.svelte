<script>
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  export let multicarousel = [];
  export let imagewidth = 0;
  export let scrollBy = 3;
  export let controlColor = "#444";
  export let controlScale = "0.5";
  const paginationFactor = 320;
  const totalPaginationPixels = scrollBy * paginationFactor;

  $: offset = 0;
  $: atStart = offset === 0;
  $: atEnd =
    offset <= paginationFactor * (multicarousel.length - scrollBy) * -1;
  const move = direction => {
    if (direction > 0 && !atEnd) {
      offset -= totalPaginationPixels;
    } else if (direction < 0 && !atStart) {
      offset += totalPaginationPixels;
    }
  };

  const rotateleft = e => {
    const transitionimage = multicarousel[multicarousel.length - 1];
    document.getElementById(transitionimage.id).style.opacity = 0;
    console.log(multicarousel.length);
    multicarousel = [
      multicarousel[multicarousel.length - 1],
      ...multicarousel.slice(0, multicarousel.length - 1)
    ];
    setTimeout(
      () => (document.getElementById(transitionimage.id).style.opacity = 1),
      1000
    );
    console.log(multicarousel);
  };
  const rotateright = e => {
    multicarousel = [
      ...multicarousel.slice(1, multicarousel.length),
      multicarousel[0]
    ];
  };
</script>

<main>
  <div class="items" style="transform: translateX({offset}px);">
    {#each multicarousel as multiimage, i}
      <img
        class="image"
        src={multiimage.path}
        alt=""
        id={multiimage.id}
        style={`width:${imagewidth}px margin:0 2%;`}
      />
    {/each}
  </div>
</main>
<button
  id="left"
  disabled={atStart}
  on:click={() => move(-1)}
  class="buttonclass"
>
  <slot name="left-control">
    <svg
      width="39px"
      height="110px"
      id="svg8"
      transform={`scale(${controlScale})`}
    >
      <g id="layer1" transform="translate(-65.605611,-95.36949)">
        <path
          style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
          d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
          id="path1412"
        />
      </g>
    </svg>
  </slot>
</button>

<button id="right" disabled={atEnd} on:click={() => move(1)}>
  <slot name="right-control">
    <svg
      width="39px"
      height="110px"
      id="svg8"
      transform={`rotate(180) scale(${controlScale})`}
    >
      <g id="layer1" transform="translate(-65.605611,-95.36949)">
        <path
          style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
          d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
          id="path1412"
        />
      </g>
    </svg>
  </slot>
</button>
<!--
<button disabled={atStart} on:click={() => move(-1)}>&lsaquo; Prev</button>
<button disabled={atEnd} on:click={() => move(1)}>Next &rsaquo;</button> -->

<!-- <div class="details">
  offset: {offset}px<br />
  atStart: {atStart}<br />
  atEnd: {atEnd}
</div> -->

<!-- <div id="carousel-container">
  <div id="carousel-image" />

  {#each multicarousel as multiimage (multiimage.id)}
    <img
      class="multiimage"
      src={multiimage.path}
      alt=""
      id={multiimage.id}
      style={`width:${imagewidth}px margin:0 2%;`}
      animate:flip
    />
  {/each}
</div>
<button id="left" on:click={rotateleft}>Left</button>
<button id="right" on:click={rotateright}>Right</button>

<style>
  #carousel-container {
    margin-left: 8%;
    overlfow: hidden;
    display: flex;
    flex-direction: row;
  }
  #carousel-image {
    justify-content: center;
    align-items: center;
    margin: 2px;
  }
  .multiimage {
    margin-right: 2%;
  }
</style> -->
<style>
  main {
    width: 800px;
    overflow: hidden;
    margin: 0 22%;
    border: 2px solid red;
  }
  .image {
    margin-right: 2%;
    min-width: 207px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 10rem;
  }

  .items {
    display: flex;
    transition: transform 0.4s ease-in-out;
    transform: translateX(0px);
    justify-content: center;
  }

  .item {
  }

  .items .item:first-child {
    margin-left: 0;
  }

  .items .item:last-child {
    margin-right: 0;
  }

  .details {
    margin-top: 20px;
    font-style: italic;
    color: #9f9f9f;
  }

  button {
    position: absolute;
    top: 102%;

    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
  }

  button:focus {
    outline: auto;
  }

  #left {
    left: 20%;
  }

  #right {
    right: 20%;
  }
</style>
