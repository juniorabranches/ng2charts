import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  barChartOptions: any = [{
    scales: {
       yAxes: [
        {
            display: true,
            ticks: {
              fontSize: 10,
              colors: '#fff'
            }
        }
      ]
    }
  }];
  barChartLabels = [];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartData:any;
  barChartColors:Array<any> = [
    {
      backgroundColor: '#3F51B5',
      borderColor: '#3F51B5',
      pointBackgroundColor: '#3F51B5',
      pointBorderColor: '#3F51B5',
      pointHoverBackgroundColor: '#3F51B5',
      pointHoverBorderColor: '#3F51B5',
      labels: '#3F51B5'
    }]

  doughnutChartLabels:string[];
  doughnutChartData:number[];
  doughnutChartType:string = 'doughnut';
  
  constructor(public navCtrl: NavController) {

  }

  calc(tipo){
    if (tipo === 'bar') {
        this.calcbar();
    } else {
        this.calcDoughnut();
    }
  }
  
  calcbar(){
    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];      
    this.barChartData = [
  	  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    	  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
  }
  
  calcDoughnut(){
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartData = [350, 450, 100];
  };

}
