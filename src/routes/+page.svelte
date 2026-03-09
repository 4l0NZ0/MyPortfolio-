<script lang="ts">
    import Header from '../lib/components/navigation/header.svelte';
    import Hero from '../lib/components/herosection/hero.svelte';
    import AboutMe from '../lib/components/aboutme/aboutme.svelte';
    import Projects from '../lib/components/projectssection/projects.svelte';
    import Skills from '../lib/components/skillssection/skillssection.svelte';
    import Contact from '$lib/components/contact/contact.svelte';
    import {superForm} from 'sveltekit-superforms';
    import SuperDebug from 'sveltekit-superforms';

    const { data } = $props();
    const { form,enhance,message } = superForm(data.form);



</script>


<div class="container mx-auto px-3">
<Header/>
<Hero/>
<AboutMe/>
<Projects/>
<Skills/>
<Contact/>

<form method="POST" use:enhance>
<div class ="grid gap-3 grid-cols-1 text-[#191A14] " >

<div class ="grid grid-cols-1">
 <label style="font-family: 'The Retro Font', sans-serif; " for="name">NAME</label>
  <input  class = "border-6 border-[#191A14] " type="text" name="name" bind:value={$form.name}>
</div>

<div class ="grid grid-cols-1">
   <label style="font-family: 'The Retro Font', sans-serif; " for="email">E-mail</label>
  <input class = "border-6 border-[#191A14]" type="email" name="email" bind:value={$form.email} />
</div>

<div class ="grid grid-cols-1">
  <label style="font-family: 'The Retro Font', sans-serif; " for="message">Message</label>
  <textarea class = "border-6 border-[#191A14]" rows="4" name="message" bind:value={$form.message} ></textarea>
</div>
  <div class="grid grid-cols-1  place-content-center  "> 
<button style="font-family: 'The Retro Font', sans-serif; " class=" text-4xl border-6 p-1 text-[#F14133] hover:border-transparent hover:bg-[#F14133] hover:text-[#EFE4D6] active:bg-[#F81200]" >
        Submit
    </button></div>
</div>
 
</form>

</div>
<div>
This is the message
{#if $message}
	<p class="text-green-600">Message sent successfully!</p>
{/if}

</div>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: #EEEEE2;
  }
</style>
