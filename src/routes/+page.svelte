<script>
    import Header from '../lib/components/navigation/header.svelte'
    import Hero from '../lib/components/herosection/hero.svelte'
    import AboutMe from '../lib/components/aboutme/aboutme.svelte'
    import Projects from '../lib/components/projects/projects.svelte'
</script>

<Header/>
<Hero/>
<AboutMe/>
<Projects/>
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: #FF914B;
  }
</style>
