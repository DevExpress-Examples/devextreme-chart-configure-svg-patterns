$(() => {
    $("#chart").dxChart({
        dataSource: dataSource,
        series: {
            argumentField: "day",
            valueField: "count",
            type: "bar",
            hoverMode: 'none',
        },
        legend: {
            visible: false,
        },
        commonPaneSettings:{
            backgroundColor:'url(#Background)',
        },
        customizePoint: (info) => {
            const style = {};

            switch(info.argument) {
                case 'Monday':
                    style.color = 'url(#Gradient1)'
                    break;
                case 'Tuesday':
                    style.color = 'url(#Gradient2)'
                    break;
                case 'Wednesday':
                    style.color = 'url(#Gradient3)'
                    break;
                case 'Thursday':
                    style.color = 'url(#Pattern1)'
                    break;
                case 'Friday':
                    style.color = 'url(#PointImage)'
                    break;
                case 'Saturday':
                    style.color = 'url(#TriangleSvg)'
                    break;
            }
            return style;
        },
    });
});

