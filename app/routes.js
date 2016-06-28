/**
 * Created by ijoy on 16-6-28.
 */
export default{

    Main: {
        initialRoute: true,
        title: 'Main',
        component: require('./scenes/Main').default
    },
    Ac: {
        title: 'Ac',
        component: require('./scenes/Ac').default,
        children: {
            ShowAc: {
                title:'ShowAc',
                component: require('./scenes/Ac/showAc').default
            }
        }
    }
}