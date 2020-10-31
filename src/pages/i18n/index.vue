<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="多语言" content="" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <h4 class="ivu-mb">当前语言：{{ locale }}</h4>
            <div>点击右上角的多语言切换按钮，尝试切换不同的语言，下面的内容会自动变化：</div>
            <div class="ivu-mt">1. {{ $t('page.i18n.content') }}</div>
            <div class="ivu-mt">2. iView 组件内部也会自动切换多语言：</div>
            <Select v-model="value" v-width="200" class="ivu-mt"></Select>
            <div class="ivu-mt">3. 菜单及系统内部</div>
            <Alert>当前在线预览只对 多语言 菜单做了配置，其它尚未配置。</Alert>
        </Card>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'i18n',
        computed: {
            ...mapState('admin/i18n', [
                'locale'
            ])
        },
        data () {
            return {
                value: ''
            }
        }
    }
</script>
