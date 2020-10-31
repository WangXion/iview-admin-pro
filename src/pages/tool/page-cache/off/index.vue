<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="关闭页面缓存" content="当前页已关闭缓存，切换页面时不会缓存组件" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <h4 class="ivu-mb">输入一些内容后，切换到其它页面，再返回到该页面，输入的内容没有了，说明该页面没有被缓存</h4>
            <Input v-model="value" size="large" placeholder="输入内容..." />
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'tool-page-cache-off',
        data () {
            return {
                value: ''
            }
        }
    }
</script>
