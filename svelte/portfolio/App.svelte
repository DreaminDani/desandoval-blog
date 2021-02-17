<script>
  import GridGallery from "./GridGallery.svelte";
  let rows = 1;
  let cols = 6;
  let growX = 3;
  let growY = 2;
  let duration = 600;
  let activeClassName = "GridGalleryActiveItem";
  $: cs = Array(rows * cols);
</script>

<GridGallery
  class="gg"
  {growX}
  {growY}
  {rows}
  {cols}
  {duration}
  {activeClassName}
>
  {#each cs as c, ix}
    <div
      class="c"
      style="position:relative;background-image:url(https://loremflickr.com/{610 +
        ix}/{610 + ix}/rio)"
    >
      <span
        style="position:absolute; bottom:0; left:0; width:100%; color:white; filter: drop-shadow(2px 4px 6px black);"
        ><center>
          Image {ix + 1}
        </center></span
      >
    </div>
  {/each}
</GridGallery>

<style>
  .c {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 600ms;
  }

  :global(.gg) {
    margin-top: 6rem;
    height: calc(80vh - 3rem);
  }
  /*
	:global(.GridGalleryActiveItem){
		border: solid 1px white !important;
	}
	*/
</style>
