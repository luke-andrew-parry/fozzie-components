<template>
    <div
        :data-theme-formfield="theme"
        :class="[
            $style['c-formField'], {
                [$style['c-formField--invalid']]: hasError,
                [$style['c-formField--grouped']]: isFieldGrouped,
                [$style['c-formField--hasAssistiveText']]: assistiveText
            }
        ]"
        :data-test-id="testId.container">
        <div
            :class="$style['c-formField-fieldWrapper']">
            <form-label
                v-if="shouldShowLabel"
                :label-for="uniqueId"
                :is-disabled="isDisabled"
                :show-required-indicator="showRequiredIndicator"
                v-bind="$props"
                :data-test-id="testId.label">
                {{ labelText }}
            </form-label>

            <form-field-affixed
                v-if="isAffixedField"
                :id="uniqueId"
                :attributes="$attrs"
                v-bind="$props"
                :type="normalisedInputType"
                v-on="listeners" />

            <form-dropdown
                v-else-if="isDropdown"
                :id="uniqueId"
                :attributes="$attrs"
                v-bind="$props"
                :has-icon="hasLeadingIcon"
                v-on="listeners" />

            <form-selection-control
                v-else-if="isSelectionControl"
                :id="uniqueId"
                :attributes="$attrs"
                v-bind="$props"
                v-on="listeners" />

            <textarea
                v-else-if="isTextarea"
                :id="`${uniqueId}`"
                :aria-labelledby="`label-${uniqueId}`"
                :value="value"
                v-bind="$attrs"
                :class="[
                    $style['c-formField-field'],
                    $style['c-formField-field--textarea'],
                    { [$style['c-formField--invalid']]: hasError }
                ]"
                :data-test-id="testId.textarea"
                v-on="listeners" />

            <input
                v-else
                :id="`${uniqueId}`"
                :aria-labelledby="`label-${uniqueId}`"
                :value="value"
                v-bind="$attrs"
                :type="normalisedInputType"
                :min="normalisedInputType === 'number' ? minNumber : false"
                :max="normalisedInputType === 'number' ? maxNumber : false"
                :data-test-id="testId.input"
                :class="[
                    $style['c-formField-field'],
                    $style[`c-formField-field--${fieldSize}`], {
                        [$style['c-formField--invalid']]: hasError,
                        [$style['c-formField-padding--iconLeading']]: hasLeadingIcon,
                        [$style['c-formField-padding--iconTrailing']]: hasTrailingIcon
                    }]"
                v-on="listeners"
            >

            <span
                v-if="hasLeadingIcon"
                :class="[
                    $style['c-formField-icon'],
                    $style[`c-formField-icon--${fieldSize}`],
                    $style['c-formField-icon--leading'],
                    { [$style['c-formField-icon--disabled']]: isDisabled }
                ]">
                <slot
                    name="icon-leading"
                />
            </span>

            <span
                v-if="hasTrailingIcon"
                :class="[
                    $style['c-formField-icon'],
                    $style[`c-formField-icon--${fieldSize}`],
                    $style['c-formField-icon--trailing'],
                    { [$style['c-formField-icon--disabled']]: isDisabled }
                ]">
                <slot
                    name="icon-trailing"
                />
            </span>

            <p
                v-if="assistiveText"
                :class="$style['c-formField-assistiveText']">
                {{ assistiveText }}
            </p>
            <slot
                v-else-if="hasAssistiveTextSlot"
                name="assistive-text-slot" />
        </div>

        <slot name="error" />
    </div>
</template>

<script>
import { globalisationServices } from '@justeat/f-services';
import FormFieldAffixed from './FormFieldAffixed.vue';
import FormDropdown from './FormDropdown.vue';
import FormLabel from './FormLabel.vue';
import FormSelectionControl from './FormSelectionControl.vue';
import debounce from '../services/debounce';
import tenantConfigs from '../tenants';

import {
    CUSTOM_INPUT_TYPES,
    DEFAULT_INPUT_TYPE,
    VALID_INPUT_TYPES,
    VALID_ICON_INPUT_TYPES,
    VALID_TEXT_INPUT_TYPES,
    DEFAULT_FIELD_SIZE,
    VALID_FIELD_SIZES
} from '../constants';

export default {
    name: 'FormField',

    components: {
        FormFieldAffixed,
        FormDropdown,
        FormLabel,
        FormSelectionControl
    },

    inheritAttrs: false,

    props: {
        locale: {
            type: String,
            default: ''
        },

        labelText: {
            type: String,
            default: ''
        },

        inputType: {
            type: String,
            default: DEFAULT_INPUT_TYPE,
            validator: value => ((VALID_INPUT_TYPES.indexOf(value) !== -1) || (CUSTOM_INPUT_TYPES.indexOf(value) !== -1))// The prop value must match one of the valid input types
        },

        shouldShowLabelText: {
            type: Boolean,
            default: true
        },

        fieldSize: {
            type: String,
            default: DEFAULT_FIELD_SIZE,
            validator: value => (VALID_FIELD_SIZES.indexOf(value) !== -1) // The prop value must match one of the valid field sizes
        },

        value: {
            type: [String, Number],
            default: ''
        },

        hasError: {
            type: Boolean,
            default: false
        },

        dropdownOptions: {
            type: Array,
            default: () => null
        },

        isGrouped: {
            type: Boolean,
            default: false
        },

        minNumber: {
            type: [Number, undefined],
            default: undefined
        },

        maxNumber: {
            type: [Number, undefined],
            default: undefined
        },

        labelDescription: {
            type: String,
            default: ''
        },

        labelDetails: {
            type: String,
            default: ''
        },

        assistiveText: {
            type: String,
            default: ''
        },

        prefix: {
            type: String,
            default: '',
            validator: value => (value.length <= 3)
        },

        suffix: {
            type: String,
            default: '',
            validator: value => (value.length <= 3)
        },

        isVisuallyRequired: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            windowWidth: null
        };
    },

    computed: {
        normalisedInputType () {
            if (VALID_INPUT_TYPES.includes(this.inputType)) {
                return this.inputType;
            }
            return DEFAULT_INPUT_TYPE;
        },

        formFieldLocale () {
            return globalisationServices.getLocale(tenantConfigs, this.locale, this.$i18n);
        },

        copy () {
            const localeConfig = tenantConfigs[this.formFieldLocale];
            return { ...localeConfig };
        },

        theme () {
            return globalisationServices.getTheme(this.formFieldLocale);
        },

        listeners () {
            return {
                ...this.$listeners,
                input: this.updateValue,
                update: this.updateOption
            };
        },

        uniqueId () {
            const idArray = ['formField'];

            if (this.$attrs.name) idArray.push(this.$attrs.name);
            if (this.$attrs.id) idArray.push(this.$attrs.id);

            idArray.push(this._uid);
            return idArray.join('-');
        },

        testId () {
            const formFieldName = this.$attrs.name;
            return {
                container: formFieldName ? `formfield-${formFieldName}` : 'formfield-container',
                input: formFieldName ? `formfield-${formFieldName}-input` : 'formfield-input',
                label: formFieldName ? `formfield-${formFieldName}-label` : 'formfield-label',
                textarea: formFieldName ? `formfield-${formFieldName}-textarea` : 'formfield-textarea'
            };
        },

        isDropdown () {
            return this.inputType === 'dropdown';
        },

        isSelectionControl () {
            return this.inputType === 'radio' || this.inputType === 'checkbox';
        },

        isFieldGrouped () {
            return this.isGrouped && !this.hasError;
        },

        isTextarea () {
            return this.inputType === 'textarea';
        },

        isDisabled () {
            return this.$attrs.disabled === 'disabled';
        },

        isValidIconField () {
            return VALID_ICON_INPUT_TYPES.includes(this.inputType);
        },

        hasLeadingIcon () {
            return Boolean(this.$slots['icon-leading']);
        },

        hasTrailingIcon () {
            return Boolean(this.$slots['icon-trailing']);
        },

        hasAssistiveTextSlot () {
            return Boolean(this.$slots['assistive-text-slot']);
        },

        isAffixedField () {
            return Boolean(this.prefix || this.suffix);
        },

        isAffixedType () {
            return VALID_TEXT_INPUT_TYPES.includes(this.inputType);
        },

        shouldShowLabel () {
            return this.shouldShowLabelText && !this.isSelectionControl;
        },

        showRequiredIndicator () {
            // Empty string is default value and should return true
            return ![undefined, false].includes(this.$attrs.required) && this.isVisuallyRequired;
        }
    },

    watch: {
        $props: {
            immediate: true,
            handler () {
                this.validateProps();
            }
        }
    },

    mounted () {
        window.addEventListener('resize', debounce(this.updateWidth, 100));
        this.updateWidth();
    },

    destroyed () {
        window.removeEventListener('resize', this.updateWidth);
    },

    methods: {
        updateValue (event) {
            this.$emit('input', event.target.value);
        },

        updateOption (option) {
            this.$emit('input', option);
        },

        updateWidth () {
            if (typeof (window) !== 'undefined') {
                this.windowWidth = window.innerWidth;
            }
        },

        validateProps () {
            if (!this.isValidIconField && (this.hasLeadingIcon || this.hasTrailingIcon)) {
                throw new TypeError(`Form field is set to have inputType="${this.inputType}", but icons can only be displayed one of the following inputTypes: "${VALID_ICON_INPUT_TYPES.join('", "')}"`);
            }

            if (this.isDropdown && this.hasTrailingIcon) {
                throw new TypeError(`Form field is set to have inputType="dropdown", but trailing icons can only be displayed one of the following inputTypes: "${VALID_TEXT_INPUT_TYPES.join('", "')}"`);
            }

            if (this.isAffixedField && !this.isAffixedType) {
                const afixType = this.prefix ? 'prefix' : 'suffix';

                throw new TypeError(`Form field is set to have a "${afixType}" and inputType="${this.inputType}", "${afixType}" is only available with one of the following inputTypes: "${VALID_TEXT_INPUT_TYPES.join('", "')}"`);
            }

            if (this.prefix && this.hasLeadingIcon) {
                throw new TypeError('Form field is set to have a "prefix" and "leadingIcon", only one can be displayed');
            }

            if (this.suffix && this.hasTrailingIcon) {
                throw new TypeError('Form field is set to have a "suffix" and "trailingIcon", only one can be displayed');
            }
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

$form-input-icon-verticalIndent                : 15px;
$form-input-icon-verticalIndent--small         : 11px;
$form-input-icon-verticalIndent--large         : 19px;
$form-input-iconSize                           : 18px;

    ::placeholder {
        color: common.$form-input-secondaryTextColour;
    }

    .c-formField-field--textarea {
        background-clip: padding-box;
        padding: f.spacing(d);
        resize: none;
    }

    .c-formField--grouped {
        & + & {
            margin-top: 0;

            .c-formField-field {
                border-radius: 0 0 common.$form-input-borderRadius common.$form-input-borderRadius;
                border-top: 0;
            }
        }
    }

    .c-formField--grouped:not(:last-child) {
        .c-formField-field {
            border-radius: 0;
        }
    }

    .c-formField--grouped:nth-of-type(1) {
        .c-formField-field {
            border-radius: common.$form-input-borderRadius common.$form-input-borderRadius 0 0;
        }
    }

    .c-formField-icon {
        svg {
            position: absolute;
            height: $form-input-iconSize;
            width: $form-input-iconSize;

            path {
                fill: common.$form-input-secondaryTextColour;
            }
        }
    }

    .c-formField-icon--disabled {
        svg {
            path {
                fill: f.$color-content-disabled;
            }
        }
    }

    .c-formField-icon--small {
        @include common.indent-icon('bottom', $form-input-icon-verticalIndent--small);
    }

    .c-formField-icon--medium {
        @include common.indent-icon('bottom', $form-input-icon-verticalIndent);
    }

    .c-formField-icon--large {
        @include common.indent-icon('bottom', $form-input-icon-verticalIndent--large);
    }

    .c-formField-icon--leading {
        @include common.indent-icon('leading', $form-input-icon-verticalIndent);
    }

    .c-formField-icon--trailing {
        @include common.indent-icon('trailing', $form-input-icon-verticalIndent);
    }

    .c-formField-padding--iconTrailing {
        padding-right: common.$form-input-iconPadding;
    }

    .c-formField-assistiveText {
        position: absolute;
        font-weight: f.$font-weight-regular;
        color: common.$form-input-secondaryTextColour;
        margin-top: f.spacing(a);
    }

    .c-formField--hasAssistiveText {
        & + & {
            margin-top: f.spacing(g);
        }
    }
</style>
