<template>
    <div>
        <h2 :class="$style['c-footer-heading']">
            {{ buttonList.title }}
        </h2>

        <div :class="$style['c-buttonList']">
            <a
                v-for="(button, i) in buttonList.buttons"
                :key="`${i}_Button`"
                :href="button.url"
                :data-trak='`{
                    "trakEvent": "click",
                    "category": "engagement",
                    "action": "footer",
                    "label": "${button.gtm}"
                }`'
                :class="$style['c-buttonList-button']"
                target="_blank"
                rel="noopener noreferrer">
                {{ button.title }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonList: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

$buttonList-font-size: 'subheading-s';

.c-buttonList {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
}

.c-buttonList-button {
    background-color: f.$color-interactive-inverse;
    border-radius: 4px;
    color: f.$color-content-interactive-inverse;
    display: inline-block;
    @include f.font-size($buttonList-font-size, false);
    font-weight: f.$font-weight-headings;
    min-width: 226px;
    margin-right: f.spacing(d);
    margin-bottom: f.spacing();
    padding: 10px f.spacing(d);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;

    &:last-child {
        margin-right: 0;
    }

    &:hover,
    &:focus {
        background-color: darken(f.$color-interactive-inverse, f.$color-hover-01);
    }

    @include f.media('<narrow') {
        margin-bottom: f.spacing(d);
        margin-right: 0;
        width: 100%;

        &:last-child {
            margin-bottom: f.spacing();
        }
    }
}
</style>
