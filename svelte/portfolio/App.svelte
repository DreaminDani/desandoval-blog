<script>
  import { fade } from "svelte/transition";
  import GridGallery from "./GridGallery.svelte";
  let growX = 2;
  let growY = 2;
  let duration = 700;
  let activeClassName = "GridGalleryActiveItem";
  $: cs = [
    {
      image: "/img/portfolio/senior-thesis.png",
      url: "https://books.desandoval.net",
      title: "University of Washington",
      subtitle: "Academic Research",
      description:
        "Exploring Academic Access to Information: Human Centered Design and Engineering (HCDE)",
      active: false,
    },
    {
      image: "/img/portfolio/dio-design.png",
      url:
        "https://docs.google.com/presentation/d/e/2PACX-1vTnBiYX3EFSW4ELglNwJN96KPiyj7eunaMvc9XEfRAgrIFQBQZiW-1BDRCI8XxXDcscG6CUOVIWNork/embed?start=false&loop=true&delayms=3000#slide=id.g35f391192_04",
      title: "Discuss.io",
      subtitle: "UX Research & Design",
      description:
        "Building tools for qualitative researchers - guided by quant & qual",
      active: false,
    },
    {
      image: "/img/portfolio/vmware.jpg",
      url:
        "https://tanzu.vmware.com/content/blog/streamline-your-teams-api-design-and-strategy-with-user-centered-documentation",
      title: "VMware Pivotal Labs",
      subtitle: "Consulting & Facilitation",
      description:
        "Strategies for incorporating design onto balanced teams and across client contexts",
      active: false,
    },
    {
      image: "/img/portfolio/chipper.png",
      url: "https://chippercash.com/careers/",
      title: "Chipper Cash",
      subtitle: "Work with me!",
      description:
        "Building a diverse and inclusive team to design global equitable solutions",
      active: false,
    },
  ];
</script>

<GridGallery
  class="gg"
  {growX}
  {growY}
  rows="1"
  cols={cs.length}
  {duration}
  {activeClassName}
>
  {#each cs as c, ix}
    <a
      on:focusin={() => (c.active = true)}
      on:focusout={() => (c.active = false)}
      on:mouseover={() => (c.active = true)}
      on:mouseout={() => (c.active = false)}
      href={c.url}
      class="c"
      style="position:relative;background-image:url({c.image})"
      target="_blank"
    >
      {#if c.active}
        <span
          transition:fade={{ delay: 300 }}
          style="background-color: rgba(0,0,0,0.24); position:absolute; top:1.5em; left:0; width:100%; color:white; filter: drop-shadow(2px 4px 6px black);"
          ><center>
            {c.description}
          </center></span
        >
      {/if}
      <span
        style="position:absolute; bottom:.5em; left:0; width:100%; color:white; filter: drop-shadow(2px 4px 6px black);"
        ><center>
          <h2>{c.title}</h2>
          {c.subtitle}
        </center></span
      >
    </a>
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
