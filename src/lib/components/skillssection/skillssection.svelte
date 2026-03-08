<script lang="ts">
    import SectionHeader from "../sectionheaders/sectionheaders.svelte"
    import HtmlIcon from "../../assets/programminglanguageicons/Html.svg"
  
    const modules = import.meta.glob<{default:string}>('/src/lib/assets/programminglanguageicons/*.{png,jpg,svg}',{eager:true});

    const images = Object.values(modules).map((img) => img.default);


</script>

<div class=" flex flex-col items-center bg-[#EFE4D6]  ">
    <SectionHeader sectionTitle="Skills" />

    <div  class="grid grid-cols-3 gap-4 ">
        {#each images as image}
	        <img src={image} alt="logo" />
        {/each}
        </div>
    </div>