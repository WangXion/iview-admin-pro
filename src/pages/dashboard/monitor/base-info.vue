<template>
    <Row :gutter="24" type="flex" justify="center" align="middle" class="ivu-text-center">
        <Col v-bind="grid" class="ivu-mb">
            <Card :bordered="false" dis-hover>
                <Avatar icon="ios-people" v-color="'#40a9ff'" v-bg-color="'#e6f7ff'" />
                <div class="dashboard-monitor-base-info-number">
                    <Numeral :value="21200" format="'0. a'" />
                </div>
                <div class="dashboard-monitor-base-info-desc">
                    总访问人数
                </div>
                <div class="dashboard-monitor-base-info-extra">
                    <AvatarList size="small" :list="avatarList" />
                </div>
            </Card>
        </Col>
        <Col v-bind="grid" class="ivu-mb">
            <Card :bordered="false" dis-hover>
                <Avatar icon="md-locate" v-color="'#9254de'" v-bg-color="'#f9f0ff'" />
                <div class="dashboard-monitor-base-info-number">
                    <Numeral :value="1600" format="'0. a'" />
                </div>
                <div class="dashboard-monitor-base-info-desc">
                    点击量（近30天）
                </div>
                <div class="dashboard-monitor-base-info-extra dashboard-monitor-base-info-extra-up">
                    <Icon type="ios-arrow-up" />
                    <span>110.5%</span>
                </div>
                <Tooltip placement="top" content="指标说明" class="dashboard-monitor-base-info-tip">
                    <Icon type="ios-help-circle-outline" />
                </Tooltip>
            </Card>
        </Col>
        <Col v-bind="grid" class="ivu-mb">
            <Card :bordered="false" dis-hover>
                <Avatar icon="md-paper-plane" v-color="'#ffa940'" v-bg-color="'#fff7e6'" />
                <div class="dashboard-monitor-base-info-number">
                    <Numeral :value="826" format="'0. a'" />
                </div>
                <div class="dashboard-monitor-base-info-desc">
                    到达量（近30天）
                </div>
                <div class="dashboard-monitor-base-info-extra dashboard-monitor-base-info-extra-down">
                    <Icon type="ios-arrow-down" />
                    <span>15.5%</span>
                </div>
                <Tooltip placement="top" content="指标说明" class="dashboard-monitor-base-info-tip">
                    <Icon type="ios-help-circle-outline" />
                </Tooltip>
            </Card>
        </Col>
        <Col v-bind="grid" class="ivu-mb">
            <Card :bordered="false" dis-hover>
                <Avatar icon="md-funnel" v-color="'#73d13d'" v-bg-color="'#f6ffed'" />
                <div class="dashboard-monitor-base-info-number">
                    <Numeral :value="0.288" format="'0. %'" />
                </div>
                <div class="dashboard-monitor-base-info-desc">
                    转化率（近30天）
                </div>
                <div class="dashboard-monitor-base-info-extra dashboard-monitor-base-info-extra-up">
                    <Icon type="ios-arrow-up" />
                    <span>65.8%</span>
                </div>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                grid: {
                    xl: 6,
                    lg: 12,
                    md: 12,
                    sm: 12,
                    xs: 12
                },
                avatarList: [
                    {
                        src: 'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
                        tip: '史蒂夫·乔布斯'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
                        tip: '斯蒂夫·沃兹尼亚克'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
                        tip: '乔纳森·伊夫'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar',
                        tip: '蒂姆·库克'
                    },
                    {
                        src: 'https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar',
                        tip: '比尔·费尔南德斯'
                    }
                ]
            }
        }
    }
</script>
<style lang="less">
    .dashboard-monitor-base-info-number{
        font-size: 28px;
        font-weight: bold;
        margin: 8px 0 4px;
    }
    .dashboard-monitor-base-info-desc{
        color: #808695;
        font-size: 12px;
    }
    .dashboard-monitor-base-info-extra{
        height: 25px;
        margin-top: 10px;
        font-weight: bold;
        font-size: 14px;
        i{
            transform: scale(1.2);
            margin-right: 4px;
        }
        &-up{
            color: #19be6b;
        }
        &-down{
            color: #ed4014;
        }
    }
    .dashboard-monitor-base-info-tip{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #808695;
    }
</style>
