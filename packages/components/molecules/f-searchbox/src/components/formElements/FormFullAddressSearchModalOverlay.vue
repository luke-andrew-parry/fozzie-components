<template>
    <div v-if="isBelowMid">
        <full-address-overlay-search
            data-test-id="full-address-overlay"
            is-full-height
            is-scrollable
            :has-close-button="false"
            :is-open="shouldDisplayModalOverlay"
            :class="$style['c-megaModal--isFullWidth']"
            @close="onModalClose">
            <div
                :class="[
                    $style['c-fullAddressFinder-inner'],
                    { [$style['has-elevation']]: hasInputElevation }
                ]">
                <label
                    :class="{
                        [$style['c-search-label']]: true,
                        [$style['c-search-label--noBorder']]: true
                    }">
                    <input
                        :aria-label="copy.fieldLabel"
                        :class="{
                            [$style['c-search-input']]: true,
                            [$style['c-search-input-overlay']]: true,
                            [$style['is-notEmpty']]: true
                        }"
                        type="search"
                        @input="address = $event.target.value">
                    <span :class="$style['c-search-placeholder']">{{ copy.fieldLabel }}</span>

                    <loading-indicator />
                </label>

                <cancel-button
                    :class="$style['c-fullAddressFinder-btn']"
                    @click="onModalClose">
                    {{ copy.fullAddressSearchSuggestions.buttonCancel }}
                </cancel-button>
            </div>

            <full-address-search-suggestions
                v-if="hasSuggestionsToDisplay"
                data-test-id="full-address-modal-suggestions"
                :copy="copy"
                :config="config"
                :suggestions="suggestions" />
        </full-address-overlay-search>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FullAddressOverlaySearch from '@justeat/f-mega-modal';
import '@justeat/f-mega-modal/dist/f-mega-modal.css';
import CancelButton from '@justeat/f-button';
import '@justeat/f-button/dist/f-button.css';
import FullAddressSearchSuggestions from './FormFullAddressSearchSuggestions.vue';
import LoadingIndicator from '../FormStates/FormLoadingIndicator.vue';
import { ON_FULL_ADDRESS_MODAL_CLOSED } from '../../event-types';
import { VUEX_MODULE_NAMESPACE } from '../../services/constants';

export default {
    components: {
        FullAddressOverlaySearch,
        FullAddressSearchSuggestions,
        CancelButton,
        LoadingIndicator
    },

    props: {
        copy: {
            type: Object,
            default:  () => ({})
        },

        shouldDisplayModalOverlay: {
            type: Boolean,
            default: false
        },

        config: {
            type: Object,
            default: () => ({})
        }
    },

    data () {
        return {
            address: '',
            modalActive: false
        };
    },

    computed: {
        ...mapState(VUEX_MODULE_NAMESPACE, [
            'isBelowMid',
            'isFullAddressSearchEnabled',
            'suggestions',
            'hasInputElevation'
        ]),

        hasSuggestionsToDisplay () {
            return this.suggestions.length;
        }
    },

    watch: {
        shouldDisplayModalOverlay (value) {
            if (!value) {
                this.$emit(ON_FULL_ADDRESS_MODAL_CLOSED, false);
            }
        },

        address (value) {
            this.setAddress(value);
            this.getMatchedAreaAddressResults({
                address: value
            });
        }
    },

    methods: {
        ...mapActions(VUEX_MODULE_NAMESPACE, [
            'getMatchedAreaAddressResults',
            'setAddress'
        ]),

        onModalClose () {
            this.$emit(ON_FULL_ADDRESS_MODAL_CLOSED, false);
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

.c-fullAddressFinder-inner {
    width: 100%;
    padding: 20px;
    padding-right: 30px;
    box-sizing: border-box;
    display: flex;
    z-index: f.zIndex(aboveHighest);

    &.has-elevation {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.12);
    }
}

.c-search-input-overlay {
    flex: 1 1 auto;
    border: 1px solid f.$color-border-default;
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.11);

    &:focus {
        border: solid 2px f.$color-focus;
    }
}

.c-fullAddressFinder-btn {
    flex: 1 1 auto;
    border: 0;
    background-color: transparent;
    padding: 0;
    margin: 0 0 0 25px;
    color: f.$color-content-link;
    font-weight: f.$font-weight-bold;
    @include f.font-size(body-s, false);
    font-family: f.$font-family-base;

    &:hover {
        cursor: pointer;
        color: darken(f.$color-content-link, f.$color-hover-01);
        background-color: transparent;
    }
    &:active,
    &:focus {
        color: darken(f.$color-content-link, f.$color-active-01);
        background-color: transparent;
    }
}
</style>
