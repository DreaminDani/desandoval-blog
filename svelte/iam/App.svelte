<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let readingList = [];
  let gettingReadingList = false;
  let nowPlaying = [];
  let gettingNowPlaying = false;

  onMount(() => {
    getListeningTo();
    getReading();
  });

  async function getListeningTo() {
    gettingNowPlaying = true;
    const res = await fetch("/.netlify/functions/iam-listeningto");
    const response = await res.json();
    nowPlaying = response;
    console.log(nowPlaying);
    gettingNowPlaying = false;
  }

  async function getReading() {
    gettingReadingList = true;
    const res = await fetch("/.netlify/functions/iam-reading");
    const response = await res.json();
    readingList = response;
    // console.log(readingList);
    gettingReadingList = false;
  }
</script>

<div class="content">
  <div class="listening">
    <h1>Listening to...</h1>
    {#if gettingReadingList}
      <span>Getting recent tracks</span>
    {:else}
      {#each nowPlaying as { artist, album, image, date, url, name, mbid }, index}
        <a
          transition:fade={{ delay: index * 250 }}
          target="_blank"
          rel="noreferrer nofollow"
          href={url}
        >
          <article class="track" id={mbid}>
            <img
              src={image[1]["#text"]}
              alt={`Album cover for ${artist["#text"]} - ${album["#text"]}`}
            />
            <h1>{name}</h1>
            <h2>{artist["#text"]} - {album["#text"]}</h2>
            {#if date}
              <time datetime={date["#text"]}>{date["#text"]}</time>
            {/if}
          </article>
        </a>
      {/each}
    {/if}
  </div>
  <div class="reading">
    <h1>Currently reading...</h1>
    {#if gettingReadingList}
      <span>Getting reading list</span>
    {:else}
      {#each readingList as { title, link, excerpt }, index}
        <article transition:fade={{ delay: index * 250 }}>
          <a target="_blank" rel="noreferrer nofollow" href={link}>{title}</a>
          <p class="excerpt">{excerpt}</p>
        </article>
      {/each}
    {/if}
  </div>
</div>
