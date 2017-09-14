<template>
    <button class="btn" @click="childClick" :type="nativeType" :class="[
                        type?'btn-'+type:'',
                        size?'btn-'+size:''
                    ]">
        <i :class="icon?'btn-icon-'+icon:''" v-if="icon" @click="childClick"></i>
        <span @click="childClick"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'YBtton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        }
    },
    methods: {
        childClick(evt) {
            this.$emit('click', evt)
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    border-color: #c4c4c4;
    color: #1f2d3d;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
}




/* 主要按钮 */

.btn-primary {
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
}



/* 文字按钮 */

.btn-text {
    border: none;
    color: #20a0ff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
}


/* 小按钮 */

.btn-small {
    padding: 7px 9px;
    font-size: 12px;
    border-radius: 4px;
}


/* 大按钮 */

.btn-large {
    padding: 11px 19px;
    font-size: 16px;
    border-radius: 4px;
}
</style>


