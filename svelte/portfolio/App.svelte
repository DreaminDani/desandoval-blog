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
      logo: "/img/portfolio/uw-purple.jpg",
      color: "rgba(56,39,91,255)",
      inverted: false,
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
      logo: "/img/portfolio/dio-logo.png",
      color: "rgba(255,255,255,255)",
      inverted: true,
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
      logo: "/img/portfolio/vmware-pivotal-labs.png",
      color:
        "linear-gradient(90deg, rgba(29,66,138,1) 0%, rgba(255,255,255,1) 100%)",
      inverted: false,
      title: "VMware Pivotal Labs",
      subtitle: "Consulting & Facilitation",
      description:
        "Developing strategies for incorporating design onto balanced teams and across client contexts",
      active: false,
    },
    {
      image: "/img/portfolio/chipper.png",
      url: "https://chippercash.com/careers/",
      logo: "/img/portfolio/chipper-logo-white.png",
      color: "rgba(35, 39, 83, 1)",
      inverted: false,
      title: "Chipper Cash",
      subtitle: "Growing a Design Team",
      description:
        "Building a diverse and inclusive team to design global equitable solutions",
      active: false,
    },
  ];

  // detect small screen sizes
  const mediumQuery = window.matchMedia("(max-width: 1024px)");
  let mediumMatches = mediumQuery.matches;
  mediumQuery.addEventListener("change", () => {
    mediumMatches = mediumQuery.matches;
  });

  const smallQuery = window.matchMedia("(max-width: 800px)");
  let smallMatches = smallQuery.matches;
  smallQuery.addEventListener("change", () => {
    smallMatches = smallQuery.matches;
  });
</script>

<GridGallery
  class="gg"
  {growX}
  {growY}
  rows={mediumMatches ? cs.length : 1}
  cols={mediumMatches ? 1 : cs.length}
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
      style="position:relative; {mediumMatches
        ? `background: ${c.color};`
        : `background-image:url(${c.image});`}"
      target="_blank"
    >
      {#if mediumMatches}
        <img
          src={c.logo}
          alt="Organization Logo"
          style="position: absolute; top: 0; right: 0; height: 100%; width: auto;"
        />
      {/if}
      {#if mediumMatches || c.active}
        <span
          transition:fade={{ delay: 300 }}
          style="background-color: rgba(0,0,0,0.24); position:absolute; width:100%; color:white; filter: drop-shadow(2px 4px 6px black); {mediumMatches
            ? 'text-align: left; bottom:.8em; left:.5em;'
            : 'text-align: center; top:1.5em; left:0;'}"
        >
          {c.description}
        </span>
      {/if}
      <span
        style="position:absolute; width:100%; {c.inverted && mediumMatches
          ? 'color: #212121;'
          : 'color:white;'} filter: drop-shadow(2px 4px 6px black); {mediumMatches
          ? 'text-align: left; top:.5em; left:.5em;'
          : 'text-align: center; bottom:.5em; left:0;'}"
      >
        <h2>{c.title}</h2>
        {#if !smallMatches} {c.subtitle} {/if}
      </span>
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
