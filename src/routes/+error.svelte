<script>
    import { theme } from "$lib/stores/theme.js";

    $: isDark = $theme === "dark";
    $: errorIcon = isDark
        ? "/assets/icons/error_dark.svg"
        : "/assets/icons/error_light.svg";
</script>

<div class="h-screen flex flex-col items-center justify-center transition-all duration-300
    bg-bg-light dark:bg-bg-dark px-10">
    <div class="flex items-center space-x-4">
        <img src={errorIcon} alt="Error Icon" class="w-16 md:w-20 pb-[25px] hidden md:block">
        <h1 class="font-primary text-5xl md:text-7xl text-center
            text-text-light dark:text-text-dark">
            404
        </h1>
    </div>

    <div class="flex items-center px-10 max-w-[600px]">
        <p class="font-secondary text-center text-grey-light dark:text-grey-dark text-sm md:text-lg break-words">
            The page you are looking for does not found click here to return to approach page
        </p>
    </div>

    <div class="relative group mt-8 hidden md:block">
        <div class="absolute inset-0 bg-bg-light border border-bg-dark dark:bg-primary-light dark:border-none rounded-[5px]
            translate-y-1 -translate-x-1 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0">
        </div>
        <button
                on:click={() => window.location.href = '/'}
                class="relative px-6 py-1 text-base sm:text-sm font-secondary rounded-[5px] border
            border-text-light text-text-dark dark:text-text-light
            bg-primary-light dark:bg-bg-light dark:border-text-light transition-all duration-300">
            Back to Approach
        </button>
    </div>

    <div class="relative group mt-8 md:hidden">
        <div class="absolute inset-0 bg-bg-light border border-bg-dark dark:bg-primary-light dark:border-none rounded-[5px]
            translate-y-1 -translate-x-1 transition-all duration-300">
        </div>
        <button
                on:click={() => window.location.href = '/'}
                class="relative px-6 py-1 text-[12px] sm:text-sm font-secondary rounded-[5px] border
            border-text-light text-text-dark dark:text-text-light
            bg-primary-light dark:bg-bg-light dark:border-text-light transition-all duration-300">
            Back to Approach
        </button>
    </div>
</div>
