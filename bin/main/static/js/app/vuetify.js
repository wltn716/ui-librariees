var action = {
		
    init : function () {
        var app1 = new Vuetify();
        var app2 = new Vuetify();
        new Vue({
            el: '#app',
            vuetify: app1,
            data: () => ({
                type1: `trend`,
                type2: `bar`,
                labels1: [
                    '12am',
                    '3am',
                    '6am',
                    '9am',
                    '12pm',
                    '3pm',
                    '6pm',
                    '9pm',
                ],
                value1: [
                    200,
                    675,
                    410,
                    390,
                    310,
                    460,
                    250,
                    240,
                ],

                labels2: [
                    '12am',
                    '3am',
                    '6am',
                    '9am',
                    '12pm',
                    '3pm',
                    '6pm',
                    '9pm',
                ],
                value2: [
                    200,
                    675,
                    410,
                    390,
                    310,
                    460,
                    250,
                    240,
                ],
            }),
        })
    },
};

action.init();