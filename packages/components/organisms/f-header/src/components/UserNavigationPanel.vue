<template>
    <ul
        :aria-label="copy.navTitle"
        :class="[$style['c-nav-popoverList'],
                 $style['c-user-list']]">
        <li
            v-for="(link, index) in copy.navLinks"
            :key="index"
            data-test-id="nav-links">
            <nav-link
                :class="$style['c-user-list-link']"
                :tabindex="tabIndex"
                :href="link.url"
                :is-popover-link="!isBelowMid"
                :data-trak="{
                    trakEvent: 'click',
                    category: 'engagement',
                    action: 'header',
                    label: `${link.gtm}`
                }"
                :text="link.text"
                :has-border-top="true"
                :has-border-bottom="false"
                @blur="$emit('deactivateNav')"
                @focus="$emit('activateNav')" />
        </li>

        <li
            v-if="!isBelowMid"
            :class="$style['c-user-list-item']">
            <a
                :tabindex="isUserMenuOpen ? 0 : -1"
                :href="returnLogoutUrl"
                :data-trak='`{
                    "trakEvent": "click",
                    "category": "engagement",
                    "action": "header",
                    "label": "${copy.accountLogout.gtm}"
                }`'
                data-test-id="logout-link"
                :class="$style['c-user-list-link']"
                @blur="$emit('deactivateNav')"
                @focus="$emit('activateNav')">
                {{ copy.accountLogout.text }}
            </a>
        </li>
    </ul>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
    components: {
        NavLink
    },
    props: {
        isUserMenuOpen: {
            type: Boolean,
            default: false
        },
        isNavOpen: {
            type: Boolean,
            default: false
        },
        isBelowMid: {
            type: Boolean,
            default: false
        },
        copy: {
            type: Object,
            default: () => ({})
        },
        returnLogoutUrl: {
            type: String,
            default: ''
        },
        isCountrySelectorOpen: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        tabIndex () {
            if (this.isBelowMid && this.isNavOpen && !this.isCountrySelectorOpen) {
                return 0;
            }
            if (!this.isUserMenuOpen) {
                return -1;
            }
            return 0;
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

.c-user-list {
    @include f.media('>mid') {
        margin: f.spacing(b) 0;
    }
}

.c-user-list-item {
    padding: f.spacing(c) f.spacing(d) f.spacing(c) 0;

    &:focus {
            outline-color: common.$nav-link-focus-color;
            border-radius: 0;
    }

    &:hover {
        background: f.$color-container-subtle;
    }

    &:active {
        background: f.$color-container-strong;
    }
}

.c-user-list-link {
    text-decoration: none;
    color: common.$nav-text-color;
    @include f.font-size(common.$nav-text-size);

    @include f.media('>mid') {
        padding-left: f.spacing(d);
    }
}
</style>
