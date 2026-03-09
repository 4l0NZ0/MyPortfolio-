<script lang="ts">
    import SectionHeader from "../sectionheaders/sectionheaders.svelte"
  
    const modules = import.meta.glob<{default:string}>('/src/lib/assets/programminglanguageicons/*.{png,jpg,svg}',{eager:true});

    const images = Object.values(modules).map((img) => img.default);


</script>

<div class  =" border-6 ">
    <SectionHeader sectionTitle="Skills" />

    <div  class="grid grid-cols-2 gap-2 ">
        {#each images as image}
	        <img src={image} alt="logo" />
        {/each}
        </div>
    </div>