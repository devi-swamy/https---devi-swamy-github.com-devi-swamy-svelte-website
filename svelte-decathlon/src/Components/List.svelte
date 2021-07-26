<script>
  import ListItem from "./ListItem.svelte";

  // generate image data:
  export let listcarousel = [];
  console.log(listcarousel);
  const prefix = "https://placekitten.com/g/300/500?image=";
  const items = ["01", "02", "03", "04", "05"].map(num => prefix + num);
  console.log(items);
</script>

{#each listcarousel as item}
  <ListItem {item} />
{/each}
