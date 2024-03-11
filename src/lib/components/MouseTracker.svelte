<script lang="ts" >
    // your script goes here
    let coords = {x: 0, y: 0 };

    function handleMove(event) {
        coords.x = event.clientX;
        coords.y = event.clientY;
    }

    $: xaxis = coords.x;
    $: yaxis = coords.y;
</script>

<main class={`flex flex-col items-center`} >
    <div on:pointermove={handleMove} class="flex flex-col items-center justify-center bg-zinc-200 h-screen w-full">
        <h1 class="bg-zinc-400">Your mouse position is:</h1>
        <p>{coords.x} x {coords.y}</p>
    </div>
</main>


<style lang="postcss">
    /* your styles go here */
    
</style>