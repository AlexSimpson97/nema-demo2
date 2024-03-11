<script lang="ts" >
    import { cubicIn, cubicOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    export let key: string;
    export let duration: number = 500;
    export const delay: number = duration + 100;
    
    const y = 15;

    const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

{#key key}
    <div class={`flex flex-col items-center text-zinc-900 relative md:max-w-[1920px] xs:max-w-[374px]`} in:fly={transitionIn} out:fly={transitionOut} >
        <slot />
    </div>
{/key}