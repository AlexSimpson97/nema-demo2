import { writable, get } from "svelte/store";
import { links } from "../lib/data";

type activeSection = (typeof links)[number]["name"]

function createActiveSection() {
    const { subscribe, set } = writable('');

    return {
        subscribe,
        setSectionTo: (section:activeSection) => set(section),
    }
}

export const activeSection = createActiveSection();


function timeSinceSectionChange() {
    const {subscribe, update} = writable(0);

    return {
        subscribe,
        was: (time: number) => update(() => (time)),
    }
}

export const timeOfLastClick = timeSinceSectionChange();


function setCurrentPage() {
    const { subscribe, set } = writable('');

    return {
        subscribe,
        setTo: (page: string) => set(page),
        is: () => get(currentPage),
    }
}

export const currentPage = setCurrentPage();


function pageLoadingState() {
    const {subscribe, set} = writable(false);

    return {
        subscribe,
        lemmeCheck: () =>  get(isPageLoading),
        update: (state: boolean = false) => set(state),
    }
}

export const isPageLoading = pageLoadingState();