<template>
    <div :class="$style['c-search-suggestions']">
        <button
            v-for="(item, index) in suggestions"
            :key="index"
            data-test-id="suggestion-item"
            type="button"
            :class="{
                [$style['c-search-suggestions-item']]: true,
                [$style.selected]: index === selected
            }"
            @click="$emit('selected-suggestion', index)">
            {{ suggestionFormat(item) }}
        </button>
        <div :class="$style['c-search-poweredByGoogle']">
            <img
                :src="poweredByGoogle"
                alt=""
                data-test-id="poweredByGoogle">
        </div>
    </div>
</template>

<script>
// Look into trying to convert this to a SVG then it can be pulled in via f-vue-icons.
import poweredByGoogle from '../../assets/img/powered_by_google.png';

export default {
    props: {
        suggestions: {
            type: Array,
            default: () => []
        },

        suggestionFormat: {
            type: Function,
            default: () => ({
                suggestionFormat: suggestion => suggestion
            })
        },

        selected: {
            type: Number,
            default: 0
        }
    },

    data () {
        return {
            poweredByGoogle
        };
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

$suggestions-shadow: f.$color-grey-45 0 5px 6px -2px;

.c-search-suggestions {
    $border-radius: 2px;
    background: f.$color-container-default;
    box-shadow: $suggestions-shadow;
    border-bottom-left-radius: f.$border-radius;
    border-bottom-right-radius: f.$border-radius;
    position: absolute;
    left: 0;
    right: 0;
    top: 55px;
    box-sizing: border-box;
    overflow-y: auto;
    z-index: 1000;
}

.c-search-suggestions-item {
    display: block;
    width: 100%;
    border: 0;
    border-top: f.$color-border-default 1px solid;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-size: 11px;
    line-height: 30px;
    margin: 0;
    overflow: hidden;
    padding-left: 15px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover,
    &.selected {
        background: f.$color-container-strong;
    }
}

.c-search-poweredByGoogle {
    display: flex;
    justify-content: flex-end;
    padding: f.spacing();

    img {
        width: 100px;
        height: 12px;
    }
}
</style>
