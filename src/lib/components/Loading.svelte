<script>
    import {onMount} from "svelte";

    let progress = 0;
    let isLoading = true;

    onMount(() => {
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => isLoading = false, 500);
            }
        }, 100);

        return () => clearInterval(interval);
    });

</script>

{#if isLoading}
    <div class="fixed inset-0 flex items-center justify-center bg-bg-light dark:bg-bg-dark z-[9999]">
        <div class="text-center">
            <div class="relative w-48 h-2 bg-grey-light dark:bg-grey-dark overflow-hidden">
                <div class="absolute top-0 left-0 h-full bg-primary-light dark:bg-primary-dark transition-all duration-200"
                     style="width: {progress}%;">
                </div>
            </div>
            <p class="mt-2 font-secondary text-text-light dark:text-text-dark">{Math.round(progress)}%</p>
        </div>
    </div>
{/if}

