<template>
    <div
        :class="[$style['c-restaurantCard-fees']]"
        data-test-id="restaurant-delivery-fees">
        <icon-text
            v-if="deliveryFeeText"
            :class="[$style['c-restaurantCard-fees-item']]"
            :text="deliveryFeeText"
            :hide-icon-in-tile-view="true"
            data-test-id="restaurant-fees-delivery">
            <cash-small-icon data-test-id="restaurant-fees-delivery-icon" />
        </icon-text>

        <icon-text
            v-if="minOrderText"
            :class="[$style['c-restaurantCard-fees-item']]"
            :text="minOrderText"
            data-test-id="restaurant-fees-min-order" />
    </div>
</template>

<script>
import { CashSmallIcon } from '@justeat/f-vue-icons';
import IconText from '../IconText.vue';

export default {
    name: 'RestaurantFees',
    components: {
        IconText,
        CashSmallIcon
    },
    props: {
        deliveryFeeText: {
            type: String,
            default: null
        },
        minOrderText: {
            type: String,
            default: null
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

.c-restaurantCard-fees {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.c-restaurantCard-fees-item {
    white-space: nowrap;
}

.c-restaurantCard-fees-item + .c-restaurantCard-fees-item:before {
   @include common.dotSeparator;
}
</style>
