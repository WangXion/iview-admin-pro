<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="捕获 Ajax 错误" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Alert show-icon>
                用法说明
                <p v-font="14" slot="desc">打开浏览器控制台，点击按钮，会请求一个无效的 URL，系统会自动记录。可在右上角点击"日志"按钮查看。</p>
            </Alert>
            <Button type="error" size="large" @click="handleGet">请求错误的地址</Button>
        </Card>
    </div>
</template>
<script>
    import { getInvalidUrl } from '@api/demo';
    export default {
        name: 'tool-log-ajax',
        methods: {
            handleGet () {
                getInvalidUrl();
            }
        }
    }
</script>
