<template>
    <nav
        aria-label="navigation"
        data-test-id="navigation-links-component">
        <ul
            v-if="filterLinks.length"
            :class="$style['c-navigationLinks']">
            <li
                v-for="({
                    id, href, to, name
                }, i) in filterLinks"
                :key="i"
                :class="$style['c-navigationLinks-item']">
                <v-link
                    :data-test-id="id"
                    :has-text-decoration="false"
                    link-class="c-navigationLinks-link"
                    v-bind="{
                        ...(href ? { href } : to ? { to } : {})
                    }">
                    {{ name }}
                </v-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import VLink from '@justeat/f-link';

export default {
    name: 'NavigationLinks',

    components: {
        VLink
    },

    props: {
        links: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        filterLinks () {
            return this.links.filter(x => x.href || x.to);
        }
    }
};
</script>

<style lang="scss" module>
.c-navigationLinks {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.c-navigationLinks-item {
    display: block;
}
</style>

<style lang="scss">
@use '@justeat/fozzie/src/scss/fozzie' as f;

/**
* .c-navigationLinks-link is intentionally not scoped as the consuming router application (Nuxt.js / Vue Router) will add active classes directly to
* the router-link within <f-link>. CoreWeb Nuxt custom active link classes are: `is-link-active` and `is-link-exactActive`.
*/
.c-navigationLinks-link {
    display: inline-block;
    padding: f.spacing() 0 f.spacing() f.spacing(d);
    border-left: 2px solid f.$color-border-default;
    color: f.$color-content-link;

    &:focus,
    &:hover,
    &.is-link-exactActive {
        border-left: 2px solid f.$color-interactive-brand;
        text-decoration: none;
    }
    &.is-link-exactActive {
        font-weight: f.$font-weight-bold;
    }
}
</style>
