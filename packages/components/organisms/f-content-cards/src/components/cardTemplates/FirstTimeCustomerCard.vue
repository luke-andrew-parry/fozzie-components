<template>
    <card-container
        :card="card"
        :is-banner-before-description="true"
        :should-embolden-title="true"
    >
        <template v-slot:banner>
            <span
                :class="['c-restaurantCard-banner', $style['c-restaurantCard-banner']]">
                <span
                    :class="['c-restaurantCard-banner-content', $style['c-restaurantCard-banner-content']]"
                    data-test-id="FirstTimeCustomerCard-Banner">
                    {{ card.banner }}
                </span>
            </span>
        </template>
        <p
            :class="['c-restaurantCard-footer', $style['c-restaurantCard-footer']]">
            {{ card.footer }}
        </p>
    </card-container>
</template>

<script>
import CardContainer from './CardContainer.vue';

export default {
    components: {
        CardContainer
    },

    props: {
        card: {
            type: Object,
            default: () => ({})
        },

        testId: {
            type: String,
            default: undefined
        },

        tenant: {
            type: String,
            default: 'uk'
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

$banner-bgColour : f.$color-support-brand-02;
$banner-bgColour-legacy : #cd381f;

.c-restaurantCard-banner {
    position: relative;
    display: inline-block;
    background: $banner-bgColour;
    padding: 0 f.spacing();
    margin: f.spacing(d) 0 f.spacing() 0;
    border-radius: f.$radius-rounded-c;
}

.c-restaurantCard-banner-content {
    display: inline-block;
    font-weight: bold;
}

.c-restaurantCard-footer {
    @include f.font-size(caption);
    font-weight: bold;
    margin-top: f.spacing(a);
}
</style>
