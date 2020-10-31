<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="Quill 编辑器" content="对 Quill 进行过封装，可以使用 v-model 绑定数据。" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <i-quill v-model="value" :min-height="400" />
            <Divider />
            <Button @click="handleAddText">增加文本</Button>
            <Button @click="handleAddImg" class="ivu-ml">增加图片</Button>
        </Card>

        <Card title="HTML 内容" :bordered="false" dis-hover class="ivu-mt">
            {{ value }}
        </Card>
    </div>
</template>
<script>
    import iQuill from '@/components/quill';

    export default {
        name: 'editor-quill',
        components: { iQuill },
        data () {
            return {
                value: `<h1>iView Admin Pro</h1>`
            }
        },
        methods: {
            handleAddText () {
                this.value += '<p><span style="color: #19be6b;">新增加的内容。</span></p>';
            },
            handleAddImg () {
                this.value += '<p><img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"></p>';
            }
        }
    }
</script>
