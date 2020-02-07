<script>
  import { onMount } from "svelte";
  let readingList = [];
  let gettingReadingList = false;

  onMount(() => {
    getReadingList();
  });

  async function getReadingList() {
    gettingReadingList = true;
    const res = await fetch("/.netlify/functions/iam-reading");
    const response = await res.json();
    readingList = response;
    console.log(readingList);
    gettingReadingList = false;
  }
</script>

<style>
  p {
    font-size: 1.87em;
  }
  .date {
    display: block;
    font-size: 0.6em;
  }
</style>

<div>
  <h1>Reading List</h1>
  {#if gettingReadingList}
    <span>Getting Reading List...</span>
  {:else}
    {#each readingList as { title, link, pubDate }}
      <p>
        <a href={link}>{title}</a>
        <span class="date">{pubDate}</span>
      </p>
    {/each}
  {/if}
</div>
