<template>
    <div class="dashboard-monitor-visit-hot">
        <Row type="flex" justify="center" align="middle">
            <Col span="15">
                <Circle :percent="active" :size="120" stroke-color="#2fc25b" trail-color="#f6ffed">
                    <Circle :percent="keep" :size="95" stroke-color="#1890ff" trail-color="#e6f7ff">
                        <Circle :percent="out" :size="70" stroke-color="#f04864" trail-color="#fff1f0">

                        </Circle>
                    </Circle>
                </Circle>
            </Col>
            <Col span="9">
                <ul>
                    <li>
                        <em v-bg-color="'#2fc25b'"></em>
                        <span>活跃率：{{ active }}%</span>
                    </li>
                    <li>
                        <em v-bg-color="'#1890ff'"></em>
                        <span>留存率：{{ keep }}%</span>
                    </li>
                    <li>
                        <em v-bg-color="'#f04864'"></em>
                        <span>跳出率：{{ out }}%</span>
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                active: 70, // 活跃率
                keep: 60, // 留存率
                out: 35 // 跳出率
            }
        }
    }
</script>
<style lang="less">
    .dashboard-monitor-visit-hot{
        position: relative;
        top: 10px;
        text-align: center;
        ul{
            li{
                list-style-type: none;
                font-size: 12px;
                em{
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-right: 8px;
                }
                span{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
