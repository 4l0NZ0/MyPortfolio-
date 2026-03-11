<script lang="ts">
    import SectionHeader from "../sectionheaders/sectionheaders.svelte"
    import { superForm } from 'sveltekit-superforms';
       
    
    let  { data } = $props();
    const { form,enhance,message,errors,constraints,delayed,allErrors } = superForm(data.form,{
    onUpdated({form : f}){
        if (f.valid){
            setTimeout(()=>{
                $message ='';
            },7000);
        }
          if (!f.valid){
            setTimeout(()=>{
                $message ='';
            },7000);
        }
    },
 

   });
</script>


<div>
    <SectionHeader sectionTitle="Contact" />
</div>



<div class= "border-3 ">


{#if $message}
<div
class="h-20 container mx-auto m-3 text-center text-2xl text-[#EEEEE2]
{$message.type === 'success' ? 'bg-[#2ECC71]' : 'bg-red-500'}"
style="font-family: 'The Retro Font', sans-serif;"
>
{$message.text}
</div>
{/if}

{#if $allErrors.length}
  <ul>
    {#each $allErrors as error}
      <li>
        <b>{error.path}:</b>
        {error.messages.join('. ')}
      </li>
    {/each}
  </ul>
{/if}


<form method="POST" use:enhance>

<div class ="grid gap-4 grid-cols-2 text-[#191A14] container mx-auto px-3 lg:grid-cols-2 " >
<div class="mt-4 col-span-2">
 <label style="font-family: 'The Retro Font', sans-serif; " for="name">NAME</label>
  <input  class = "border-b-2 border-[#191A14] w-full " 
    type="text" 
    name="name" 
    aria-invalid={$errors.name ? 'true' : undefined}
    bind:value={$form.name}>

    {#if $errors.name}<span>{errors.name}</span>{/if}
</div>

<div class="mt-4 col-span-2">
   <label style="font-family: 'The Retro Font', sans-serif; " for="email">E-mail</label>
  <input 
    class = "border-b-2  border-[#191A14] w-full" 
    type="email" 
    name="email" 
    aria-invalid={$errors.email ? 'true' : undefined}
    bind:value={$form.email} />

    {#if $errors.email}<span>{errors.email}</span>{/if}
</div>

<div class="mt-4 col-span-2 " >
  <label style="font-family: 'The Retro Font', sans-serif; " for="usermessage">Message</label>
  <textarea 
    class = "border-2 border-[#191A14] w-full" 
    rows="4" 
    name="usermessage" 
    aria-invalid={$errors.usermessage ? 'true' : undefined}
    bind:value={$form.usermessage} >
    </textarea>
    {#if $errors.usermessage}<span>{errors.usermessage}</span>{/if}

</div>
<div class="mt-4 flex items-center gap-4"> 
<button style="font-family: 'The Retro Font', sans-serif; " class=" text-4xl border-6 p-1 mb-4 text-[#F14133] hover:border-transparent hover:bg-[#F14133] hover:text-[#EFE4D6] active:bg-[#F81200]" >
        Submit
    </button>
    <div class=" text-xl text-[#2ECC71] " style="font-family: 'The Retro Font', sans-serif; ">

  {#if $delayed}<h3>.......Loading</h3>{/if}
   

    </div>
</div>

</div>



    </form>
    </div>

