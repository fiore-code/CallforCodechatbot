import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) {
  }

  getSessionId(): Observable<Object> {
    return this.http.get('http://13.127.19.108:3000/assistant/api/session');
  }

  getWorldWideDetails(): Observable<Object> {
    return this.http.get('https://covid19.mathdro.id/api/');
  }

  getSpecificCountryDetails(country): Observable<Object> {
    return this.http.get("https://covid19.mathdro.id/api/countries/" + country);
  }

  getMessage(data): Observable<Object> {
    return this.http.post('http://13.127.19.108:3000/assistant/api/message', {
      "session_id": `${data}`,
      "input": {
        "message_type": "text",
        "text": ""
      }
    });
  }
  getMessageReply(data, text): Observable<Object> {
    return this.http.post('http://13.127.19.108:3000/assistant/api/message', {
      "session_id": `${data}`,
      "input": {
        "message_type": "text",
        "text": `${text}`
      }
    });
  }

  getImageUrl(file): Observable<Object> {
    const uploadData = new FormData();
    uploadData.append("MoreImage", file);
    return this.http.post('http://13.127.19.108:8080/feed/upload', uploadData);
  }

  getMessageConfidence(imageUrl) {
    return this.http.post('https://4afbc560.eu-gb.apigw.appdomain.cloud/covidimg/classify', {
      "imageUrl": `${imageUrl}`
    });
  }

  getCoordinatesData() {
    return this.http.get('https://prod-api-humble-otter-wj.eu-gb.mybluemix.net/api/countryDetails');
  }

  getDailyCount() {
    return this.http.get('http://35.154.58.59/api/daily_total_updates');
  }

  getAgeCategoryCount(): Observable<Object> {
    return this.http.get('http://35.154.58.59/api/age_count_data');
  }

  getWeeklyData(): Observable<Object> {
    return this.http.get('http://35.154.58.59/api/weekly_count');
  }

  getPdfUrl(userObject): Observable<Object> {
    return this.http.post('http://ec2-13-235-31-214.ap-south-1.compute.amazonaws.com/createuser', userObject);
  }

  async getToneData(toneObj) {
    return await this.http.post("https://sentimentapi-busy-gelada-fl.eu-gb.mybluemix.net/getUserSentiment", toneObj).toPromise();
  }


  sendEmailToUser(userObj) {
    return this.http.post("http://ec2-13-235-31-214.ap-south-1.compute.amazonaws.com/getReportByEmail", userObj);
  }

  getStateWiseData(): Observable<Object> {
    return this.http.get('http://35.154.58.59/api/daily_state_count');
  }

  getDistrictData(): Observable<Object> {
    return this.http.get('http://35.154.58.59/api/state_data');
  }
}