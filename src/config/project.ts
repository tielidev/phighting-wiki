/** Optional links to a separate project landing site. Disabled by default. */

/**
 * Enable only after you create the matching landing routes.
 */
export const landingLinkEnabled = false;

/**
 * Header link shown when `landingLinkEnabled` is true.
 */
export const landingLink = {
  href: '/landing/',
  label: 'About this wiki',
  ariaLabel: 'About this wiki project',
} as const;

/**
 * Optional extra link for a translated landing site.
 */
export const zhLandingLink = { label: '中文 · 官网', href: '/zh/landing/' } as const;
