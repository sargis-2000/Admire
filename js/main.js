import { casesSlider } from "./modules/home/cases-slider.js";
import { desktopMenu } from "./modules/header/desktop-menu.js";
import { partners } from "./modules/home/partners.js";
import { mobileMenu } from "./modules/header/mobile-menu.js";
import { mobileMenuAccordion } from "./modules/header/mobile-menu-accordion.js";
import { projectsSlider } from "./modules/home/projects-slider.js";
import { benefitsSlider } from "./modules/home/benefits-slider.js";
import { featuresSlider } from "./modules/home/features-slider.js";
import { buySlider } from "./modules/home/buy-slider.js";
import { popup } from "./modules/popup/popup.js";
import { stickyHeader } from "./modules/header/sticky-header.js";
import { builders } from "./modules/header/builders.js";
import { scrollAnimation } from "./modules/home/scrollAnimation.js";

casesSlider();
desktopMenu();
partners();
mobileMenu();
mobileMenuAccordion();
projectsSlider();
benefitsSlider();
featuresSlider();
buySlider();
popup('[data-popup]');
stickyHeader();
builders();
scrollAnimation(
    '.pricing-desc',
    '.benefits-list--top',
    '.benefits-list--bottom',
    '.mobile-benefits',
    '.features-items',
    '.mobile-features',
    '.pricing-card--left',
    '.pricing-card--right',
);