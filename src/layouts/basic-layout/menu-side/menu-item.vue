<template>
    <div>
        <MenuItem :to="menu.path" :replace="menu.replace" :target="menu.target" :name="menu.path" @click.native="handleClick(menu.path)">
            <i-menu-side-title :menu="menu" :hide-title="hideTitle" />
        </MenuItem>
    </div>
</template>
<script>
    import iMenuSideTitle from './menu-title';
    import clickItem from '../mixins/click-item';

    export default {
        name: 'iMenuSideItem',
        components: { iMenuSideTitle },
        mixins: [ clickItem ],
        props: {
            menu: {
                type: Object,
                default () {
                    return {}
                }
            },
            hideTitle: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
