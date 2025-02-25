# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v4.3.0
------------------------------
*July 15, 2022*

### Added
- Node 16 support.


v4.2.0
------------------------------
*July 4, 2022*

### Changed
- Update f-wdio-utils to v1.1.0 to use new Axe Core implementation.
- Accessibility tests to be async.


v4.1.0
------------------------------
*July 1, 2022*

### Changed
- Update f-wdio-utils to v1.0.0
- Update component objects / specs to use ES6 syntax.

v4.0.0
------------------------------
*Jun 16, 2022*

### Changed
- Update to `@use` and `@forward` SASS syntax

v3.4.1
------------------------------
*Jun 10, 2022*

### Changed
- Bumped wdio version and fixed breaking changes.

*May 27, 2022*

### Removed
- unneeded `load` and `waitForComponent` functions from component object

*May 26, 2022*

### Changed
- Refactor WebDriverIO tests to use async in order to support Node 16 using `codemod` utility.


v3.4.0
------------------------------
*May 13, 2022*

### Changed
- Icons in component and storybook files

### Removed
- `@justeat/f-vue-icons`

### Added
- `@justeattakeaway/pie-icons-vue`


v3.3.1
------------------------------
*February 8, 2022*

### Changed
- Upgraded to ESLint v8
- Converted Storybook Knobs to Controls


v3.3.0
------------------------------
*January 28, 2022*

### Changed
- `spacing` references to new mapping from fozzie e.g spacing(x2) > spacing(d).

### Added
- Component, visual and accessibility tests for icon-buttons
- Updated `IconButton.stories` to show all types and sizes of icons - similar to `Button.stories`


v3.2.0
------------------------------
*October 25, 2021*

### Changed
- Button border style definition moved to button types. Introduced `background-color()` mixin to apply the same colour for the background and for the border colour.
- Each button size vertical padding reduced by 1px to make button height 56px/48px/40px/32px instead of 58px/50px/42px/34px.

### Removed
- Outline css styles as focus styles applied with `box-shadow`.


v3.1.0
------------------------------
*October 22, 2021*

### Changed
- Add spacing to buttons following a paragraph tag. This matches the current behaviour in Fozzie.
- Removed the background from the link button in disabled state.
- `f-vue-icons` package version bump.
- Button story now shows all the types and sizes of the button component (primary, secondary, outline and ghost).
- Changed knobs to controls for switching button props.
- Separate Demo story to still show one button in isolation.
- Separate story for Link Button to be able to run tests properly.
- Updated the tests in line with the changes.


v3.0.2
------------------------------
*October 13, 2021*

### Changed
- Margin between few full width buttons increased from 8px to 16px.


v3.0.1
------------------------------
*October 5, 2021*

### Changed
- Icon button loading state fix.


v3.0.0
------------------------------
*October 5, 2021*

### Changed
- New colour scheme and border radius in line with Icing Phase 2.

### Removed
- Font-family declaration from the button styles as we have one font for the whole site and there is no need in declaring it on button level.

### Added
- `inverse` and `ghostInverse` props for icon buttons


v2.0.0
------------------------------
*September 15, 2021*

- Return beta to master. Component has JETSansDigital font.

### Removed
- Normalise styles from the build. Note that now if consuming application doesn't have normalised (reset) styles, there may be some slight style differences after this update. If the consuming application uses fozzie, there shouldn't be any style differences as normalised styles should be added as part of the fozzie import.


v2.0.0-beta.0
------------------------------
*August 26, 2021*

### Updated
- New font JETSansDigital


v1.11.0
------------------------------
*August 24, 2021*

### Added
- `hasNestedContent` computed property that checks whether button content should be nested inside span tags.
- Secondary default slot to be used when content is not nested.
- Unit tests for `hasNestedContent` computed property.

### Changed
- Wrap nested content only when necessary.
- Use Vue object syntax to add optional classes.


v1.10.1
------------------------------
*July 23, 2021*

### Removed
- Extra wrapper around button text to fix `isIcon` button vertical alignment.


v1.10.0
------------------------------
*July 20, 2021*

### Added
- `trailing-icon` and `leading-icon` named slots for ability to add an icon before or after button text
- `hasIcon` prop for spacing and icon colours css classes to be added
- validation for `hasIcon` prop to be able to add only `leading`/`trailing`/false

### Changed
- Button paddings to be aligned with the PIE designs
- XSmall button font size to be aligned with the PIE designs


v1.9.0
------------------------------
*July 7, 2021*

### Changed
- `buttonType` has been tidied up a bit. Have added type validation for when the component is either a standard `button` or an `iconButton` (when `isIcon` is set to `true`). If an invalid type is now set for these variations, the component will throw an error when created.
- New `buttonType` of `ghostTertiary` has been added for use with the `iconButton` component.
- Added button sizes to constants and added prop validation these.


v1.8.1
------------------------------
*July 01, 2021*

### Fixed
- `$listeners` to button link issue
 - When `v-on` is set to `f-button` with `href` e.g. link would not trigger

 v1.8.0
------------------------------
*June 17, 2021*

### Changed
- Percy to run desktop / mobile in separate specs

v1.7.0
------------------------------
*June 15, 2021*

### Added
- Support for Vue Router link and tests


v1.6.1
------------------------------
*June 15, 2021*

### Fixed
- Small tweak to class-naming of `o-btn-text--flex` > `o-btn-text` so it matches our naming scheme.


v1.6.0
------------------------------
*June 7, 2021*

### Changed
- Fixed alignment of text when button is full width

### Added
- Data test ID to spinner so it's easier to test in components which use f-button


v1.5.0
------------------------------
*June 7, 2021*

### Added
- `isLoading` prop to allow the button to be in a loading state.


v1.4.0
------------------------------
*May 25, 2021*

### Added
- Percy visual regression tests

### Changed
- CSS variables to use pie design tokens instead of fozzie-colour-palette vars


v1.3.0
------------------------------
*May 25, 2021*

### Changed
- Cascade to fix disabled styling.

### Added
- Storybook control to show enabled/disabled styles.


v1.2.0
------------------------------
*March 11, 2021*

### Changed
- Button focus state.

### Fixed
- Element displaying `attributes="[object Object]"`.


v1.1.1
------------------------------
*March 8, 2021*

### Changed
- Formatting in storybook files.

### Fixed
- Pass button attributes to component correctly.


v1.1.0
------------------------------
*March 3, 2021*

### Added
- Separate story for `f-button--icon`
- Component  and accessibility test for link button

### Changed
- Restructured component object into page object model
- Refactored component and accessibility tests
- `f-button--icon` styles to show different button sizes for `--sizeMedium`, `--sizeLarge`, `--sizeSmall` and `--sizeXSmall`
- `f-button--icon` styles to show blue background for large primary `f-button--icon` instead of orange


v1.0.0
------------------------------
*February 10, 2021*

### Added
- Added `isIcon` prop to the f-button
- Added styles to display the icons properly if button is displayed as an icon

### Removed
 - Removed ButtonType `icon`


v0.7.0
------------------------------
*January 28, 2021*

### Changed
- Updated focus styles to provide more control over when focus outlines are displayed. See this article for more info - https://matthiasott.com/notes/focus-visible-is-here.
- Updated focus style to match the style used in the Fozzie SCSS.
- Updated package URL to match new structure.


v0.6.1
------------------------------
*January 25, 2021*

### Added
- Add a previous change to `$listeners` prop down to Action.vue


v0.6.0
------------------------------
*January 25, 2021*

### Added
- Forward `$listeners` prop to button component to be able to add events listeners to it without `.native`


v0.5.0
------------------------------
*January 21, 2021*

### Added
- `Action` component for standard buttons.
- `Link` component for links styled as buttons.

### Changed
- Updated config for latest `sass-loader`.
- Switches import in `common.scss` in line with fozzie v5-beta.


v0.4.1
------------------------------
*December 8, 2020*

### Changed
- Renamed VueButton to FButton


v0.4.0
------------------------------
*December 4, 2020*

### Added
- List of properties to the readme

### Changed
- `o-btn--icon` modifier

### Removed
- Margins from the button styles


v0.3.0
------------------------------
*November 26, 2020*

### Changed
- `font-weight` and `text-decoration` for `:hover` states for link buttons.


v0.2.0
------------------------------
*November 17, 2020*

### Added
- `background-colour` for `:hover` and `:active` states for primary large buttons.


v0.1.1
------------------------------
*November 12, 2020*

### Fixed
- Changed prop to be called `isFullWidth` rather than `fullWidth` to match convention.

*October 23, 2020*

### Added
- Stylelint added to lint styling on build.


v0.1.0
------------------------------
*October 21, 2020*

### Added
- First iteration of button component. Contains variants for primary, secondary, ghost, outline and btnLink.
