<script>
  /* source: https://svelte.dev/repl/3a1b7fae13b242fe9cd4a4f7aa092fa4?version=3.31.2
    made by @joja (in the Svelte Discord) */
  let className;
  export { className as class };
  export let rows = 1;
  export let cols = 5;
  $: cs = Array(rows * cols);
  //$: console.log('cs',cs)
  let parent;
  export let growX = 6;
  export let growY = 2;
  export let duration = 500;
  export let style = "";
  export let activeClassName = "GridGalleryActiveItem";
  let hoverCol = -1;
  let hoverRow = -1;
  let gridTemplateColumnsStr = "";
  let gridTemplateRowsStr = "";
  $: gridTemplateColumns = tweened(Array(cols).fill(1), {
    duration,
    easing: cubicOut,
  });
  $: gridTemplateRows = tweened(Array(rows).fill(1), {
    duration,
    easing: cubicOut,
  });
  $: gridTemplateColumnsStr = $gridTemplateColumns.join("fr ") + "fr";
  $: gridTemplateRowsStr = $gridTemplateRows.join("fr ") + "fr";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  function getElementGridChild(element) {
    if (!element || !element.parentElement) return false;
    if (element && element.parentElement == parent) return element;
    return getElementGridChild(element.parentElement);
  }

  function parentHover(e) {
    var child = getElementGridChild(e.target);
    if (!child) return;
    let childIndex = Array.prototype.indexOf.call(parent.children, child);
    hoverCol = childIndex % cols;
    hoverRow = (childIndex / cols) | 0;
  }

  $: {
    let ix = 0;
    if (parent)
      for (let node of parent.childNodes) {
        //console.log('.classList', node, node.classList)
        if (ix == hoverCol + hoverRow * rows)
          node.classList.add(activeClassName);
        else node.classList && node.classList.remove(activeClassName);
        ix++;
      }
  }

  $: {
    let carr = [];
    for (let i = 0; i < cols; i++) carr[i] = hoverCol === i ? growX : 1;
    $gridTemplateColumns = carr;
  }
  $: {
    let rarr = [];
    for (let i = 0; i < rows; i++) rarr[i] = hoverRow === i ? growY : 1;
    $gridTemplateRows = rarr;
  }
</script>

<parent
  {...$$restProps}
  class={className}
  on:mouseout={() => {
    hoverCol = -1;
    hoverRow = -1;
  }}
  on:mouseover={parentHover}
  bind:this={parent}
  style="display:grid; 
	grid-template-columns:{gridTemplateColumnsStr};
	grid-template-rows: {gridTemplateRowsStr};
	{style}"
>
  <slot>no content provided</slot>
</parent>

<style>
  parent {
    grid-template-columns: 1fr 1fr 1.5fr 2fr 8.5fr 2fr 1.5fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1.5fr 2fr 8.5fr 2fr 1.5fr 1fr 1fr;
    /*gap:0.1rem;*/
  }
</style>
