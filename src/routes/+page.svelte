<script>
    import Header from '../lib/components/navigation/header.svelte'
    import Hero from '../lib/components/herosection/hero.svelte'
    import AboutMe from '../lib/components/aboutme/aboutme.svelte'
    import Projects from '../lib/components/projectssection/projects.svelte'
    import Skills from '../lib/components/skillssection/skillssection.svelte'
</script>

<Header/>
<Hero/>
<AboutMe/>
<Projects/>
<Skills/>


<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: #EEEEE2;
  }
</style>
