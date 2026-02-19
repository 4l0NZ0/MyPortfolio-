<script>
   import CoffeeJug from "../../assets/CoffeeJug.svg"
   import Descriptiontext from "./aboutme_description/descriptiontext.svelte";
   import SectionHeader from "../sectionheaders/sectionheaders.svelte";
</script>

<div class=" flex flex-col items-center bg-[#EFE4D6] text-center ">
    <SectionHeader sectionTitle = "About Me" />
        <div>
        <Descriptiontext/>
         </div>
        <div>
             <img src={CoffeeJug} alt="A cartoon of me drinking coffee with a cat beside me."/>
        </div>
  
    
   
    </div>