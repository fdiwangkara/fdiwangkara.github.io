import { writable } from 'svelte/store';

function getPreferredTheme() {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
}

export const theme = writable(getPreferredTheme());

if (typeof window !== 'undefined') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

    systemTheme.addEventListener('change', (event) => {
        const newTheme = event.matches ? 'dark' : 'light';
        theme.set(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    });
}

theme.subscribe((value) => {
    if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', value === 'dark');
    }
});
