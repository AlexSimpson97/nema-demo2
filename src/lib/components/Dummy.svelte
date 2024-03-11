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
                We love to care
            </p>
            <h1 class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] text-[1.875rem] font-extrabold tracking-tighter leading-[2.25rem] mt-[0.5rem] sm:text-[2.25rem] sm:leading-[2.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                Domestic Tasks
            </h1>
            <p class={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-[1.25rem] leading-[2rem] mt-[1.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                If you or your loved one needs support with tasks within their
                home we can provide solutions; designing personalized
                care packages that will meet your all needs.
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
                                “Nema&apos;s Domestic Tasks Service has been a
                                blessing. It&apos;s like having an extra pair of
                                hands around the house. My home has never
                                been cleaner or more organized.”
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
                                    Grace
                                </div>
                                <div
                                    class={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    (client)
                                </div>
                            </div>
                        </figcaption>
                    </figure>
            </div>
            <div class={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-base leading-[1.75rem] max-w-[36rem] lg:col-span-7 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                <p class={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                    Nema Home Care&apos;s Domestic Tasks Service is a
                    comprehensive solution designed to assist with
                    everyday household chores. This service is built on
                    the principles of convenience, respect, and
                    independence, providing professional support to
                    maintain a clean and comfortable living environment.
                </p>
                <ul role="list" class={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] list-none mt-[2rem] max-w-[36rem] p-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                    <li class={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                        <span class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                                Convenience with Nema Home Care
                            </strong>
                            <div></div>
                            At Nema Home Care, we understand that
                            maintaining a household can be challenging,
                            especially for those with health concerns or
                            busy schedules. Our Domestic Tasks Service
                            is designed to provide assistance with
                            everyday chores, from cleaning and laundry
                            to meal preparation and grocery shopping.
                            Our team of dedicated professionals is
                            committed to helping you maintain a clean,
                            comfortable, and organized home.
                            {@html spacedOut.repeat(92)}
                        </span>
                    </li>
                    <li class={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default mb-0 mt-2`}  >
                        <span class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-zinc-300 box-border text-zinc-900 font-semibold focus:outline-current shadow-none disabled:cursor-default`}  >
                                A Partner in Your Daily Life
                            </strong>
                            <div></div>
                            Life is full of tasks and responsibilities,
                            and sometimes, a helping hand can make all
                            the difference. Whether it&apos;s assistance with
                            cleaning, laundry, meal preparation, or
                            grocery shopping, our Domestic Tasks Service
                            is here to help. We&apos;re not just caregivers;
                            we&apos;re partners in making your daily life
                            easier and more enjoyable.
                            {@html spacedOut.repeat(92)}
                        </span>
                    </li>
                    <li class={`border-0 border-zinc-300 box-border space-x-3 flex focus:outline-current shadow-none disabled:cursor-default mb-0 mt-2`}  >
                        <span class={`focus:outline-current shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                                Empowerment Through Assistance
                            </strong>
                            <div></div>
                            Our Domestic Tasks Service is more than just
                            a helping hand; it&apos;s a commitment to
                            enhancing your quality of life by taking
                            care of the chores that can sometimes be
                            overwhelming. We believe that everyone
                            deserves to live in a clean and comfortable
                            environment, and our service is designed to
                            ensure that you do.
                        </span>
                    </li>
                </ul>
                <p class={`border-0 border-zinc-300 box-border mt-8 focus:outline-current shadow-none disabled:cursor-default`}  >
                    With Nema Home Care&apos;s Domestic Tasks Service, you&apos;re
                    not just receiving assistance; you&apos;re gaining a
                    partner in your daily life. We&apos;re committed to
                    providing a service that respects your
                    individuality, supports your personal growth, and
                    empowers you to enjoy your home without the stress
                    of household chores.
                </p>
                <h2 class={`border-0 border-zinc-300 box-border text-zinc-900 text-3xl font-extrabold tracking-tighter leading-8 mt-16 focus:outline-current shadow-none disabled:cursor-default`} >
                    Unsure? No problem.
                </h2>
                <p class={`border-0 border-zinc-300 box-border mt-6 focus:outline-current shadow-none disabled:cursor-default`}  >
                    If you&apos;re unsure whether our Domestic Tasks Service
                    is right for you or your loved one, we encourage you
                    to reach out to us. Our team is always available to
                    answer your questions, discuss your needs, and help
                    you make the best decision for your unique
                    situation. At Nema Home Care, we&apos;re here to support
                    you.
                </p>
            </div>
        </div>
    </div>
</div>