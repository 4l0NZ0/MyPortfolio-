 <script> 
    const {image, projectName, projectDescription} =$props();

 </script>
 
 
 
 <div class="  rounded-xl flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={image} alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
        
             <p class="text-lg font-semibold text-black" style=" font-family: 'Bobby Jones Soft', sans-serif; ">{projectName}</p>
         
     
      <p class="font-medium" style="font-family: 'Jua-Regular', sans-serif;">{projectDescription}</p>
    </div>
   
              <button class=" border-4 p-1 text-[#FF914B] hover:border-transparent hover:bg-[#FF914B] hover:text-[#EFE4D6] active:bg-[#FF6300]" style="font-family: 'Jua-Regular', sans-serif;">
              LEARN MORE
    </button>
  </div>
</div>