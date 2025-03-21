import { Component, Input, ViewChild } from '@angular/core';
import {
  Citations,
  ResearcherModel,
  graphDetails,
} from 'src/app/Models/ResearcherModel';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis?: ApexXAxis;
  fill: ApexFill;
  title?: ApexTitleSubtitle;
};
//services
import { ResearcherService } from 'src/app/Services/researcher.service';

@Component({
  selector: 'app-people-pop-up',
  templateUrl: './people-pop-up.component.html',
  styleUrls: ['./people-pop-up.component.scss'],
})
export class PeoplePopUpComponent {
  researcherModel = new ResearcherModel();
  graphDetails: graphDetails[] = []; // Initialize as an array
  researcherId: any;
  maxCitations = 0;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() researcher: any;

  @ViewChild('chart')
  chart!: ChartComponent;

  image: any;
  constructor(private _ResearcherService: ResearcherService) {}

  ngOnInit(): void {
    this.researcherId = this.researcher.researcherID;
    this.GetResearcherDetailsByID(this.researcherId);
  }

  private GetResearcherDetailsByID(researcherId: number) {
    this._ResearcherService.getResearcherDetailsByID(researcherId, 2).subscribe(
      (Response) => {
        this.researcherModel = Response[0];
        console.log(this.researcherModel);
        this.image = Response[0].imageURL;
        console.log(this.image);

        this.graphDetails = JSON.parse(Response[0].graphDetails).map(
          (item: any) => ({
            year: item.year,
            citations: item.citations,
          })
        );
        this.updateChart();
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  private updateChart() {
    const years: number[] = [];
    const citations: number[] = [];

    this.graphDetails.forEach((item: graphDetails) => {
      years.push(item.year || 0); // Push year to years array
      citations.push(item.citations || 0); // Push citations to citations array
    });

    console.log(years, citations);
    this.chartOptions = {
      series: [
        {
          name: 'Citations',
          data: citations,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Cited By',
      },
      xaxis: {
        categories: years,
      },
    };
  }
}
