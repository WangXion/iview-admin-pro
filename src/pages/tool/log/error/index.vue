<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="捕获错误信息" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Alert show-icon>
                用法说明
                <p v-font="14" slot="desc">打开浏览器控制台，点击按钮，会触发一个错误，系统会自动记录。可在右上角点击"日志"按钮查看。</p>
            </Alert>
            <Button type="error" size="large" @click="handleNewError">触发一个错误</Button>
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'tool-log-error',
        methods: {
            handleNewError () {
                // 下面的 data 未定义，会在控制台报错，这里模拟触发一个错误
                console.log(data); // eslint-disable-line
            }
        }
    }
</script>
