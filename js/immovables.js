import { builders } from "./modules/header/builders.js";
import { desktopMenu } from "./modules/header/desktop-menu.js";
import { mobileMenu } from "./modules/header/mobile-menu.js";
import { mobileMenuAccordion } from "./modules/header/mobile-menu-accordion.js";
import { stickyHeader } from "./modules/header/sticky-header.js";

builders();
desktopMenu();
mobileMenu();
mobileMenuAccordion();
stickyHeader();