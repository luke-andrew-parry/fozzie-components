<template>
    <div
        :class="$style['c-offers']"
        data-test-id="offers">
        <offers-header />
        <div :class="$style['c-offers-wrapper']">
            <offers-results v-if="isAuthenticated" />
            <unauthenticated v-else />
            <no-offers-found />
        </div>
    </div>
</template>

<script>
import { VueGlobalisationMixin } from '@justeat/f-globalisation';
import { mapActions, mapGetters } from 'vuex';
import tenantConfigs from '../tenants';
import NoOffersFound from './NoOffersFound.vue';
import Unauthenticated from './Unauthenticated.vue';
import '@justeat/f-searchbox/dist/f-searchbox.css';
import '@justeat/f-mega-modal/dist/f-mega-modal.css';
import OffersHeader from './Header.vue';
import OffersResults from './Results.vue';
import { ACTION_INITIALISE_OFFERS, VUEX_MODULE_NAMESPACE_OFFERS } from '../store/types';
import offers from '../store/offers.module';

export default {
    name: 'VOffers',

    components: {
        NoOffersFound,
        OffersHeader,
        OffersResults,
        Unauthenticated
    },

    mixins: [
        VueGlobalisationMixin
    ],

    props: {
        authToken: {
            type: String,
            default: undefined
        },
        brazeApiKey: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            tenantConfigs
        };
    },

    computed: {
        ...mapGetters(VUEX_MODULE_NAMESPACE_OFFERS, [
            'isAuthenticated'
        ])
    },

    /**
     * Set up the offers vuex module
    */
    beforeCreate () {
        if (!this.$store.hasModule(VUEX_MODULE_NAMESPACE_OFFERS)) {
            this.$store.registerModule(VUEX_MODULE_NAMESPACE_OFFERS, offers);
            this.$log.info(
                'f-offers (main) - Vuex module registered for f-offers',
                'offers'
            );
        }
    },

    /**
     * Initialise the offers module by passing in the required values from props
     */
    async mounted () {
        await this.init({
            brazeApiKey: this.brazeApiKey,
            authToken: this.authToken
        });
        this.$log.info(
            'f-offers (main) - Offers page mounted',
            'offers',
            {
                data: {
                    brazeApiKey: this.brazeApiKey
                }
            }
        );
    },

    methods: {
        ...mapActions(VUEX_MODULE_NAMESPACE_OFFERS, {
            init: ACTION_INITIALISE_OFFERS
        })
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

.c-offers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: auto;
    margin-top: -15px;
    background-color: f.$color-grey-10;
}

.c-offers-wrapper {
    width: 100%;
    max-width: #{f.$layout-max-width}px;
    margin: 0 auto;
    padding: #{f.$layout-margin}px;

    @include f.media('<mid') {
        padding: #{f.$layout-margin--mid}px;
    }

    @include f.media('<narrow') {
        padding: #{f.$layout-margin--narrow}px;
    }
}
</style>
