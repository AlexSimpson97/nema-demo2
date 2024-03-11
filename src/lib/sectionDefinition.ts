import type { links } from "$lib/data";
import { activeSection } from '$lib/context';

type activeSectionData = (typeof links)[number]["name"] | 'Community' | 'Contact';
let newSection: activeSectionData;

export function defineSection(thispath: string) {    
    thispath = thispath === '' ? 'home' : thispath;
    newSection = ((thispath[0]).toUpperCase()) + (thispath.substring(1)) as activeSectionData;
    if (newSection === 'Community') {
        newSection = 'Our Community';
    };

    if (newSection === 'Contact') {
        newSection = 'Contact Us';
    };

    if (newSection) {
        activeSection.setSectionTo(newSection); 
    }

    return (
        console.log(`Section defined ${newSection}`)
    );
}