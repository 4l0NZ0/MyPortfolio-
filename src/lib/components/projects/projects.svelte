<script lang="ts">
    import SectionHeader from "../sectionheaders/sectionheaders.svelte"

   import NiHaoPinyinLogo from "../../assets/NihaoPinyinLogo.svg"
   import SuwonLogo from "../../assets/SuwonLogo.svg"


</script>

<div class=" flex flex-col items-center bg-[#EFE4D6]  ">
    <SectionHeader sectionTitle="Projects" />
    <div>

     <div class="   rounded-xl flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-20 rounded-full sm:mx-0 sm:shrink-0" src={NiHaoPinyinLogo} alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black" style=" font-family: 'Bobby Jones Soft', sans-serif; ">NIHAO PINYIN </p>
      <p class="font-medium text-gray-500">Swift app that adds pinyin to chinese characters.</p>
    </div>
    <button class="border p-2 text-[#FF914B] hover:border-transparent hover:bg-[#FF914B] hover:text-white active:bg-[#FF914B] ..." style=" font-family: 'Bobby Jones Soft', sans-serif; ">
      Learn More
    </button>
  </div>
</div>



    <div class="  rounded-xl flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={SuwonLogo} alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black" style=" font-family: 'Bobby Jones Soft', sans-serif; ">Suwon Bites</p>
      <p class="font-medium text-gray-500">Swift app that adds pinyin to chinese characters.</p>
    </div>
    <button class=" bg-[#FF914B] rounded-full p-2 text-[#EFE4D6]" style="font-family: 'Bobby Jones Soft', sans-serif;">
      Lean More
    </button>
  </div>
</div>




            <dl class="flex flex-col items-center">
                <dt style=" font-family: 'Bobby Jones Soft', sans-serif; bg ">
                    <a data-sveltekit-preload-data="hover" href="/stonks">
	NIHAO PINYIN ...................[Learn More]
</a></dt>
                <dd>Swift app that adds pinyin to chinese characters.</dd>
                <br>
                
                <dt style="font-family: 'Bobby Jones Soft', sans-serif; ">NETFLIX CLONE ...............[Learn More]</dt>
                <dd>Swift app that adds pinyin to chinese characters.</dd>
                <br>
                
                <dt style="font-family: 'Bobby Jones Soft', sans-serif; ">SUWON BITES...................[Learn More]</dt>
                <dd>Swift app that adds pinyin to chinese characters.</dd>
                <br>
            </dl>
    </div>

    </div>