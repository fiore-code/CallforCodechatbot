import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef, Input, NgModuleRef, HostListener } from '@angular/core';
import { environment } from '../environments/environment';
import { ChatbotService } from '../app/chatbot.service';
import { async, ɵangular_packages_core_testing_testing_a } from '@angular/core/testing';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { NONE_TYPE } from '@angular/compiler';
import * as mapboxgl from 'mapbox-gl';
import { partition } from 'rxjs';
import Chart from 'chart.js';
import { isFunction } from 'util';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userPdfUrl: any;
  districtData: any;
  districtDataTable: any;
  districtDataTableModal: any;
  userPdfFilePath: any;
  emailid: any;
  isPostCovidEnabled: any = false;
  userObject: object;
  uploadBtnEnabled = true;
  currentEndMessageUrl: any;
  endMessageUrls: String[] = ["http://15.206.170.198/fileuploadtry/uploads/botimages/1.jpg", "http://15.206.170.198/fileuploadtry/uploads/botimages/2.png", "http://15.206.170.198/fileuploadtry/uploads/botimages/3.jpg", "http://15.206.170.198/fileuploadtry/uploads/botimages/4.png", "http://15.206.170.198/fileuploadtry/uploads/botimages/5.png", "http://15.206.170.198/fileuploadtry/uploads/botimages/7.png", "http://15.206.170.198/fileuploadtry/uploads/botimages/9.jpg"];
  endMessage: String[] = ["Safe as of now", "Home Quarantine is what you should do", "Lock yourself in a room and self isolate from everyone", "Self Quarantine yourself", "Kindly monitor the symptoms", "Call a doctor", "Emergency"];
  btnEnabled: boolean = true;
  WeeklyData2: any;
  imageResponse: any;
  map: mapboxgl.Map;
  toneAnalyzerArray: Object[] = [];
  style = 'mapbox://styles/mapbox/dark-v10';
  lat = 0;
  lng = 20;
  selectedFile: any;
  public canvas: any;
  public ctx;
  public datasets: any;
  messages: Object[] = [];
  checkBoxQuestionArray: Object[] = [];
  WeeklyData: any;
  list4: string[] = [];
  list5: string[] = [];
  list8: string[] = [];
  list9: string[] = [];
  list10: string[] = [];
  ImageUrl: any;
  countries: String[] = ["Worldwide", "US", "Brazil", "Russia", "India", "Peru", "United Kingdom", "Chile", "Spain", "Italy", "Mexico", "Iran", "Pakistan", "France", "Turkey", "Saudi Arabia", "Germany", "South Africa",
    "Bangladesh",
    "Canada",
    "Colombia",
    "Qatar",
    "China",
    "Sweden",
    "Egypt",
    "Argentina",
    "Belarus",
    "Belgium",
    "Indonesia",
    "Ecuador",
    "Iraq",
    "Netherlands",
    "United Arab Emirates",
    "Kuwait",
    "Ukraine",
    "Singapore",
    "Kazakhstan",
    "Oman",
    "Portugal",
    "Philippines",
    "Bolivia",
    "Poland",
    "Panama",
    "Dominican Republic",
    "Afghanistan",
    "Switzerland",
    "Romania",
    "Bahrain",
    "Israel",
    "Armenia",
    "Nigeria",
    "Ireland",
    "Honduras",
    "Guatemala",
    "Japan",
    "Azerbaijan",
    "Ghana",
    "Austria",
    "Moldova",
    "Nepal",
    "Serbia",
    "Algeria",
    "Morocco",
    "Denmark",
    "Korea, South",
    "Cameroon",
    "Czechia",
    "Cote d'Ivoire",
    "Sudan",
    "Uzbekistan",
    "Norway",
    "Malaysia",
    "Australia",
    "Congo (Kinshasa)",
    "El Salvador",
    "Finland",
    "Senegal",
    "Kenya",
    "Kyrgyzstan",
    "North Macedonia",
    "Venezuela",
    "Haiti",
    "Tajikistan",
    "Ethiopia",
    "Gabon",
    "Guinea",
    "Bulgaria",
    "Bosnia and Herzegovina",
    "Djibouti",
    "Mauritania",
    "Luxembourg",
    "Hungary",
    "Costa Rica",
    "Central African Republic",
    "Greece",
    "Thailand",
    "West Bank and Gaza",
    "Equatorial Guinea",
    "Kosovo",
    "Croatia",
    "Somalia",
    "Albania",
    "Nicaragua",
    "Madagascar",
    "Maldives",
    "Cuba",
    "Paraguay",
    "Mali",
    "Sri Lanka",
    "South Sudan",
    "Estonia",
    "Iceland",
    "Lithuania",
    "Lebanon",
    "Slovakia",
    "Guinea-Bissau",
    "Slovenia",
    "Zambia",
    "New Zealand",
    "Sierra Leone",
    "Malawi",
    "Congo (Brazzaville)",
    "Cabo Verde",
    "Yemen",
    "Benin",
    "Tunisia",
    "Jordan",
    "Latvia",
    "Niger",
    "Rwanda",
    "Cyprus",
    "Burkina Faso",
    "Uruguay",
    "Georgia",
    "Mozambique",
    "Uganda",
    "Libya",
    "Eswatini",
    "Chad",
    "Andorra",
    "Liberia",
    "Sao Tome and Principe",
    "Jamaica",
    "Diamond Princess",
    "San Marino",
    "Malta",
    "Togo",
    "Zimbabwe",
    "Montenegro",
    "Suriname",
    "Tanzania",
    "Taiwan*",
    "Vietnam",
    "Mauritius",
    "Namibiam",
    "Angola",
    "Syria",
    "Burma",
    "Comoros",
    "Guyana",
    "Botswana",
    "Mongolia",
    "Eritrea",
    "Burundi",
    "Brunei",
    "Cambodia",
    "Trinidad and Tobago",
    "Monaco",
    "Bahamas",
    "Barbados",
    "Liechtenstein",
    "Seychelles",
    "Bhutan",
    "Antigua and Barbuda",
    "Gambia",
    "Lesotho",
    "Saint Vincent and the Grenadines",
    "Belize",
    "Timor-Leste",
    "Grenada",
    "Saint Lucia",
    "Laos",
    "Dominica",
    "Fiji",
    "Saint Kitts and Nevis",
    "Holy See",
    "Papua New Guinea",
    "Western Sahara",
    "MS Zaandam"
  ];

  messages1: any;
  sessionData: any;
  messageData: any;
  sessionid: any;
  message: any;
  countryStatics: Object;
  countryStorage: any;
  keyValuePairInitSelection: any;
  labelListInitSelection: string[] = [];
  replyData: any;
  replyData1: any;
  checkListSelection: String[] = [];
  DailyCount: any;
  list11: string[] = [];
  list12: string[] = [];
  list13: string[] = [];
  list14: string[] = [];
  AgeCategoryData: any;
  AgeCategoryInt: any;
  d: Date = new Date();
  StateDataTable: any;
  StateDataTableObject: any;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(private chatBotService: ChatbotService, private modalService: NgbModal) { }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  ngOnInit() {



    this.chatBotService.getStateWiseData().subscribe((data) => {
      this.StateDataTable = data;
      this.StateDataTableObject = Object.values(this.StateDataTable);
    });

    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    var map = new mapboxgl.Map({
      container: 'map',
      zoom: 1.3,
      style: this.style,
      center: [this.lng, this.lat],
    });
    this.chatBotService.getCoordinatesData().subscribe(data => {
      let dataco = data;
    });


    map.on('load', function () {
      //Mag 1
      map.addSource('points1', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag1'
      });
      map.addLayer({
        'id': 'points1',
        'type': 'circle',
        'source': 'points1',
        'paint': {
          "circle-radius": 5,
          'circle-color': 'rgba(242,242,115,.4)'
        }
      });

      // map.addLayer({
      //   'id': 'off-leash-areas1',
      //   'type': 'symbol',
      //   'source': 'points1',
      //   'layout': {
      //     'icon-image': 'dog-park-11',
      //     'text-field': [
      //       'format',
      //       ['upcase', ['get', 'name']],
      //       { 'font-scale': 0.8 },
      //       '\n',
      //       {},
      //       ['downcase', ['get', 'confirmed']],
      //       { 'font-scale': 0.6 }
      //     ],
      //     'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      //     'text-offset': [0, 0.6],
      //     'text-anchor': 'top'
      //   }
      // });
    });


    map.on('load', function () {
      //Mag 1
      map.addSource('points2', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag2'
      });
      map.addLayer({
        'id': 'points2',
        'type': 'circle',
        'source': 'points2',
        'paint': {
          "circle-radius": 8,
          'circle-color': 'rgba(170,235,66,.4)'
        }
      });


    });



    map.on('load', function () {
      //Mag 1
      map.addSource('points3', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag3'
      });
      map.addLayer({
        'id': 'points3',
        'type': 'circle',
        'source': 'points3',
        'paint': {
          "circle-radius": 11,
          'circle-color': 'rgba(26,214,164,.5)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points4', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag4'
      });
      map.addLayer({
        'id': 'points4',
        'type': 'circle',
        'source': 'points4',
        'paint': {
          "circle-radius": 14,
          'circle-color': 'rgba(7,108,163,.5)'
        }
      });
    });


    map.on('load', function () {
      //Mag 1
      map.addSource('points5', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag5'
      });
      map.addLayer({
        'id': 'points5',
        'type': 'circle',
        'source': 'points5',
        'paint': {
          "circle-radius": 17,
          'circle-color': 'rgba(230,150,46,.6)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points6', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag6'
      });
      map.addLayer({
        'id': 'points6',
        'type': 'circle',
        'source': 'points6',
        'paint': {
          "circle-radius": 17,
          'circle-color': 'rgba(117,113,240,.6)'
        }
      });
    });


    map.on('load', function () {
      //Mag 1
      map.addSource('points7', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag7'
      });
      map.addLayer({
        'id': 'points7',
        'type': 'circle',
        'source': 'points7',
        'paint': {
          "circle-radius": 17,
          'circle-color': 'rgba(82,247,159,.3)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points8', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag8'
      });
      map.addLayer({
        'id': 'points8',
        'type': 'circle',
        'source': 'points8',
        'paint': {
          "circle-radius": 20,
          'circle-color': 'rgba(219,206,20,.3)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points9', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag9'
      });
      map.addLayer({
        'id': 'points9',
        'type': 'circle',
        'source': 'points9',
        'paint': {
          "circle-radius": 22,
          'circle-color': 'rgba(250,156,5,.3)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points10', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag10'
      });
      map.addLayer({
        'id': 'points10',
        'type': 'circle',
        'source': 'points10',
        'paint': {
          "circle-radius": 25,
          'circle-color': 'rgba(240,65,22,.3)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points11', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag11'
      });
      map.addLayer({
        'id': 'points11',
        'type': 'circle',
        'source': 'points11',
        'paint': {
          "circle-radius": 45,
          'circle-color': 'rgba(250,10,10,.5)'
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points12', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag12'
      });
      map.addLayer({
        'id': 'points12',
        'type': 'circle',
        'source': 'points12',
        'paint': {
          "circle-radius": 7,
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 5
        }
      });
    });


    map.on('load', function () {
      //Mag 1
      map.addSource('points13', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag13'
      });
      map.addLayer({
        'id': 'points13',
        'type': 'circle',
        'source': 'points13',
        'paint': {
          "circle-radius": 7,
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 5
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points14', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag14'
      });
      map.addLayer({
        'id': 'points14',
        'type': 'circle',
        'source': 'points14',
        'paint': {
          "circle-radius": 7,
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 5
        }
      });
    });

    map.on('load', function () {
      //Mag 1
      map.addSource('points15', {
        'type': 'geojson',
        'data': 'https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/mag15'
      });
      map.addLayer({
        'id': 'points15',
        'type': 'circle',
        'source': 'points15',
        'paint': {
          "circle-radius": 3,
          'circle-color': 'rgba(181,150,150,.3)'
        }
      });
    });



    //Chart

    this.chatBotService.getDailyCount().subscribe(data => {
      this.DailyCount = data;
      this.DailyCount.forEach(element => {
        this.list11.push(element[0]);//date
        this.list12.push(element[1]);//confirmed
        this.list13.push(element[2]);//deaths
        this.list14.push(element[3]);//recovered
      });

      //ChartLineDaily

      this.canvas = document.getElementById("chartLineDaily");
      this.ctx = this.canvas.getContext("2d");


      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
      gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors


      var gradientStroke2 = this.ctx.createLinearGradient(255, 0, 51, 50);

      gradientStroke2.addColorStop(1, 'rgba(134, 66, 80,0.15)');
      gradientStroke2.addColorStop(0.4, 'rgba(134, 66, 85,0.0)'); //red colors
      gradientStroke2.addColorStop(0, 'rgba(134, 66, 91,0)');

      var gradientStroke3 = this.ctx.createLinearGradient(255, 0, 251, 50);

      gradientStroke3.addColorStop(1, 'rgba(129, 66, 134,0.15)');
      gradientStroke3.addColorStop(0.4, 'rgba(122, 66, 134,0.0)'); //red colors
      gradientStroke3.addColorStop(0, 'rgba(127, 66, 134,0)');

      var data1 = {
        labels: this.list11,
        datasets: [{
          label: "death",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: '#ad0017',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ad0017',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.list13,
        }, {
          label: "Confirmed",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: '#e502f5',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#e502f5',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.list12,
        },
        {
          label: "Recovered",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.list14,
        }]
      };


      var myChart = new Chart(this.ctx, {
        type: 'line',
        data: data1,
        options: gradientChartOptionsConfigurationWithTooltipGreen

      });


    });

    this.chatBotService.getAgeCategoryCount().subscribe((dataAge) => {
      this.AgeCategoryData = dataAge;
      this.AgeCategoryInt = [parseInt(this.AgeCategoryData.Category1), parseInt(this.AgeCategoryData.Category2), parseInt(this.AgeCategoryData.Category3), parseInt(this.AgeCategoryData.Category4), parseInt(this.AgeCategoryData.Category5)];
      this.canvas = document.getElementById("chartLineRed");
      this.ctx = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
      gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

      var data = {
        labels: ['1-10', '10-25', '25-50', '50-70', 'ABOVE 70'],
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.AgeCategoryInt,
        }]
      };

      var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: data,
        options: gradientBarChartConfiguration
      });
    });

    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 1000,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    this.chatBotService.getWeeklyData().subscribe(data => {
      this.WeeklyData = data;

      this.WeeklyData.forEach(element => {
        this.list4.push(element.Date);
        this.list5.push(element.Confirmed);
      });

      this.canvas = document.getElementById("CountryChart");
      this.ctx = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


      var myChart = new Chart(this.ctx, {
        type: 'bar',
        responsive: true,
        legend: {
          display: false
        },
        data: {
          labels: this.list4,
          datasets: [{
            label: "Confirmed",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#1f8ef1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: this.list5,
          }]
        },
        options: gradientBarChartConfigurationAnother
      });
    });

    var gradientBarChartConfigurationAnother: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 10000,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };



    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    this.chatBotService.getWeeklyData().subscribe(data => {
      this.WeeklyData2 = data;

      this.WeeklyData2.forEach(element => {
        this.list8.push(element.Date);//list8 is a date list
        this.list9.push(element.Recovered);//list9 is a recovered list
        this.list10.push(element.Death);//list 10 is a death list
      });

      this.canvas = document.getElementById("chartLineGreen");
      this.ctx = this.canvas.getContext("2d");


      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
      gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors


      var gradientStroke2 = this.ctx.createLinearGradient(255, 0, 51, 50);

      gradientStroke2.addColorStop(1, 'rgba(134, 66, 80,0.15)');
      gradientStroke2.addColorStop(0.4, 'rgba(134, 66, 85,0.0)'); //red colors
      gradientStroke2.addColorStop(0, 'rgba(134, 66, 91,0)');

      var data1 = {
        labels: this.list8,
        datasets: [{
          label: "death",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: '#ad0017',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ad0017',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.list10,
        },
        {
          label: "Recovered",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.list9,
        }]
      };


      var myChart = new Chart(this.ctx, {
        type: 'line',
        data: data1,
        options: gradientChartOptionsConfigurationWithTooltipGreen

      });

    });


    this.checkBoxQuestionArray.push({ "🤕 Are you disease-free or you are suffering from some? If yes, then choose 😟": "Cardiovascular,Respiratory,Cancer,Diabetes,Blood Pressure,Allergies,None" });
    this.checkBoxQuestionArray.push({ "🤕Symptoms of the Coronavirus(COVID-19) can look similar to the flu and other ailments. Coming to current situations, are you facing from any of these recently?🤕": "Fever,Shortness of breath,Cough,None" });
    this.checkBoxQuestionArray.push({ "A little more info is what I need to assist. 🙂 Does any of these troubles you?": "Fatigue,Muscle Pain,Chills,Headache,Diarrhea,Nausea,Loss of smell/taste,None" });
    this.checkBoxQuestionArray.push({ "How did you came to know that you are a COVID +ve? Did you have any of these?": "Fever,Shortness of breath,Cough,None" });
    this.checkBoxQuestionArray.push({ "If you had any of these symptoms kindly select:": "Fatigue,Muscle Pain,Chills,Headache,Diarrhea,Nausea,Loss of smell/taste,None" });

    this.chatBotService.getWorldWideDetails().subscribe(data => {
      this.countryStorage = data;
      this.countryStatics = { confirmed: this.countryStorage.confirmed.value, recovered: this.countryStorage.recovered.value, deaths: this.countryStorage.deaths.value, recoveryRate: ((this.countryStorage.recovered.value / this.countryStorage.confirmed.value) * 100).toFixed(2), deathRate: ((this.countryStorage.deaths.value / this.countryStorage.confirmed.value) * 100).toFixed(2) };
    });
    this.scrollToBottom();
    this.chatBotService.getSessionId().subscribe(data => {
      this.sessionData = data;
      this.sessionid = this.sessionData.result.session_id;
      this.chatBotService.getMessage(this.sessionid).subscribe(data1 => {
        this.messageData = data1;
        this.message = this.messageData.result.output.generic[0]["text"];
        //let count = 0;
        this.messageData.result.output.generic[1]["options"].forEach(element => {
          this.labelListInitSelection.push(element);
        });
        let hours: any;
        if (this.d.getHours() < 10) {
          hours = "0" + this.d.getHours();
        }
        else {
          hours = this.d.getHours();
        }
        let minutes: any;
        if (this.d.getMinutes() < 10) {
          minutes = "0" + this.d.getMinutes();
        }
        else {
          minutes = this.d.getMinutes();
        }
        let time = hours + ":" + minutes;
        this.messages.push({ botType: true, time, user: "Yoda", message: this.message, labelList: this.labelListInitSelection, checkbox: false, image: false, endMessage: false });
      });
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  selectedCountry(value: string) {
    if (value == "Worldwide") {
      this.chatBotService.getWorldWideDetails().subscribe(data => {
        this.countryStorage = data;
        this.countryStatics = { confirmed: this.countryStorage.confirmed.value, recovered: this.countryStorage.recovered.value, deaths: this.countryStorage.deaths.value, recoveryRate: ((this.countryStorage.recovered.value / this.countryStorage.confirmed.value) * 100).toFixed(2), deathRate: ((this.countryStorage.deaths.value / this.countryStorage.confirmed.value) * 100).toFixed(2) };
      });
    }
    else {
      this.chatBotService.getSpecificCountryDetails(value).subscribe(data => {
        this.countryStorage = data;
        this.countryStatics = { confirmed: this.countryStorage.confirmed.value, recovered: this.countryStorage.recovered.value, deaths: this.countryStorage.deaths.value, recoveryRate: ((this.countryStorage.recovered.value / this.countryStorage.confirmed.value) * 100).toFixed(2), deathRate: ((this.countryStorage.deaths.value / this.countryStorage.confirmed.value) * 100).toFixed(2) };
      })
    }
  }

  selectedOption(event, element) {

    this.labelListInitSelection = [];
    let hours: any;
    if (this.d.getHours() < 10) {
      hours = "0" + this.d.getHours();
    }
    else {
      hours = this.d.getHours();
    }
    let minutes: any;
    if (this.d.getMinutes() < 10) {
      minutes = "0" + this.d.getMinutes();
    }
    else {
      minutes = this.d.getMinutes();
    }
    let time = hours + ":" + minutes;
    let labelListInitSelectionUser: String[] = [];
    if (element.value.input.text == "Please upload your Chest X-Ray. With the little knowledge that I have, I want to assist you in analyzing your report (Upload format: .jpg, .jpeg, .png)") {
      this.uploadBtnEnabled = false;
    }

    else if (element.value.input.text == "Return to Main Menu" || element.value.input.text == "I want to return to Main Menu" || element.value.input.text == "Go back to Main Menu") {
      //Create User Object here and sent to Mongo
      this.createUserObject(this.messages);
      this.refresh();
      return;
      //Call To Terminate Session
    }
    else if (element.value.input.text == "I want to end my conversation") {
      this.createUserObject(this.messages);
      const botInput = document.getElementById("botInput") as HTMLInputElement;
      botInput.disabled = true;
    }
    else if (element.value.input.text == "doctor_connect") {
      window.location.href = 'https://doctorpatientportal.eu-gb.cf.appdomain.cloud';
    }
    else if (element.value.input.text == "Upload Another Image") {
      this.uploadBtnEnabled = false;
      this.messages.push({ botType: false, time, user: "User", message: element.value.input.text, labelList: [], image: false, endMessage: false });
      this.messages.push(this.messages[this.messages.length - 4]);
      return;
    }
    // else if(element.value.input.text="")
    this.messages.push({ botType: false, time, user: "User", message: element.value.input.text, labelList: labelListInitSelectionUser, image: false, endMessage: false });
    this.chatBotService.getMessageReply(this.sessionid, element.value.input.text).subscribe((data) => {
      this.messages1 = data;
      this.replyData = this.messages1.result.output.generic[0]["text"];
      this.replyData1 = this.messages1.result.output.generic[1];


      if (this.replyData1 == undefined) {
        this.labelListInitSelection = [];
      }
      else if (this.replyData1 != undefined) {
        this.messages1.result.output.generic[1]["options"].forEach(element => {
          this.labelListInitSelection.push(element);
        });
      }
      if (this.d.getHours() < 10) {
        hours = "0" + this.d.getHours();
      }
      else {
        hours = this.d.getHours();
      }

      if (this.d.getMinutes() < 10) {
        minutes = "0" + this.d.getMinutes();
      }
      else {
        minutes = this.d.getMinutes();
      }
      time = hours + ":" + minutes;
      let keyExists = false;
      let keyObject;
      for (let i = 0; i < this.checkBoxQuestionArray.length; i++) {
        if (this.replyData in this.checkBoxQuestionArray[i]) {
          keyExists = true;
          keyObject = this.checkBoxQuestionArray[i];
          break;
        }
      }
      if (keyExists) {
        let checkboxString = keyObject[this.replyData];
        var arrayCheckBox = checkboxString.split(",");
        let labelListCheckBox: Object[] = [];
        for (let j = 0; j < arrayCheckBox.length; j++) {
          labelListCheckBox.push({ label: arrayCheckBox[j], value: { input: { text: arrayCheckBox[j] } } });
        }
        this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: labelListCheckBox, checkbox: true, image: false, endMessage: false });
        this.replyData = null;
      }
      else {
        const yesEndMessage = this.checkEndMessage(this.replyData);
        if (yesEndMessage) {
          this.createUserObject(this.messages);
          this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: [], checkbox: false, image: false, endMessage: true });
        }
        else {
          this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: this.labelListInitSelection, checkbox: false, image: false, endMessage: false });
          this.replyData = null;
        }
      }
    });
    this.scrollToBottom();
  }


  async textInput(event: any) {
    let text = event.target.value;
    let postCovidText = '';
    if (text == '') {
      event.target.placeholder = "Please enter a message";
    }
    else {
      event.target.value = '';
      if (this.isPostCovidEnabled) {
        postCovidText = text;
        const toneObj = {
          text: text
        };
        let toneData = await this.getToneDataSync(toneObj);
        this.toneAnalyzerArray.push(toneData);
        text = toneData["polarity"];
        const dataOfTone = this.chatBotService.getToneData(toneObj);
      }
      let lastMessage = this.messages[this.messages.length - 1];
      let hours: any;
      if (this.d.getHours() < 10) {
        hours = "0" + this.d.getHours();
      }
      else {
        hours = this.d.getHours();
      }
      let minutes: any;
      if (this.d.getMinutes() < 10) {
        minutes = "0" + this.d.getMinutes();
      }
      else {
        minutes = this.d.getMinutes();
      }
      let time = hours + ":" + minutes;
      if (lastMessage["message"] == "👀 Can you share your age? 👀") {
        if (text > 0 && text < 120) {
          this.labelListInitSelection = [];
          let labelListInitSelectionUser: String[] = [];
          this.messages.push({ botType: false, time, user: "User", message: text, labelList: labelListInitSelectionUser, checkbox: false, image: false, endMessage: false });
          this.chatBotService.getMessageReply(this.sessionid, text).subscribe((data) => {
            this.messages1 = data;
            this.replyData = this.messages1.result.output.generic[0]["text"];
            this.replyData1 = this.messages1.result.output.generic[1];



            if (this.replyData1 == undefined) {
              this.labelListInitSelection = [];
            }
            else if (this.replyData1 != undefined) {
              this.messages1.result.output.generic[1]["options"].forEach(element => {
                this.labelListInitSelection.push(element);
              });
            }
            if (this.d.getHours() < 10) {
              hours = "0" + this.d.getHours();
            }
            else {
              hours = this.d.getHours();
            }
            if (this.d.getMinutes() < 10) {
              minutes = "0" + this.d.getMinutes();
            }
            else {
              minutes = this.d.getMinutes();
            }
            time = hours + ":" + minutes;
            let keyExists = false;
            let keyObject;
            for (let i = 0; i < this.checkBoxQuestionArray.length; i++) {
              if (this.replyData in this.checkBoxQuestionArray[i]) {
                keyExists = true;
                keyObject = this.checkBoxQuestionArray[i];
                break;
              }
            }
            if (keyExists) {
              let checkboxString = keyObject[this.replyData];
              var arrayCheckBox = checkboxString.split(",");
              let labelListCheckBox: Object[] = [];
              for (let j = 0; j < arrayCheckBox.length; j++) {
                labelListCheckBox.push({ label: arrayCheckBox[j], value: { input: { text: arrayCheckBox[j], isChecked: false } } });
              }
              this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: labelListCheckBox, checkbox: true, image: false, endMessage: false });
              this.replyData = null;
            }
            else {
              this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: this.labelListInitSelection, checkbox: false, image: false, endMessage: false });
              this.replyData = null;
            }

          });
        }
        else {
          this.messages.push({ botType: false, time, user: "User", message: text, labelList: [], checkbox: false, image: false, endMessage: false });
          this.messages.push(lastMessage);
        }
      }
      else {
        this.labelListInitSelection = [];
        let labelListInitSelectionUser: String[] = [];
        if (this.isPostCovidEnabled) {
          this.messages.push({ botType: false, time, user: "User", message: postCovidText, labelList: labelListInitSelectionUser, checkbox: false, image: false, endMessage: false });
          this.isPostCovidEnabled = false;
        }
        else {
          this.messages.push({ botType: false, time, user: "User", message: text, labelList: labelListInitSelectionUser, checkbox: false, image: false, endMessage: false });
        }
        this.chatBotService.getMessageReply(this.sessionid, text).subscribe((data) => {
          this.messages1 = data;
          this.replyData = this.messages1.result.output.generic[0]["text"];
          this.replyData1 = this.messages1.result.output.generic[1];
          if (this.replyData.includes("How are you now?") || this.replyData.includes("Can you share with me why are you feeling so?") || this.replyData.includes("So how was the staff") || this.replyData.includes("How did the local authorities helped you")) {
            this.isPostCovidEnabled = true;
          }
          else if (this.replyData == "Please upload your Chest X-Ray. With the little knowledge that I have, I want to assist you in analyzing your report (Upload format: .jpg, .jpeg, .png)") {
            this.uploadBtnEnabled = false;
          }
          if (this.replyData1 == undefined) {
            this.labelListInitSelection = [];
          }
          else if (this.replyData1 != undefined) {
            this.messages1.result.output.generic[1]["options"].forEach(element => {
              this.labelListInitSelection.push(element);
            });
          }
          if (this.d.getHours() < 10) {
            hours = "0" + this.d.getHours();
          }
          else {
            hours = this.d.getHours();
          }
          if (this.d.getMinutes() < 10) {
            minutes = "0" + this.d.getMinutes();
          }
          else {
            minutes = this.d.getMinutes();
          }
          time = hours + ":" + minutes;
          let keyExists = false;
          let keyObject;
          for (let i = 0; i < this.checkBoxQuestionArray.length; i++) {
            if (this.replyData in this.checkBoxQuestionArray[i]) {
              keyExists = true;
              keyObject = this.checkBoxQuestionArray[i];
              break;
            }
          }
          if (keyExists) {
            let checkboxString = keyObject[this.replyData];
            var arrayCheckBox = checkboxString.split(",");
            let labelListCheckBox: Object[] = [];
            for (let j = 0; j < arrayCheckBox.length; j++) {
              labelListCheckBox.push({ label: arrayCheckBox[j], value: { input: { text: arrayCheckBox[j], isChecked: false } } });
            }
            this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: labelListCheckBox, checkbox: true, image: false, endMessage: false });
            this.replyData = null;
          }
          else {
            this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: this.labelListInitSelection, checkbox: false, image: false, endMessage: false });
            this.replyData = null;
          }

        });
      }


    }
    this.scrollToBottom();
  }

  onChangeCategory(event, element) {
    if (element.value.input.text == "None") {
      this.checkListSelection.forEach(data => {
        const attribute = document.getElementById(`${data}`) as HTMLInputElement;
        if (data == "None") {

        }
        else {
          attribute.checked = false;
        }
      });
      if (this.checkListSelection.indexOf("None") != -1) {
        const index = this.checkListSelection.indexOf(element.value.input.text);
        this.checkListSelection.splice(index, 1);
      }
      else {
        this.checkListSelection = [];
        this.checkListSelection.push(element.value.input.text);
      }

    }
    else {
      if (this.checkListSelection.indexOf(element.value.input.text) == -1) {
        if (this.checkListSelection.indexOf("None") == -1) {
          this.checkListSelection.push(element.value.input.text);
        } else {
          const attribute = document.getElementById(element.value.input.text) as HTMLInputElement;
          attribute.checked = false;
        }
      }
      else {
        const index = this.checkListSelection.indexOf(element.value.input.text);
        this.checkListSelection.splice(index, 1);
      }
    }
    if (this.checkListSelection.length > 0) {
      this.btnEnabled = false;
    }
    else {
      this.btnEnabled = true;
    }
  }

  callApi() {


    //store details to database of checkListSelection
    let hours: any;
    if (this.d.getHours() < 10) {
      hours = "0" + this.d.getHours();
    }
    else {
      hours = this.d.getHours();
    }
    let minutes: any;
    if (this.d.getMinutes() < 10) {
      minutes = "0" + this.d.getMinutes();
    }
    else {
      minutes = this.d.getMinutes();
    }
    let time = hours + ":" + minutes;

    if (this.messages[this.messages.length - 1]["message"] == "🤕Symptoms of the Coronavirus(COVID-19) can look similar to the flu and other ailments. Coming to current situations, are you facing from any of these recently?🤕" || this.messages[this.messages.length - 1]["message"] == "How did you came to know that you are a COVID +ve? Did you have any of these?") {
      if (this.checkListSelection.indexOf("None") != -1) {
        let index = this.checkListSelection.indexOf("None");
        this.checkListSelection.splice(index, 1);
        this.checkListSelection.push("no symptoms");
      }
    }
    else if (this.messages[this.messages.length - 1]["message"] == "A little more info is what I need to assist. 🙂 Does any of these troubles you?" || this.messages[this.messages.length - 1]["message"] == "If you had any of these symptoms kindly select:") {
      if (this.checkListSelection.indexOf("None") != -1) {
        let index = this.checkListSelection.indexOf("None");
        this.checkListSelection.splice(index, 1);
        this.checkListSelection.push("not applicable");
      }
    }
    //IBM Watson CALL
    this.chatBotService.getMessageReply(this.sessionid, this.checkListSelection).subscribe((data) => {
      this.messages1 = data;
      this.replyData = this.messages1.result.output.generic[0]["text"];
      this.replyData1 = this.messages1.result.output.generic[1];
      this.messages.push({ botType: false, time, user: "User", message: this.checkListSelection.toString(), labelList: [], checkbox: false, image: false, endMessage: false });
      this.checkListSelection = [];
      this.labelListInitSelection = [];
      if (this.replyData1 == undefined) {
        this.labelListInitSelection = [];
      }
      else if (this.replyData1 != undefined) {
        this.messages1.result.output.generic[1]["options"].forEach(element => {
          this.labelListInitSelection.push(element);
        });
      }
      if (this.d.getHours() < 10) {
        hours = "0" + this.d.getHours();
      }
      else {
        hours = this.d.getHours();
      }
      if (this.d.getMinutes() < 10) {
        minutes = "0" + this.d.getMinutes();
      }
      else {
        minutes = this.d.getMinutes();
      }
      time = hours + ":" + minutes;
      let keyExists = false;
      let keyObject;
      for (let i = 0; i < this.checkBoxQuestionArray.length; i++) {
        if (this.replyData in this.checkBoxQuestionArray[i]) {
          keyExists = true;
          keyObject = this.checkBoxQuestionArray[i];
          break;
        }
      }
      if (keyExists) {
        let checkboxString = keyObject[this.replyData];
        var arrayCheckBox = checkboxString.split(",");
        let labelListCheckBox: Object[] = [];
        for (let j = 0; j < arrayCheckBox.length; j++) {
          labelListCheckBox.push({ label: arrayCheckBox[j], value: { input: { text: arrayCheckBox[j] } } });
        }
        this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: labelListCheckBox, checkbox: true, image: false, endMessage: false });
        this.replyData = null;
      }
      else {
        this.messages.push({ botType: true, time, user: "Yoda", message: this.replyData, labelList: this.labelListInitSelection, checkbox: false, image: false, endMessage: false });
        this.replyData = null;
      }
    });
    this.scrollToBottom();
  }

  refresh(): void {
    this.messages = [];
    this.labelListInitSelection = [];
    this.userObject = [];
    const botInput = document.getElementById("botInput") as HTMLInputElement;
    botInput.disabled = false;
    this.chatBotService.getSessionId().subscribe(data => {
      this.sessionData = data;
      this.sessionid = this.sessionData.result.session_id;
      this.chatBotService.getMessage(this.sessionid).subscribe(data1 => {
        this.messageData = data1;
        this.message = this.messageData.result.output.generic[0]["text"];
        //let count = 0;
        this.messageData.result.output.generic[1]["options"].forEach(element => {
          this.labelListInitSelection.push(element);
        });
        let hours: any;
        if (this.d.getHours() < 10) {
          hours = "0" + this.d.getHours();
        }
        else {
          hours = this.d.getHours();
        }
        let minutes: any;
        if (this.d.getMinutes() < 10) {
          minutes = "0" + this.d.getMinutes();
        }
        else {
          minutes = this.d.getMinutes();
        }
        let time = hours + ":" + minutes;
        this.messages.push({ botType: true, time, user: "Yoda", message: this.message, labelList: this.labelListInitSelection, checkbox: false, image: false, endMessage: false });
      });
    });
  }

  openForm() {
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("open-button").style.display = "none";
  }

  cross() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("open-button").style.display = "block";
  }

  onFileUpload(event) {
    this.selectedFile = event.target.files[0];
    this.chatBotService.getImageUrl(this.selectedFile).subscribe(data => {
      const ImageData = data;
      this.ImageUrl = ImageData["response"];
      let hours: any;
      if (this.d.getHours() < 10) {
        hours = "0" + this.d.getHours();
      }
      else {
        hours = this.d.getHours();
      }
      let minutes: any;
      if (this.d.getMinutes() < 10) {
        minutes = "0" + this.d.getMinutes();
      }
      else {
        minutes = this.d.getMinutes();
      }
      let time = hours + ":" + minutes;
      this.messages.push({ botType: false, time, user: "User", message: this.ImageUrl, labelList: [], checkbox: false, image: true, endMessage: false });
      this.chatBotService.getMessageConfidence(this.ImageUrl).subscribe(data => {
        const responsedata = data;
        this.uploadBtnEnabled = true;
        this.imageResponse = responsedata["classifiers"][0]["classes"][0];
        let classData = this.imageResponse.class;
        let score = this.imageResponse.score;
        let category: any;
        const labelList: Object[] = [];
        labelList.push({ label: "Return to Main Menu", value: { input: { text: "Return to Main Menu" } } });
        category = "Category: " + classData + ", Score: " + score;
        this.messages.push({ botType: true, time, user: "YODA", message: category, labelList: labelList, checkbox: false, image: false, endMessage: false });
      });
    });
  }

  checkEndMessage(message: string): any {
    if (message.indexOf('!') != -1) {
      if (this.endMessage.indexOf(message.split("!!")[0]) != -1) {
        let index = this.endMessage.indexOf(message.split("!!")[0]);
        this.currentEndMessageUrl = this.endMessageUrls[index];
        return true;
      }
    }
    else {
      return false;
    }
  }

  createUserObject(messages: Object[]) {

    if (messages[3]["message"] == "self assessment") {
      let emailid = "";
      let name = "";
      let gender = "";
      let age = "";
      let longterm = "";
      let currentSymtpoms = "";
      let fever = "";
      let symptomsWorsening = "";
      let breathingFast = "";
      let extraCovidSymptoms = "";
      let covidContactHistory = "";
      for (let i = 0; i < messages.length; i++) {
        if ((messages[i]["message"]).includes("Ok I will send you the details to")) {
          emailid = (messages[i - 1]["message"]);
          this.emailid = emailid;
        }
        if ((messages[i]["message"]).includes("Select your Gender")) {
          name = (messages[i - 1]["message"]);
        }
        if ((messages[i]["message"]).includes("Can you share your age?")) {
          gender = (messages[i - 1]["message"]);
        }
        if ((messages[i]["message"]).includes("Are you disease-free")) {
          age = (messages[i - 1]["message"]);
          longterm = (messages[i + 1]["message"]);
        }
        if ((messages[i]["message"]).includes("look similar to the flu and other ailments")) {
          currentSymtpoms = (messages[i + 1]["message"]);
        }
        if ((messages[i]["message"]).includes("How much temperature are you having?")) {
          fever = (messages[i + 1]["message"]);
        }
        if ((messages[i]["message"]).includes("Symptoms worsening?")) {
          symptomsWorsening = (messages[i + 1]["message"]);
        }
        if ((messages[i]["message"]).includes("Are you breathing fast?")) {
          breathingFast = (messages[i + 1]["message"]);
        }
        if ((messages[i]["message"]).includes("Now lets check if you have any mode of transmission of the virus")) {
          covidContactHistory = (messages[i + 1]["message"]);
        }
        if ((messages[i]["message"]).includes("A little more info is what I need to assist")) {
          extraCovidSymptoms = (messages[i + 1]["message"]);
        }
      }
      this.userObject = { emailid, name, gender, age, longterm, currentSymtpoms, fever, symptomsWorsening, breathingFast, extraCovidSymptoms, covidContactHistory };
      this.chatBotService.getPdfUrl(this.userObject).subscribe(data => {
        let userData = data;
        this.userPdfUrl = userData["ReportPDF"];
        this.userPdfFilePath = userData["file_path"];
      });
    }
    else if (messages[3]["message"] == "analysis") {
      if (messages[5]["message"] == "x-ray") {
        let emailid = "";
        let path = "";
        let category = "";
        for (let i = 0; i < messages.length; i++) {
          if ((messages[i]["message"]).includes("Please upload your Chest X-Ray")) {
            path = (messages[i + 1]["message"]);
            emailid = (messages[i - 1]["message"]);
            category = (messages[i + 2]["message"]);
          }
        }
        this.userObject = { emailid, path, category };
        this.chatBotService.sendXrayData(this.userObject).subscribe(data => {
        });;
      }
      else if (messages[5]["message"] == "post_covid") {
        let emailid = "";
        let name = "";
        let sufferDays = "";
        let hospitalHome = "";
        let covidSymptoms = "";
        let extraSymptoms = "";
        for (let i = 0; i < messages.length; i++) {
          if ((messages[i]["message"]).includes("I need to know your name too")) {
            emailid = (messages[i - 1]["message"]);
          }
          if ((messages[i]["message"]).includes("How are you now?")) {
            name = (messages[i - 1]["message"]);
          }
          if ((messages[i]["message"]).includes("So were you in home or admitted in hospital for the treatment?")) {
            sufferDays = (messages[i - 1]["message"]);
          }
          if ((messages[i]["message"]).includes("How did the local authorities helped you in testing") || (messages[i]["message"]).includes("Kindly enter the name of the hospital/nursing-home")) {
            hospitalHome = (messages[i - 1]["message"]);
          }
          if ((messages[i]["message"]).includes("How did you came to know that you are a COVID +ve")) {
            covidSymptoms = (messages[i + 1]["message"]);
          }
          if ((messages[i]["message"]).includes("If you had any of these symptoms kindly selec")) {
            extraSymptoms = (messages[i + 1]["message"]);
          }
        }
        this.userObject = { emailid, name, sufferDays, hospitalHome, covidSymptoms, extraSymptoms, toneAnalyzerArray: this.toneAnalyzerArray };
        this.chatBotService.sendPostCovidData(this.userObject).subscribe(data => {
        });;
      }
    }
  }

  sendEmailToUser() {
    const emailObj = {
      emailid: this.emailid,
      path: this.userPdfFilePath
    }
    this.chatBotService.sendEmailToUser(emailObj).subscribe(data => {
      if (data["status"] == true) {
        alert("Pdf has been emailed");
      }
      else {
        alert("Server not avaliable");
      }
    });
  }

  async getToneDataSync(toneObj) {
    return await this.chatBotService.getToneData(toneObj);
  }

  openXl(content, state) {
    this.chatBotService.getDistrictData().subscribe(data => {
      this.districtData = data;
      //this.districtDataTable=this.districtData.values();
      this.districtData.forEach((element) => {
        if (element.state == state) {
          this.districtDataTable = (element["districtData"]);
          const modelref = this.modalService.open(content, { size: 'xl' });
          //this.districtDataTableModal.patchValue(this.districtDataTable);
          // modelref.componentInstance.districtDataTable = this.districtDataTable;
        }
      });
    });
    //const modelref = this.modalService.open(content, { size: 'xl' });
    //modelref.componentInstance.
  }

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }


}