<script lang="ts">
    import Header from '../lib/components/navigation/header.svelte';
    import Hero from '../lib/components/herosection/hero.svelte';
    import AboutMe from '../lib/components/aboutme/aboutme.svelte';
    import Projects from '../lib/components/projectssection/projects.svelte';
    import Skills from '../lib/components/skillssection/skillssection.svelte';
    import Contact from '$lib/components/contact/contact.svelte';
    

  let { data } = $props();

</script>


<div class="container mx-auto px-3 grid grid-cols-1 gap-10">
  <div class=" md:hidden">
    <Header/>
  </div>
  <div>
    <Hero/>
  </div>
  <div class="hidden md:block">
    <Header/>
  </div>
  <div>
    <AboutMe/>
  </div>
  <div>
    <Projects/>
  </div>
  <div>
    <Skills/>
  </div>

  <div>
    <Contact data={data}/>
  </div>

</div>




<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: #EEEEE2;
  }
</style>
