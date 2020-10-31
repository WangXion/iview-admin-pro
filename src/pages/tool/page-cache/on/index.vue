<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="开启页面缓存" content="当前页已开启缓存，切换页面时会缓存所有组件" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <h4 class="ivu-mb">输入一些内容后，切换到其它页面，再返回到该页面，输入的内容仍然保留，说明该页面被缓存了</h4>
            <Input v-model="value" size="large" placeholder="输入内容..." />
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'tool-page-cache-on',
        data () {
            return {
                value: ''
            }
        }
    }
</script>
