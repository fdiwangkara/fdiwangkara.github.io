<script>
    import {theme} from "$lib/stores/theme.js";
    import {onMount} from "svelte";
    import {tick} from "svelte";

    let form = {
        email: "",
        subject: "",
        description: ""
    };

    let notification = null;

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            let response = await fetch("https://formspree.io/f/xeoajejb", {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                notification = { message: "Message successfully sent!", type: "success" };
                event.target.reset();
            } else {
                notification = { message: "Failed to send message.", type: "error" };
            }
        } catch (error) {
            notification = { message: "An error occurred.", type: "error" };
        }

        await tick();
        setTimeout(() => notification = null, 3000);
    }
</script>

<div class="min-h-screen flex flex-col justify-start bg-bg-light dark:bg-bg-dark transition-all duration-300">
    <div class="px-6 md:px-20 lg:px-36 xl:px-[200px] pt-[100px]">
        <h1 class="font-primary pt-5 pb-10 md:pb-5 text-center text-2xl md:text-4xl text-primary-light dark:text-primary-dark">
            Feel free to contact mE!
        </h1>

        <div class="relative flex justify-center mb-28 mt-10">
            <div class="absolute w-full max-w-lg h-full p-6 translate-y-2 -translate-x-2 bg-primary-light dark:bg-primary-dark rounded-[2px]"></div>

            <div class="relative w-full max-w-lg p-6 bg-bg-light dark:bg-bg-dark border border-text-light dark:border-text-dark rounded-[2px]">
                <form on:submit={handleSubmit} class="flex flex-col space-y-4 font-secondary">
                    <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            class="w-full p-3 bg-transparent border border-text-light dark:border-text-dark text-text-light dark:text-text-dark placeholder-gray-light dark:placeholder-gray-dark rounded-[2px] focus:outline-none"
                            required
                    />
                    <input
                            type="text"
                            name="subject"
                            placeholder="Enter subject"
                            class="w-full p-3 bg-transparent border border-text-light dark:border-text-dark text-text-light dark:text-text-dark placeholder-gray-light dark:placeholder-gray-dark rounded-[2px] focus:outline-none"
                            required
                    />
                    <textarea
                            name="description"
                            placeholder="Enter description"
                            class="w-full h-[200px] p-3 bg-transparent border border-text-light dark:border-text-dark text-text-light dark:text-text-dark placeholder-gray-light dark:placeholder-gray-dark rounded-[2px] focus:outline-none"
                            required
                    ></textarea>
                    <button
                            type="submit"
                            class="w-full p-3 text-white bg-primary-light dark:bg-primary-dark rounded-[2px] font-normal hover:opacity-80 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

{#if notification}
    <div class="fixed bottom-5 right-5 flex items-center gap-3 p-4 rounded-lg shadow-lg text-white animate-slide-in
        {notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>{notification.message}</span>
        <div class="relative w-6 h-6">
            <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                <circle class="text-gray-300" stroke-width="3" stroke="currentColor" fill="none" cx="18" cy="18" r="16"></circle>
                <circle class="text-white animate-circular-progress" stroke-width="3" stroke="currentColor" stroke-linecap="round" fill="none" cx="18" cy="18" r="16"></circle>
            </svg>
        </div>
    </div>
{/if}

<style>
    @keyframes slide-in {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes circular-progress {
        from { stroke-dasharray: 0, 100; }
        to { stroke-dasharray: 100, 100; }
    }
    @keyframes slide-out {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(20px); opacity: 0; }
    }
    .animate-slide-in { animation: slide-in 0.3s ease-out; }
    .animate-circular-progress { animation: circular-progress 3s linear forwards; stroke-dasharray: 100, 100; stroke-dashoffset: 100; }
</style>