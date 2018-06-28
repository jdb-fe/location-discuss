import { Component } from '@angular/core';

import {Http } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {

  }

  ngOnDestroy() {
    console.log('page destory。。。');
  }

  open() {
    let url = 'http://baidu.com';
    window.open(url);
  }

  goBank() {
    console.log('1');
    // window.open(url);
    console.log('2');
    let url = 'https://www.youtube.com/';
    // location.href = url;

    setTimeout(()=> {
      console.log('3kshkdksagdlasdlasgduy');
      location.href = url;
    }, 1000);
    
  }

  goBaidu() {
    window.open('http://baidu.com');
  }

  goEducation() {
    this.checkEdu();
  }

  checkEdu() {
    setTimeout(()=> {
      let url = 'http://www.tsinghua.edu.cn/publish/thu2018/index.html';
      console.log('url: ' + url);
      window.open(url);
      window.open(url);
    }, 3000);
  }

  queryInfo() {
    setTimeout(()=> {
      return 'http://www.tsinghua.edu.cn/publish/thu2018/index.html';
    }, 3000);
  }

}
