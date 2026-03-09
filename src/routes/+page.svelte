<script>
    import Header from '../lib/components/navigation/header.svelte'
    import Hero from '../lib/components/herosection/hero.svelte'
    import AboutMe from '../lib/components/aboutme/aboutme.svelte'
    import Projects from '../lib/components/projectssection/projects.svelte'
    import Skills from '../lib/components/skillssection/skillssection.svelte'
    import Contact from '$lib/components/contact/contact.svelte';
</script>

<div class="container mx-auto px-3">
<Header/>
<Hero/>
<AboutMe/>
<Projects/>
<Skills/>
<Contact/>
  
</div>



<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: #EEEEE2;
  }
</style>
