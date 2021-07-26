<script>
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  export let multicarousel = [];
  export let imagewidth = 250;
  export let controlColor = "#444";
  export let controlScale = "0.5";

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

<div id="carousel-container">
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
</style>
