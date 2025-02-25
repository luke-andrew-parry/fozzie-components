# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.56.0
------------------------------
*August 16, 2022*

### Added
- Added Custom Viewports for Storybook testing (based around breakpoints and example devices)


v0.55.0
------------------------------
*August 10, 2022*

### Changed
- `storybook:deploy` step to work in GitHub Actions.


v0.54.1
------------------------------
*July 26, 2022*

### Fixed
- Issue where dependants weren't being served by `storybook:serve-changed` / `storybook:build-changed` Turborepo implementation.


v0.54.0
------------------------------
*July 25, 2022*

### Added
- Node 16 support.


v0.53.1
------------------------------
*July 25, 2022*

### Fixed
- `f-cookie-banner-static` from being picked up by Storybook

v0.53.0
------------------------------
*July 25, 2022*

### Removed
- `lerna` dependency.


v0.52.35
------------------------------
*July 20, 2022*
### Changed
- `storybook:deploy` to use native git push

### Removed
- `@storybook/storybook-deployer` dependency

v0.52.34
------------------------------
*July 19, 2022*
### Changed
- Fixed Storybook deploy

v0.52.33
------------------------------
*July 14, 2022*
### Changed
- updated vue.config to include f-takeawaypay-activation in components using @use and @forward


v0.52.32
------------------------------
*July 13, 2022*

### Changed
- updated vue.config to include f-registration in components using @use and @forward


v0.52.31
------------------------------
*July 7, 2022*

### Changed
- updated vue.config to include f-offers in components using @use and @forward


v0.52.30
------------------------------
*July 7, 2022*

### Changed
- updated vue.config to include f-loyalty in components using @use and @forward


v0.52.29
------------------------------
*July 7, 2022*

### Changed
- updated vue.config to include f-contact-preferences in components using @use and @forward


v0.52.28
------------------------------
*July 7, 2022*

### Changed
- updated vue.config to include f-checkout in components using @use and @forward


v0.52.27
------------------------------
*July 6, 2022*

### Changed
- updated vue.config to include f-account-info in components using @use and @forward


v0.52.26
------------------------------
*June 29, 2022*

### Changed
- updated vue.config to include f-footer in components using @use and @forward


v0.52.25
------------------------------
*June 29, 2022*

### Changed
- updated vue.config to include `f-header` in components using `@use` and `@forward`.


v0.52.24
------------------------------
*June 29, 2022*

### Changed
- updated lerna command to correctly build dependencies


v0.52.23
------------------------------
*June 28, 2022*

### Changed
- updated vue.config to include f-cookie-banner in components using @use and @forward


v0.52.22
------------------------------
*June 27, 2022*

### Changed
- updated vue.config to include f-content-cards in components using @use and @forward


v0.52.21
------------------------------
*June 27, 2022*

### Fixed
- `f-status-banner` storybook failure.


v0.52.20
------------------------------
*June 24, 2022*

### Changed
- `vue.config` to include `molecules` in components using `@use` and `@forward`.


v0.52.19
------------------------------
*June 24, 2022*

### Changed
- updated vue.config to include templates in components using @use and @forward


v0.52.18
------------------------------
*June 22, 2022*

### Changed
- `vue.config` to include `f-status-banner` in components using `@use` and `@forward`.


v0.52.16
------------------------------
*June 22, 2022*

### Changed
- updated vue.config to include `f-tabs` in components using @use and @forward


v0.52.15
------------------------------
*June 22, 2022*

### Changed
- updated vue.config to include `f-user-message` in components using @use and @forward


v0.52.14
------------------------------
*June 23, 2022*
### Changed
- updated vue.config to include f-navigation-links in components using @use and @forward


v0.52.13
------------------------------
*June 22, 2022*
### Changed
- updated vue.config to include f-mega-modal in components using @use and @forward


v0.52.12
------------------------------
*June 22, 2022*

### Changed
- updated vue.config to include `f-restaurant-card` in components using @use and @forward


v0.52.11
------------------------------
*June 22, 2022*

### Changed
- updated vue.config to include `f-promotions-showcase` in components using @use and @forward


v0.52.10
------------------------------
*June 20, 2022*

### Changed
- updated vue.config to include f-media-element in components using @use and @forward


v0.52.9
------------------------------
*June 20, 2022*

### Changed
- updated vue.config to include f-card-with-content in components using @use and @forward


v0.52.8
------------------------------
*June 20, 2022*

### Changed
- updated vue.config to include f-breadcrumbs in components using @use and @forward


v0.52.7
------------------------------
*June 17, 2022*

### Changed
- updated vue.config to include f-alert in components using @use and @forward


v0.52.6
------------------------------
*June 17, 2022*

### Changed
- updated vue.config to include all atoms in components using @use and @forward


v0.52.5
------------------------------
*June 17, 2022*

### Changed
- updated vue.config to include f-image-tile in components using @use and @forward


v0.52.4
------------------------------
*June 17, 2022*

### Changed
- updated vue.config to include f-form-field in components using @use and @forward


v0.52.3
------------------------------
*June 17, 2022*

### Changed
- updated vue.config to include f-filter-pill in components using @use and @forward


v0.52.2
------------------------------
*June 16, 2022*

### Changed
- updated vue.config to include f-error-message in components using @use and @forward


v0.52.1
------------------------------
*June 16, 2022*

### Changed
- updated vue.config to include f-card in components using @use and @forward


v0.52.0
------------------------------
*June 16, 2022*

### Changed
- updated vue.config to build components that are using @use and @forward Sass syntax


v0.51.0
------------------------------
*March 28, 2022*

### Added
- Remove obsolete logger interface


v0.50.0
------------------------------
*February 1, 2022*

### Added
- `postcss-assets` plugin to enable inline assets injection for css background images.


v0.49.0
------------------------------
*January 18, 2022*

### Added
- `"private": "true"` property to `package.json` to ensure the package doesn't get published to npm.

v0.48.0
------------------------------
*December 16, 2021*

### Changed
- Storybook webpack config to fix CircleCI master builds.


v0.47.0
------------------------------
*November 03, 2021*

### Added
- New `log` context item so we can phase out the `logger` one.


v0.46.0
------------------------------
*October 25, 2021*

### Added
- `storybook-vue-router` setup to work with `f-link`.


v0.45.1
------------------------------
*October 22, 2021*

### Changed
- Enabled expanded version of controls tab to show descriptions and default values of properties.
- Some css grid classes to be used in stories layout.


v0.45.0
------------------------------
*October 4, 2021*

### Changed
- Change the f-analytics mock to match version 0.17.0 of the component


v0.44.0
------------------------------
*September 12, 2021*

### Added
- Add $gtm (aka f-analytics) into Context so Mono Repo components can do this.$gtm.pushEvent({ ... }});


v0.43.0
------------------------------
*August 25, 2021*

### Changed
- Switched to a new font JetSansDigital


v0.42.1
------------------------------
*August 24, 2021*

### Changed
- Css for code snippets in the mdx docs


v0.42.0
------------------------------
*August 20, 2021*

### Added
- Visual regression setup and overview guide.
- Testing section to contributions page.


v0.41.0
------------------------------
*August 10, 2021*

### Added
- Add the f-http mockFactory to process within Storybook to support story API mocks


v0.40.0
------------------------------
*August 05, 2021*

### Added
- MDX file for media element

### Changed
- Upgraded the version of storybook to 6.3
- Modified the config for themes to make it work as much as possible


v0.39.0
------------------------------
*August 04, 2021*

### Added
- Upgrade to f-http@v0.6.1


v0.38.0
------------------------------
*July 14, 2021*

### Added
- Support for loading currently open story files via VS Code `launch.json`.


v0.37.0
------------------------------
*June 30, 2021*

### Changed
- Modified the storybook main.js config to make optional chaining work with babel, had to do in odd way as yarn workspaces affects the way babel works in storybook


v0.36.0
------------------------------
*June 24, 2021*

### Changed
- Storybook config now changed to only build changed components when run as part of CI (as we only test changed components, not all components on builds now).


v0.35.0
------------------------------
*June 17, 2021*

### Added
- `CNAME` record for custom `vue.pie.design` domain.

### Fixed
- Storybook deployer moved to the storybook package (so that it deploys the `index.html` to the root of `gh-pages` correctly).


v0.34.0
------------------------------
*May 14, 2021*

### Changed
- Bumped f-http to v0.4.1 from v0.4.0


v0.33.0
------------------------------
*May 12, 2021*

### Changed
- Limited the check for common.scss files to be only inside the repo


v0.32.0
------------------------------
*May 5, 2021*

### Changed
- Global css styles moved from `vue.config.js` to `scss-loader.scss` and now are imported in `preview.js` to remove style duplication in every component


v0.31.0
------------------------------
*May 5, 2021*

### Changed
- Heading updates to the storybook documentation – ensures storybook automatically generates anchor tags for these headings.


v0.30.0
------------------------------
*April 29, 2021*

### Added
- Wired up f-http within storybook context
- Added documentation page for capabilities


v0.29.0
------------------------------
*March 8, 2021*

### Added
- More tenants to Storybook globalisation file


v0.28.1
------------------------------
*March 8, 2021*

### Fixed
- CSS class name spelling mistake.


v0.28.0
------------------------------
*March 4, 2021*

### Added
- `dataLayer` context.


v0.27.0
------------------------------
*February 15, 2021*

### Changed
- Ordering of sub-pages updated with new documentation added.


v0.26.0
------------------------------
*February 9, 2021*

### Fixed
- Storybook helper popup now visible (previously had black text on black bg).
- Link styling in Storybook content updated so the links are clearly visible.


v0.25.0
------------------------------
*February 9, 2021*

### Added
- `vue-svg-loader` to Webpack config


v0.24.0
------------------------------
*February 5, 2021*

### Added
- Small additions to styling for browser checklist tables.


v0.23.0
------------------------------
*February 5, 2021*

### Added
- Some (horrible but necessary) inline CSS styles added for mdx pages in Storybook.


v0.22.0
------------------------------
*February 4, 2021*

### Fixed
- `ul` bullet styling updated to show in mdx files.
- `stories` glob updated to find stories within subfolders of the `stories/` directory.

### Changed
- Base theme config added to mdx files (including `JustEatBasis` font).
- Font size and margins for sidebar subheadings has been decreased.
- Story ordering added to Storybook config (via `storySort` object in `preview.js`).
- Documentation stories moved into sub-folder structure.


v0.21.0
------------------------------
*December 30, 2020*

### Changed
- Updated `sass-loader` config.


v0.20.0
------------------------------
*December 7, 2020*

### Changed
- Updated Context structure to make it identical to F-Development-Context which is used by WebDriver


v0.19.0
------------------------------
*December 3, 2020*

### Added
- Added Logger Context to allow writing to browser console within Storybook

### Changed
- Updated I18n Context Setup to follow new pattern


v0.18.0
------------------------------
*December 2, 2020*

### Added
- Add Cookie Universal into Context so Mono Repo components can do this.$cookies.get('my-cookie-name');


v0.17.0
------------------------------
*November 17, 2020*

### Changed
- Moved `sassOptions` config out of the Storybook `vue.config.js` so that it can be used by other components.


v0.16.0
------------------------------
*November 16, 2020*

### Added
- PIE dark theme!
- Custom PIE logo.
- Custom favicon.
- Set up public directory so that we can reference assets in stories and mdx
- `manager-head.html` so we can set up fonts and layout config.

### Changed
- Updated Storybook npm dependencies.
- Override list styles in `preview-head.html`.


v0.15.0
------------------------------
*November 9, 2020*

### Added
- `preview.js` file to decorate our stories with `vue-i18n`.


v0.14.0
------------------------------
*November 6, 2020*

### Removed
- Jest addon for Storybook


v0.13.0
------------------------------
*November 6, 2020*

### Changed
- CSS imports updated in line with fozzie v5.


v0.12.0
------------------------------
*September 28, 2020*

### Removed
- Percy visual regression dependencies


v0.11.0
------------------------------
*August 21, 2020*

### Changed
- Updated a11y addon reference for Storybook `v6` compatibility

### Added
- Added 'controls' addon (newer version of knobs for Storybook `v6`)


v0.10.0
------------------------------
*August 18, 2020*

### Added
- Config for parsing `.mdx` files which can be used for markdown documentation with components.

### Changed
- Updated to Storybook `v6` (and updated stories across other packages as part of the migration).


v0.9.0
------------------------------
*July 23, 2020*

### Fixed
- Ensures common and fozzie styles applied exclusively for scss fragments within `src`
  directory of a component only (allows stories themselves to be styled separately)


v0.8.0
------------------------------
*July 23, 2020*

### Changed
- Vue CLI minor package updates.


v0.7.0
------------------------------
*July 16, 2020*

### Fixed
- Stopped bad styles removing border around registration component.


v0.6.0
------------------------------
*July 9, 2020*

### Added
- New `percy` and `snapshot` scripts in `storybook` package for visual regression tests.


v0.5.0
------------------------------
*July 9, 2020*

### Changed
- Updated vue.config.js to import fozzie styles for all components in storybook build.


v0.4.0
------------------------------
*July 9, 2020*

### Changed
- Updated `sass-loader` to 7.3.1 to allow for contextual import of common.scss files from
  Single File Components in subdirectories.


v0.3.0
------------------------------
*July 2, 2020*

### Added
- Added `@storybook/addon-a11y` to a11y test our UI components in Storybook.


v0.2.0
------------------------------
*April 22, 2020*

### Added
- Added README.md


v0.1.0
------------------------------
*April 16, 2020*

### Added
- Added initial files.
