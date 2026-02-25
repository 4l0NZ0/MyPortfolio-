<script lang="ts">
    import SectionHeader from "../sectionheaders/sectionheaders.svelte"
    import NiHaoPinyinLogo from "../../assets/NihaoPinyinLogo.svg"
    import SuwonLogo from "../../assets/SuwonLogo.svg"
    import ProjectCard from "../project_card_component/project_card.svelte"
    import {projects} from "../../projects_data/projects"
</script>

<div class=" flex flex-col items-center bg-[#EFE4D6]  ">
    <SectionHeader sectionTitle="Projects" />


        <div>
            {#each projects as project}
            <ProjectCard image={project.image} projectName={project.name} projectDescription={project.description}/>
            {/each}
        </div>


    </div>