import { defineStore } from "pinia";

export const useTabList = defineStore('tablist', {
    state: () => ({
        selectTab: 'home',
        tabList: [
            {
            name: 'home',
            icon: 'cuIcon-mobile',
            text: '首页',
                pagePath: '/pages/tabBar/home/index'
            },
            {
            name: 'person',
            icon: 'cuIcon-mobile',
            text: '人员管理',
                pagePath: '/pages/tabBar/person/index'
            },
            {
            name: 'message',
            icon: 'cuIcon-mobile',
            text: '通知',
                pagePath: '/pages/tabBar/message/index'
            },
            {
            name: 'mine',
            icon: 'cuIcon-mobile',
            text: '个人信息',
                pagePath: '/pages/tabBar/mine/index'
            }
        ]
    }),
    actions: {
        switchTab(name) {
            this.selectTab = name
        }
    }
})