<template>
    <div>
        <vWrapper>
            <vTitle> Hello World, this is my first styled component! </vTitle>
            <vButton primary>Primary</vButton>
            <vButton>normal</vButton>
        </vWrapper>
    </div>
</template>
<script>
    import { vButton, vTitle, vWrapper } from './styleComps'
    export default{
        data () {
            return {
            }
        },
        components: {
            vButton,
            vTitle,
            vWrapper
        },
        methods: {}
    }
</script>
