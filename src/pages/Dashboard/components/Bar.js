import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { crudActions } from '../../../actions'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const newDate = new Date()

const options = {    
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Movimientos de Documentos'
    },
    subtitle: {
        text: 'Año : '+ newDate.getFullYear()
    },
    xAxis: {
        categories: ['Libros', 'Tesis', 'Revistas','Documentos'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Documentos (unidades)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' unidades'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Prestamos',
        data: [107, 331, 635]
    }, {
        name: 'Devoluciones',
        data: [133, 156, 947]
    }, {
        name: 'Pendientes',
        data: [814, 841, 714]
    }]
};
 
class Bar extends Component {
	constructor(props) {
    super(props);
     this.state = {      
      
    };    
  }

   UNSAFE_componentWillMount(){
    /*this.props.getArticulosReporte()*/
  }


	render() {
	
		
		return (
		<div>			
      <HighchartsReact highcharts={Highcharts} options={options} />
		</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...crudActions
    },
    dispatch,
  )  
})

const mapStateToProps = state => ({
  clientes: state.clientes

});

export default connect(mapStateToProps,mapDispatchToProps)(Bar);
