<script lang="ts">
    import SectionHeader from "../sectionheaders/sectionheaders.svelte"
    import NiHaoPinyinLogo from "../../assets/NihaoPinyinLogo.svg"
    import SuwonLogo from "../../assets/SuwonLogo.svg"
    import ProjectCard from "../project_card_component/project_card.svelte"
    import {projects} from "../../projects_data/projects"
</script>


    <div >
    <SectionHeader sectionTitle="Projects" />

    </div>

    <div class=" grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">

      
            {#each projects as project}
            <ProjectCard image={project.image} projectName={project.name} projectDescription={project.description}/>
            {/each}
      


    </div>