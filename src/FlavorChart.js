import {Radar} from 'react-chartjs-2'

function FlavorChart(props){
    const {nose,palate,finish}=props;
    const dataFromReview={
        labels:["Cereal","Floral","Fruit","Spice","Wood"],
        datasets:[
            {
                label:"Nose",
                data:[nose.cereal,nose.floral,nose.fruit,nose.spice,nose.wood],
                backgroundColor:'rgba(247,226,159,.4)',
                borderColor: 'rgb(247,226,159)',
                fill:true
            },
            {
                label:"Palate",
                data:[palate.cereal,palate.floral,palate.fruit,palate.spice,palate.wood],
                backgroundColor:'rgba(216,105,78,.4)',
                borderColor:'rgb(216,105,78)',
                fill:true
            },
            {
                label:"Finish",
                data:[finish.cereal,finish.floral,finish.fruit,finish.spice,finish.wood],
                backgroundColor:'rgba(42,196,106,.4)',
                borderColor:'rgb(42,196,106)',
                fill:true
            },
        ]
    }

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 5
            }
        }
    };
    return(
        <div className="radarChart">
        <Radar
            data={dataFromReview}
            options={options}
        />
        </div>
    )
}

export default FlavorChart;