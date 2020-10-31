import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('admin/layout', [
            'isMobile'
        ]),
        labelWidth () {
            return this.isMobile ? undefined : 140;
        },
        labelPosition () {
            return this.isMobile ? 'top' : 'right';
        }
    }
}
