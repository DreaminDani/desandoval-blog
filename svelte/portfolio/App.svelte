<script>
  import { fade } from "svelte/transition";
  import GridGallery from "./GridGallery.svelte";
  let growX = 1.5;
  let growY = 1.5;
  let duration = 700;
  let activeClassName = "GridGalleryActiveItem";
  $: cs = [
    {
      image: "/img/portfolio/uw-suzzalo.jpg",
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
      image: "/img/portfolio/dio-whiteboard.jpg",
      url: "https://www.figma.com/proto/A2DrAaHvGTJLm043fFI4Lx/Dani-Portfolio?page-id=0%3A1&node-id=222%3A50&viewport=570%2C189%2C0.35&scaling=contain&starting-point-node-id=222%3A50&hide-ui=1",
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
      url: "https://tanzu.vmware.com/content/blog/streamline-your-teams-api-design-and-strategy-with-user-centered-documentation",
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
      image: "/img/portfolio/chipper.jpg",
      url: "https://www.figma.com/proto/A2DrAaHvGTJLm043fFI4Lx/Dani-Portfolio?page-id=0%3A1&node-id=2%3A65&viewport=570%2C189%2C0.35&scaling=contain&starting-point-node-id=2%3A65&hide-ui=1",
      logo: "/img/portfolio/chipper-logo-white.png",
      color: "rgba(35, 39, 83, 1)",
      inverted: false,
      title: "Chipper Cash",
      subtitle: "Director of Design during Hypergrowth",
      description:
        "Built a diverse and inclusive team to design global equitable solutions",
      active: false,
    },
    {
      image: "/img/portfolio/stemma.png",
      url: "/archive/more-than-a-makeover-a-behind-the-scenes-look-at-stemmas-redesign",
      logo: "/img/portfolio/stemma-logo.png",
      color: "rgba(10, 25, 48, 1)",
      inverted: false,
      title: "Stemma",
      subtitle: "Designing for the Data Domain",
      description:
        "Fostering a user-centered approach to data governance and open source tools",
      active: false,
    },
    {
      image: "/img/portfolio/teradata.png",
      url: "https://www.teradata.com/Press-Releases/2023/Teradata-Acquires-Stemma-Adding-AI-Technology-and-Talent",
      logo: "/img/portfolio/teradata-logo.png",
      color: "rgba(255, 255, 255, 1)",
      inverted: true,
      title: "Teradata (Current)",
      subtitle: "Expanding Data Discovery at Scale",
      description:
        "Leading design for the integration of Stemma into Teradata's Enterprise product landscape",
      active: false,
    }
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
  rows={mediumMatches ? cs.length : 2}
  cols={mediumMatches ? 1 : (cs.length / 2)}
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
        ? `background: ${c.color}; height: 7.2em;`
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
          transition:fade={{ duration: 80 }}
          style="border-radius: 2px; background-color: rgba(0,0,0,0.24); position:absolute; width:100%; color:white; filter: drop-shadow(1px 2px 3px rgba(0,0,0,0.4)); {mediumMatches
            ? 'text-align: left; bottom:0.25em; left:.5em;'
            : 'text-align: center; top:1.5em; left:0; padding: 0.5em 0;'}"
        >
          {c.description}
        </span>
      {/if}
      <span
        style="position:absolute; width:100%; {c.inverted && mediumMatches
          ? 'color: #212121;'
          : 'color:white;'} filter: drop-shadow(1px 2px 3px rgba(0,0,0,0.4)); {mediumMatches
          ? 'text-align: left; top:.5em; left:.5em;'
          : 'text-align: center; bottom:.5em; left:0; background-color: rgba(0,0,0,0.24); padding: 0.8em 0;'}"
      >
        <h2 style="margin:0; padding-bottom: 0.25em;">{c.title}</h2>
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
    transition: all 700ms;
  }

  :global(.gg) {
    margin-top: 6rem;
    height: calc(6*7.2em);
  }
</style>
