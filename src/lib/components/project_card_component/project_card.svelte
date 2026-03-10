 <script> 
    const {image, projectName, projectDescription} =$props();

 </script>
 
 



 
 <div class="  border-3 flex flex-col p-8 sm:flex-row sm:items-center  sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={image} alt="" />
  
  <div class="space-y-2 text-center sm:text-left text-[#191A14]" style="font-family: 'The Retro Font', sans-serif; ">
    <div class="space-y-0.5">
        <p class="text-4xl">{projectName}</p>
        <p>{projectDescription}</p>
    </div>
        <button class=" border-4 p-1 text-[#F14133] hover:border-transparent hover:bg-[#F14133] hover:text-[#EFE4D6] active:bg-[#F81200]" >
        LEARN MORE
    </button>
  </div>
</div>
    
