<template>
    <div
        :class="$style['c-legalField-certificates']">
        <p
            v-if="info.textField">
            {{ info.textField }}
        </p>

        <confianza-icon
            v-if="isConfianza"
            :class="[
                $style['c-legalField-certificates-icons'],
                $style['c-legalField-certificates-icons--confianza']
            ]" />
    </div>
</template>

<script>
import { CertificateConfianzaIcon as ConfianzaIcon } from '@justeat/f-vue-icons';

export default {

    components: {
        ConfianzaIcon
    },
    props: {
        info: {
            type: Object,
            required: true
        }
    },

    computed: {
        isConfianza () {
            return this.info.icon.name === 'confianza';
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

.c-legalField-certificates {
    display: flex;
    align-items: center;

    @include f.media('<wide') {
        order: 2;
        padding: f.spacing(d);
    }

    p {
        margin: 0;
        @include f.font-size(body-s);
    }
}

.c-legalField-certificates-icons {
    display: block;
}

.c-legalField-certificates-icons--confianza {
    width: 50px;
    height: 50px;
}
</style>

