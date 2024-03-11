<script lang="ts" >
    export let titleName: string;
    export let href: string;
</script>

<h2 class={`animate-pulse hover:scale-105 hover:opacity-100 ease-cubic text-3xl underline underline-offset-8 text-zinc-800 font-medium capitalize mb-10 text-center cursor-pointer`} >
    <a href={href}>
        {titleName}
    </a>
</h2>