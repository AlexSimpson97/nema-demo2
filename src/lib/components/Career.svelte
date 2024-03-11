<script lang="ts" >
    
    export let 
    title:"QCF Level 1 Certification" | "QCF Level 2 Certification" | "QCF Level 3 Certification", 
    description: "This provided to all our Staff and it covers an introduction to the skills, qualities, and knowledge that are required for employment in the Health and Social Care Sector. It’s designed to give you a basic understanding of the sector and to help you provide service of the utmost quality." | "We also offer Level 2 Certification and it’s designed for individuals who are looking to move further into the care sector or are currently working mainly under supervision" | "We also offer Level 3 Certification which is a comprehensive program designed to equip individuals with the knowledge and skills needed for a fulfilling career in the health and social services sector.", 
    focus: readonly ["Health and Safety", "Working with others", "Equality, Diversity and Inclusion", "Safeguarding", "Duty of Care"] | readonly ["Person-Centered Care", " Maintaining Individuals Independence", "Improving Delivery of Care"] | readonly ["Practical Training", "Care plans and Coordination services", "Responsible information handling"], imageUrl:string, 
    imageDesc: "Learning Online" | "Group Learning" | "Learning by Shadowing";
</script>

<div class={`mb-3 sm:mb-8 last:mb-0`}  >
    <section class={`relative  max-w-[75rem] border-black/5 rounded-xl overflow-hidden sm:pr-8 sm:h-[20rem] group-even:pl-8 hover:bg-zinc-300/[0.7] transition-all duration-700 ease-custom`}  >
        <div class={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[39.1rem]`}  >
            <h3 class={`text-2xl font-semibold`}  >{title}</h3>
            <p class={`mt-2 leading-relaxed text-zinc-600`}  >{description}</p>
            <ul class={`flex flex-wrap gap-2 mt-auto`}  >
                Skills you&apos;ll learn:
                {#each focus as singleFocus, i}
                    <li class={`bg-green-600/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full`}  >
                        {singleFocus}
                    </li>
                {/each}
            </ul>
        </div>
        <img src={imageUrl} alt={imageDesc} width={`452`} height={`286`} class={`xs:hidden object-cover absolute top-8 -right-[0rem] w-[28.25rem] rounded-t-lg group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-700 ease-custom group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-1 group-even:right-[initial] group-even:-left-[2.1rem]`}  >
    </section>
</div>