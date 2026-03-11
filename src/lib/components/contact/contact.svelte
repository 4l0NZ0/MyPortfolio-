<script lang="ts">
        import SectionHeader from "../sectionheaders/sectionheaders.svelte"
        import { superForm } from 'sveltekit-superforms';
       let  { data } = $props();
   const { form,enhance,message } = superForm(data.form);


   
</script>


<div>
    <SectionHeader sectionTitle="Contact" />
</div>



    <div class= "border-3">
<form method="POST" use:enhance>
    
<div class ="grid gap-4 grid-cols-1 text-[#191A14] container mx-auto px-3 lg:grid-cols-2 " >

<div class="mt-4">
 <label style="font-family: 'The Retro Font', sans-serif; " for="name">NAME</label>
  <input  class = "border-b-2 border-[#191A14] w-full " type="text" name="name" bind:value={$form.name}>
</div>

<div class="mt-4">
   <label style="font-family: 'The Retro Font', sans-serif; " for="email">E-mail</label>
  <input class = "border-b-2  border-[#191A14] w-full" type="email" name="email" bind:value={$form.email} />
</div>

<div class="lg:col-span-2 mt-4" >
  <label style="font-family: 'The Retro Font', sans-serif; " for="usermessage">Message</label>
  <textarea class = "border-2 border-[#191A14] w-full" rows="4" name="usermessage" bind:value={$form.usermessage} ></textarea>
</div>
  <div class="  place-content-center  "> 
<button style="font-family: 'The Retro Font', sans-serif; " class=" text-4xl border-6 p-1 mb-4 text-[#F14133] hover:border-transparent hover:bg-[#F14133] hover:text-[#EFE4D6] active:bg-[#F81200]" >
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