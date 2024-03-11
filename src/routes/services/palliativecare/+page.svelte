<script lang="ts"  >
    import "../../../app.css";
	import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });
</script>

<div  class={`h-auto  border border-transparent box-border overflow-visible pb-24  relative focus:outline-auto user-invalid:shadow-none disabled:cursor-default sm:pb-32 scroll-mt-64 xs:w-screen`} >
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
                Palliative Care
            </h1>
            <p class={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-[1.25rem] leading-[2rem] mt-[1.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                If you or your loved one needs support in the twilight
                of their life we can provide solutions; designing
                personalized care packages that will meet your all
                needs.
            </p>
        </div>
        <div class={`border-0 border-solid border-zinc-300 box-border gap-x-[2rem] gap-y-[4rem] grid grid-cols-1 mx-auto mt-[4rem] max-w-[42rem] lg:grid-cols-12 lg:mx-0 lg:mt-[2.5rem] lg:max-w-none focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
            <div class={`border-0 border-solid border-zinc-300 box-border relative lg:col-span-5 lg:order-[9999] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                    <figure
                        class={`border-l border-[#4f46e5] box-border m-0 pl-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        <blockquote
                            class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] text-[1.25rem] font-semibold tracking-tighter leading-[2rem] m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            <p
                                class={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                “I remain grateful for your compassionate
                                care of my dear wife. Her final days were
                                filled with dignity and warmth. Your
                                kindness will forever echo in our hearts”
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
                                    Ben
                                </div>
                                <div
                                    class={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    (ex-client&apos;s partner)
                                </div>
                            </div>
                        </figcaption>
                    </figure>
            </div>
            <div class={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-base leading-[1.75rem] max-w-[36rem] lg:col-span-7 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                <p class={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                    Nema Home Care&apos;s Palliative Care Service is a
                    specialized offering designed to provide comfort and
                    support to individuals facing serious illness. This
                    service is built on the principles of compassion,
                    dignity, and respect, providing professional care
                    tailored to the individual&apos;s needs and wishes.
                </p>
                <ul role="list" class={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] list-none mt-[2rem] max-w-[36rem] p-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`} >
                    <li class={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                        <span class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default leading-10`}  >
                                Experience Compassionate Care with Nema Home Care
                            </strong>
                            <div></div>
                            At Nema Home Care, we understand the unique
                            challenges faced by individuals and families
                            dealing with serious illness. Our Palliative
                            Care Service is designed to provide comfort,
                            alleviate suffering, and enhance quality of
                            life. Our team of dedicated professionals is
                            committed to delivering compassionate care
                            that respects the individual&apos;s needs and
                            wishes.
                            <div class={`mb-6`}  ></div>
                            <!-- {@html spacedOut.repeat(92)} -->
                        </span>
                    </li>
                    <li class={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default mb-0 mt-2`}  >
                        <span class={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-zinc-300 box-border text-zinc-900 font-semibold focus:outline-current shadow-none disabled:cursor-default leading-10`}  >
                                A Comforting Hand
                            </strong>
                            <div></div>
                            Facing a serious illness can be a daunting
                            journey, but you don&apos;t have to face it
                            alone. At Nema Home Care, we&apos;re here to walk
                            this journey with you. Our Palliative Care
                            Service provides not just medical care, but
                            also emotional and spiritual support,
                            helping to bring peace and comfort during a
                            difficult time.
                            <div class={`mb-6`}  ></div>
                            <!-- {@html spacedOut.repeat(92)} -->
                        </span>
                    </li>
                    <li class={`border-0 border-zinc-300 box-border space-x-3 flex focus:outline-current shadow-none disabled:cursor-default mb-0 mt-2`}  >
                        <span class={`focus:outline-current shadow-none disabled:cursor-default`}  >
                            <strong class={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default leading-10`}  >
                                Empowerment Through Care
                            </strong>
                            <div></div>
                            Our Palliative Care Service is more than
                            just a care package; it&apos;s a commitment to
                            enhancing your quality of life. We provide
                            the support needed to manage symptoms, make
                            informed decisions about care, and navigate
                            the healthcare system, all while promoting a
                            sense of peace and dignity.
                        </span>
                    </li>
                </ul>
                <p class={`border-0 border-zinc-300 box-border mt-8 focus:outline-current shadow-none disabled:cursor-default`}  >
                    With Nema Home Care&apos;s Palliative Care Service,
                    you&apos;re not just receiving care; you&apos;re gaining a
                    partner in your journey. We&apos;re committed to
                    providing a service that respects your
                    individuality, supports your personal growth, and
                    empowers you to live your life with dignity and
                    comfort.
                </p>
                <h2 class={`border-0 border-zinc-300 box-border text-zinc-900 text-3xl font-extrabold tracking-tighter leading-8 mt-16 focus:outline-current shadow-none disabled:cursor-default`} >
                    Unsure? No problem.
                </h2>
                <p class={`border-0 border-zinc-300 box-border mt-6 focus:outline-current shadow-none disabled:cursor-default`}  >
                    If you&apos;re unsure whether our Palliative Care Service
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