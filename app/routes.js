/**
 * Created by ijoy on 16-6-28.
 */
export default{

    Main: {
        initialRoute: true,
        title: 'Main',
        component: require('./scenes/Main').default,
        actionsArray:[{icon: 'warning',badge: { value: 4, animate: true },onPressRoute:'UserCenter'}]
    },
    Login: {
        title: '登录',
        component: require('./scenes/Login').default
    },
    Register:{
        title:'注册',
        component:require('./scenes/Register').default

    },
    Ac: {
        title: 'Ac',
        component: require('./scenes/Ac').default,
        actionsArray:[{icon: 'add',onPressRoute:'Ac.EditAc'}],
        children: {
            ShowAc: {
                title:'ShowAc',
                component: require('./scenes/Ac/showAc').default
            },
            EditAc: {
                title:'EditAc',
                component:require('./scenes/Ac/editAc').default
            }
        }

    },
    Ap: {
        title: 'Ap',
        component: require('./scenes/Ap').default,
        actionsArray:[{icon: 'add',onPressRoute:'Ap.EditAp'}],
        children: {
            ShowAp: {
                title:'ShowAp',
                component: require('./scenes/Ap/showAp').default
            },
            EditAp: {
                title:'EditAp',
                component: require('./scenes/Ap/editAp').default
            }
        }
    },
    QuickConfig: {
        title: '快速配置（连接AC）',
        component: require('./scenes/quickConfig').default,
        children: {
            stepOne:{
                title:'快速配置(第一步)',
                component:require('./scenes/quickConfig/stepOne').default,
                children:{
                    stepTwo: {
                        title:'快速配置(第二步)',
                        component: require('./scenes/quickConfig/stepTwo').default,
                        children: {
                            stepTwo: {
                                title:'快速配置(第三步)',
                                component: require('./scenes/quickConfig/stepThree').default

                            }
                        }
                    }
                }
            }

        }
    },
    DetailConfig: {
        title: '详细配置（连接AC）',
        component: require('./scenes/detailConfig').default,
        children:{
            ScrollConfig:{
                title:'详细配置',
                component:require('./scenes/detailConfig/ScrollConfig').default
            }

        }
    },
    Security:{
        title:'安全检测',
        component:require('./scenes/security').default
    },
    UserCenter:{
        title:'个人中心',
        component:require('./scenes/userCenter').default
    },
    Setting:{
        title:'系统设置',
        component:require('./scenes/Setting').default
    }
}