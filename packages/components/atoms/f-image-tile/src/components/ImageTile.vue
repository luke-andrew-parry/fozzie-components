<template>
    <div
        :class="[
            $style['c-imageTile'], {
                [$style['c-imageTile--selected']]: isToggleSelected,
                [$style['c-imageTile--breakout']]: isBreakoutImage
            }]"
        data-test-id="image-tile-component">
        <image-tile-skeleton
            v-if="isLoading"
            :is-breakout-image='isBreakoutImage'
            data-test-id="image-tile-skeleton"
            aria-hidden="true" />
        <template v-else>
            <a
                :class="[
                    $style['c-imageTile-link'], {
                        [$style['c-imageTile-link--toggle']]: !isLink
                    }]"
                :href="href"
                :aria-hidden="!isLink"
                :tabindex="isLink ? false : -1"
                data-test-id="image-tile-link">
                <span class="is-visuallyHidden">
                    {{ displayText }}
                </span>
            </a>
            <input
                :id="`imageTileToggle-${tileId}`"
                type="checkbox"
                :checked="isToggleSelected"
                class="is-visuallyHidden"
                :class="$style['c-imageTile-checkbox']"
                data-test-id="image-tile-input"
                :tabindex="!isLink ? 0 : -1"
                @change="toggleFilter">
            <label
                :class="[
                    $style['c-imageTile-label'], {
                        [$style['c-imageTile-label--link']]: isLink
                    }]"
                :for="`imageTileToggle-${tileId}`"
                data-test-id="image-tile-label"
                :tabindex="!isLink ? -1 : false">
                <template v-if="isBreakoutImage">
                    <span
                        :class="$style['c-imageTile-innerWrapper']"
                        data-test-id="image-tile-inner-wrapper">
                        <span :class="$style['c-imageTile-inner']">
                            <span
                                :class="[
                                    $style['c-imageTile-backgroundContainer'], {
                                        [$style['c-imageTile-backgroundContainer--fallback']]: imgError
                                    }]"
                                :style="cssVars" />
                            <img
                                v-if="imgSrc && !imgError"
                                :class="$style['c-imageTile-image']"
                                :src="imgSrc"
                                data-test-id="image-tile-image"
                                :alt="altText"
                                :role="isPresentationRole ? 'presentation' : false"
                                @error="handleImgError">
                        </span>
                    </span>
                </template>
                <template v-else>
                    <span
                        :class="$style['c-imageTile-backgroundContainer']"
                        :style="cssVars">
                        <img
                            v-if="imgSrc && !imgError"
                            :class="$style['c-imageTile-image']"
                            :src="imgSrc"
                            data-test-id="image-tile-image"
                            :alt="altText"
                            :role="isPresentationRole ? 'presentation' : false"
                            @error="handleImgError">
                    </span>
                </template>
                <span
                    :class="$style['c-imageTile-textContainer']"
                    :aria-hidden="isLink">
                    <tick-icon :class="$style['c-imageTile-icon']" />
                    <span
                        :class="$style['c-imageTile-text']"
                        data-test-id="image-tile-text">
                        {{ displayText }}
                    </span>
                </span>
            </label>
        </template>
    </div>
</template>

<script>
import { TickIcon } from '@justeat/f-vue-icons';
import ImageTileSkeleton from './ImageTileSkeleton.vue';

export default {
    name: 'ImageTile',
    components: {
        TickIcon,
        ImageTileSkeleton
    },
    props: {
        href: {
            type: String,
            default: null
        },
        tileId: {
            type: String,
            default: null
        },
        isSelected: {
            type: Boolean,
            default: false
        },
        isLink: {
            type: Boolean,
            default: false
        },
        displayText: {
            type: String,
            default: null
        },
        imgSrc: {
            type: String,
            default: ''
        },
        altText: {
            type: String,
            default: ''
        },
        fallbackImage: {
            type: String,
            default: ''
        },
        isBreakoutImage: {
            type: Boolean,
            default: true
        },
        // An optional library for tracking rendering performance
        performanceTracker: {
            type: Object,
            default: null
        },
        performanceTrackerLabel: {
            type: String,
            default: null
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            isToggleSelected: false,
            imgError: false
        };
    },
    computed: {
        isPresentationRole () {
            return this.altText === '';
        },
        /**
         * Returns a css variable from the fallback image prop
         *
         */
        cssVars () {
            const cssVariable = JSON.stringify(this.fallbackImage);

            return {
                '--bg-image': `url(${cssVariable})`
            };
        }
    },
    watch: {
        isSelected (newValue) {
            if (newValue !== this.isToggleSelected) {
                this.isToggleSelected = newValue;
            }
        }
    },
    created () {
        this.isToggleSelected = this.isSelected;
    },
    mounted () {
        if (this.performanceTracker) {
            this.$nextTick(() => {
                this.performanceTracker.time(this.performanceTrackerLabel);
            });
        }
    },
    methods: {
        /**
         * Updates the isToggleSelected data property
         * when the checkbox is interacted with.
         *
         */
        toggleFilter () {
            this.isToggleSelected = !this.isToggleSelected;

            this.$nextTick(() => {
                this.$emit('toggle', this.createEmitObject(this.tileId));
            });
        },
        /**
         * Creates the object that is $emitted
         * when the checkbox is toggled
         *
         * @param {tileId} string
         */
        createEmitObject (tileId) {
            return {
                tileId
            };
        },
        /**
         * Updates the imgError data property
         * when image errors
         */
        handleImgError () {
            this.imgError = true;
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;
$image-tile-background-opacity: 0.7;
$image-tile-background-color: f.$color-interactive-brand;
$image-tile-selected: f.$color-content-positive;
$image-tile-transition-duration: 0.2s;
$image-tile-ease: ease-in-out;
$image-tile-reset-translate: translate3d(0, 0, 0);
$image-tile-text-transform: translate3d(f.spacing(a), 0, 0);
$image-tile-text-transform-breakout: translate3d(f.spacing(b), 0, 0);
@mixin image-tile-icon-selected-transform() {
    opacity: 1;
    transform: $image-tile-reset-translate scale(1) rotate(0);
    width: 15px;
}
@mixin image-tile-icon-selected-transform-breakout() {
    opacity: 1;
    transform: $image-tile-text-transform scale(1) rotate(0);
    width: 15px;
}

@mixin image-tile-focus() {
    border-radius: f.$radius-rounded-b;
    box-shadow: 0 0 0 2px f.$color-focus;
}

.c-imageTile {
    position: relative;
    width: 100%;

    &:focus-within {
        @include image-tile-focus();
    }
}

.c-imageTile-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &:focus {
        @include image-tile-focus();
    }
}

.c-imageTile-link--toggle {
    display: block;
    position: static;
    pointer-events: none;

    &:focus {
        outline: none; // Focus styles not needed in toggle state.
    }
}

.c-imageTile-label {
    display: flex;
    flex-flow: column wrap;
    cursor: pointer;

    &:focus {
        outline: none; // Prevents Safari doubling focus styles.
    }

    .c-imageTile--breakout & {
        display: block;
    }
}

.c-imageTile-label--link {
    pointer-events: none;
}

.c-imageTile-innerWrapper {
    position: relative;
    display: block;

    &:before {
        display: block;
        content: '';
        width: 100%;
        padding-top: math.div(3, 4) * 100%; // 4:3 aspect ratio
    }
}

.c-imageTile-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;

    .c-imageTile--breakout & {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}

.c-imageTile-backgroundContainer {
    background-color: rgba($image-tile-background-color, $image-tile-background-opacity);
    border-radius: f.$radius-rounded-b;
    background-image: var(--bg-image);
    display: block;
    padding-top: math.div(3, 5) * 100%; // 5:3 aspect ratio
    position: relative;

    .c-imageTile--breakout & {
        background-image: none;
        width: 92%;
    }

    &.c-imageTile-backgroundContainer--fallback {
        background-image: var(--bg-image);
    }
}

.c-imageTile-image {
    border-radius: f.$radius-rounded-b;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.c-imageTile-textContainer {
    margin-top: f.spacing(b);
    display: flex;
    max-width: 100%;

    .c-imageTile--selected & {
        color: $image-tile-selected;
    }

    .c-imageTile--breakout & {
        margin-top: 0;
    }
}

.c-imageTile-icon {
    align-self: center;
    opacity: 0;
    transform: translate3d(-#{f.spacing(c)}, 0, 0) scale(0.5) rotate(-60deg);
    width: 0;
    will-change: transform, opacity;

    @media (prefers-reduced-motion: no-preference) {
        transition: transform $image-tile-transition-duration $image-tile-ease,
                    opacity $image-tile-transition-duration $image-tile-ease,
                    width $image-tile-transition-duration $image-tile-ease;
    }

    .c-imageTile--breakout & {
        transform: translate3d(-#{f.spacing(b)}, 0, 0) scale(0.5) rotate(-60deg);
    }

    .c-imageTile--selected & {
        @include image-tile-icon-selected-transform();
    }

    .c-imageTile--selected.c-imageTile--breakout & {
        @include image-tile-icon-selected-transform-breakout();
    }

    @include f.media('>=mid') {
        .c-imageTile:hover & {
            @include image-tile-icon-selected-transform();
        }

        .c-imageTile.c-imageTile--breakout:hover & {
            @include image-tile-icon-selected-transform-breakout();
        }
    }
}

.c-imageTile-text {
    @include f.font-size(body-s);
    display: block;
    font-family: f.$font-family-base;
    font-weight: f.$font-weight-regular;
    margin-right: f.spacing(d);
    overflow: hidden;
    text-overflow: ellipsis;
    transform: $image-tile-reset-translate;
    white-space: nowrap;
    width: 100%;
    will-change: transform;

    @media (prefers-reduced-motion: no-preference) {
        transition: transform $image-tile-transition-duration $image-tile-ease;
    }

    .c-imageTile--breakout &,
    .c-imageTile--selected & {
        transform: $image-tile-text-transform;
    }

    .c-imageTile--selected.c-imageTile--breakout & {
        transform: $image-tile-text-transform-breakout;
    }
    @include f.media('>=mid') {

        .c-imageTile:hover & {
            transform: $image-tile-text-transform;
        }

        .c-imageTile.c-imageTile--breakout:hover & {
            transform: $image-tile-text-transform-breakout;
        }
    }
}
</style>
