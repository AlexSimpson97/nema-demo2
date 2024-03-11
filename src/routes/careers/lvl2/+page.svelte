<script lang="ts"  >
    let spacedOut: String = "&nbsp;";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });
</script>

<div  class={`h-auto  border border-transparent box-border overflow-visible pb-24  relative focus:outline-auto user-invalid:shadow-none disabled:cursor-default sm:pb-32 scroll-mt-64`} >
    <img src="/squares.svg" alt="Background Squares" class={`opacity-50 xs:hidden absolute h-[591px] w-[604px] -z-[10] top-[19.7rem] right-[-35rem] max-w-full object-contain`}  >
    <img src="/squares.svg" alt="Background Squares" class={`rotate-180 opacity-50 xs:hidden absolute h-[591px] w-[604px] -z-[10] top-[19.7rem] left-[-45.5rem] max-w-full object-contain`}  >
    <div class={`border-0 border-solid border-zinc-300 box-border filter blur-[64px] left-[calc(max(6rem,33%))] absolute top-[-20rem] transform matrix-1 z-[-10] sm:left-[50%] md:top-[5rem] lg:ml-[5rem] xl:ml-[14rem] xl:top-[0.75rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
        <div 
            style={`clipPath: "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"`} 
            class={`aspect-[801/1036] border-0 border-solid border-zinc-300 box-border clip-[polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)] opacity-30 w-[50.0625rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
        </div>
    </div>
    <div class={`border-0 border-solid border-zinc-300 box-border mx-auto max-w-[80rem] px-[1.5rem] lg:px-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
        <div class={`border-0 border-solid border-zinc-300 box-border mx-auto max-w-[42rem] lg:mx-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
            <p class={`border-0 border-solid border-zinc-300 box-border text-zinc-700 text-[1.125rem] font-semibold tracking-tighter leading-[2rem] m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                Improve your skills
            </p>
            <h1 class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] text-[1.875rem] font-extrabold tracking-tighter leading-[2.25rem] mt-[0.5rem] sm:text-[2.25rem] sm:leading-[2.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                QCF Level 2 Certification
            </h1>
            <p class={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-[1.25rem] leading-[2rem] mt-[1.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                Enrolling on the Level 2 in Health and Social Care
                programme gives you the opportunity to achieve a
                nationally-recognised Level 2 vocationally-specific
                qualification
            </p>
        </div>
        <div class={`border-0 border-solid border-zinc-300 box-border gap-x-[2rem] gap-y-[4rem] grid grid-cols-1 mx-auto mt-[4rem] max-w-[42rem] lg:grid-cols-12 lg:mx-0 lg:mt-[2.5rem] lg:max-w-none focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
            <div class={`border-0 border-solid border-zinc-300 box-border relative lg:col-span-5 lg:order-[9999] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                    <svg
                        class={`border-0 border-solid border-zinc-300 box-border block h-[64rem] left-[0.25rem] absolute stroke-[rgba(17,24,39,0.1)] -top-40 transform-matrix-1 align-middle w-[175.5rem] z-[-10] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        aria-hidden="true"  >
                        <defs
                            class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            <pattern
                                id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                                width="200"
                                height="200"
                                patternUnits="userSpaceOnUse"
                                class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                <path
                                    d="M0.5 0V200M200 0.5L0 0.499983"
                                    class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                ></path>
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            
                            fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                            class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        ></rect>
                    </svg>
                    <figure
                        class={`border-l border-[#4f46e5] box-border m-0 pl-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        <blockquote
                            class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] text-[1.25rem] font-semibold tracking-tighter leading-[2rem] m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            <p
                                class={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                “Receiving my QCF Level 2 Certification was
                                a moment of immense pride and joy. It was a
                                testament to the investment I’ve made in my
                                job as a care worker. This recognition from
                                my care company has not only boosted my
                                confidence but also reaffirmed my commitment
                                to providing the highest quality of care. I
                                feel empowered, valued, and excited about
                                the future. This certification is more than
                                just a credential, it’s a milestone in my
                                journey of making a difference in people’s
                                lives.”
                            </p>
                        </blockquote>
                        <figcaption
                            class={`border-0 border-solid border-zinc-300 box-border gap-x-[1rem] flex mt-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            <div
                                class={`border-0 border-solid border-zinc-300 box-border text-[0.875rem] leading-[1.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                <div
                                    class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    A Proud Care Worker
                                </div>
                                <div
                                    class={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    Dec 2023
                                </div>
                            </div>
                        </figcaption>
                    </figure>
            </div>
            <div class={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-base leading-[1.75rem] max-w-[36rem] lg:col-span-7 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                <p class={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                    The Care Certificate is an agreed set of standards
                    that define the knowledge, skills and behaviours
                    expected of specific job roles in the health and
                    social care sectors. It’s made up of the 15 minimum
                    standards that should be covered if you are ‘new to
                    care’ and should form part of a robust induction
                    programme.
                </p>
                <ul role="list" class={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] list-none mt-[2rem] max-w-[36rem] p-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                    <li class={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                        <span class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                                Level 2 Award in Health and Social Care (QCF)
                            </strong>
                            <div></div>
                            Embark on an exhilarating journey with our
                            15-credit programme, meticulously designed
                            to delve into the unique facets of
                            employment within the relevant vocational
                            sector.
                            {@html spacedOut.repeat(92)}
                        </span>
                    </li>
                    <li class={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default mb-0 mt-2`}  >
                        <span class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-zinc-300 box-border text-zinc-900 font-semibold focus:outline-current shadow-none disabled:cursor-default`}  >
                                Level 2 Certificate in Health and Social Care (QCF)
                            </strong>
                            <div></div>
                            This 30-credit programme, is a comprehensive
                            extension of the Level 2 Certificate. This
                            programme is meticulously designed to
                            enhance your specialist work-related skills
                            and provide you with the essential knowledge
                            required in the respective vocational
                            sector. The Level 2 Extended Certificate is
                            a compelling programme, specifically
                            tailored for learners who have a clear
                            vision of their future employment sector. It
                            offers a harmonious blend of practical
                            skills and theoretical knowledge, setting
                            the stage for your professional growth. Join
                            us on this engaging and professionally
                            enriching journey.
                            {@html spacedOut.repeat(92)}
                        </span>
                    </li>
                    <li class={`border-0 border-zinc-300 box-border space-x-3 flex focus:outline-current shadow-none disabled:cursor-default mb-0 mt-2`}  >
                        <span class={`focus:outline-current shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                                Level 2 Diploma in Health and Social Care (QCF)
                            </strong>
                            <div></div>
                            Introducing our 60-credit programme, a
                            further extension of the Level 2 Extended
                            Certificate. This programme is designed to
                            deepen your specialist work-related skills
                            and provide you with the essential knowledge
                            required in the respective vocational
                            sector. The qualification offers learners
                            the opportunity to prepare for employment in
                            their chosen vocational sector. It’s an
                            ideal choice for those who have a clear
                            vision of their future career path.
                            Experience a subtly engaging and
                            professionally enriching learning journey
                            with us.
                        </span>
                    </li>
                </ul>
                <p class={`border-0 border-zinc-300 box-border mt-8 focus:outline-current shadow-none disabled:cursor-default`}  >
                    On successful completion of the Level 2 programme
                    you may progress to the Level 3 in Health and Social
                    Care. Alternatively you may want to more advanced
                    roles within caring sector or move on to a related
                    vocational programme.
                </p>
                <h2 class={`border-0 border-zinc-300 box-border text-zinc-900 text-3xl font-extrabold tracking-tighter leading-8 mt-16 focus:outline-current shadow-none disabled:cursor-default`} >
                    Unsure? No problem.
                </h2>
                <p class={`border-0 border-zinc-300 box-border mt-6 focus:outline-current shadow-none disabled:cursor-default`}  >
                    Unsure if you have the skills for this QCF Level
                    Certificate? Don’t worry! We’re here to guide you.
                    Our team is committed to helping you realize your
                    potential. Reach out to us, and let’s embark on this
                    rewarding journey together. Your care career awaits
                    you!
                </p>
            </div>
        </div>
    </div>
</div>