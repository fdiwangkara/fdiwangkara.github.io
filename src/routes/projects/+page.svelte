<script>
    import { theme } from "$lib/stores/theme.js";

    $: isDark = $theme === "dark";
</script>

<div class="h-screen flex items-center justify-center transition-all duration-300
    bg-bg-light dark:bg-bg-dark">
    <h1 class="font-primary text-5xl md:text-7xl text-center
        text-text-light dark:text-text-dark">
        Coming Soon
    </h1>
</div>
