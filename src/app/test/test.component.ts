import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, OnChanges, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap, take } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Hero, Test, Inter } from '../hero';
import { HeroService } from '../hero.service';
// import { chown } from 'fs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit, AfterViewInit, OnChanges {

  missionAnnouncedSource = new Subject<string>();
  missionConfirmedSource = new Subject<string>();

  missionAccouned$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  location = new Observable((observer) => {

    // observer.next('Words');
    // // observer.error();
    // observer.complete();

    let x = 4;
    const {next, error} = observer;
    let watchId;

    if ( x === 5 ) {
      watchId = observer.next('Words');
      // watchId = navigator.geolocation.watchPosition(next, error);
    } else {
    return null;
    }


  });

  Indeed: InterTwo[] = [
    {id: 1, name: 'apples', address: '134 table'},
    {id: 2, name: 'frog', address: '135 table'},
  ];


  Bob = 'Bobby';

  Jack = 5;

  happyCheck = true;

  test = <Test>{ id: 5, name: 'Bob', age: 17 };

  apple = new Test;

  redirectReasonMessageMap = {
    'apples': {},
    'cow': {}
  };


  arrayToMap = [

    {
      'id': 1,
      'name': 'apple'
    },
    {
      'id': 2,
      'name': 'banana'
    },
    {
      'id': 3,
      'name': 'cow'
    },
    {
      'id': 4,
      'name': 'dog'
    },
    {
      'id': 5,
      'name': 'egg'
    }
  ];

  prop = 'hello';

  now: any;
  @Input() name: string;

  @ViewChild('viewChildCheck') animals: ElementRef;

  @HostListener('click') onClick() {
    // console.log('hair');
  }

  ngAfterViewInit() {
    this.animals.nativeElement.value = 'Check';
    if (this.redirectReasonMessageMap['cow']) {
      const pipe = 'ruler';
      console.log('Hey Buddy');

      this.location.subscribe( x => console.log(x));
      console.log(this.forTheSake(5, 'hey') + ' Right Now');

    }

    this.newFunction();

    console.log(this.test.id, this.test.name, this.test.age);
    console.log(this.apple.fun());

    // console.log(this.arrayToMap.map(field => field.apples) + 'mapping');
    // this.arrayToMap.map(field => { field.applesTwo ? console.log(field.applesTwo) : console.log();  } );
    this.arrayToMap.filter(atm => atm.name !== 'egg').map(atm => console.log(atm.id));
    this.arrayToMap.map(atm => console.log(atm.name));
    // this.arrayToMap.map( atm => console.log(atm.name));

  }

  ngOnChanges() {
    console.log('A change has happened');
  }

  forTheSake( num: number, string: string): number {

    let c: number;
    c = num + 2;
    return c;
  }

  functionTwo() {
    console.log('hello');
  }

  loopForTheSake() {

    if (this.Jack < 40) {
    this.Jack++;
    }
  }

  deLoopForTheSake() {

    if (this.Jack > 5) {
    this.Jack--;
    }
  }

  functionThree(passed: string) {
    console.log(passed);
  }



  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }






  // id = 5;
  // // name = 'hey';
  // age;

  // listArray: any[] = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
  // list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // // Teams$: Observable<any>;
  // Teams: Test[];



  // Squad: Inter[] = [
  //   { id: 2, name: 'John', age: 3 },
  //   { id: 3, name: 'Tim', age: 3 },
  //   { id: 4, name: 'Ben', age: 3 },
  //   { id: 5, name: 'Clide', age: 3 },
  //   { id: 6, name: 'Rob', age: 3 },
  //   { id: 7, name: 'Liam', age: 3 }
  // ];





  //   TEAMS: Test[] = [
  //     { id: 2, name: 'John' },
  //     { id: 3, name: 'Tim' },
  //     { id: 4, name: 'Ben' },
  //     { id: 5, name: 'Clide' },
  //     { id: 6, name: 'Rob' },
  //     { id: 7, name: 'Liam' }
  // ];

  // Sum = new Test();
  // sum = this.Sum.conF = 2222;



  constructor(private heroService: HeroService) {

  }


  ngOnInit() {
    this.missionAccouned$.subscribe(hehe => console.log(hehe + ' check'));
    this.function();
    this.announceMission('Startttttttttt');
  }

  newFunction() {
    this.announceMission('New Starter');
  }


  function(appName: string = 'Hello'): void {

    // let [a,b, ...remaining] = [1,2,3,4,5,6,7,8,9,10,11,12];
    // let list = [a,b, ...remaining]
    // this.list = list;



    // let list = [1,2,3,4];
    // list = [0,...list,5,6,7];


    /*
      const point2D = {x: 1, z: 2, y: 16};
  
      const anotherPoint3D = {a: 5, b: 4, ...point2D};
  
      const point3D = {...point2D,  x:3, z: 4};
  
      const yetAnotherPoint3D = { x:5, z:6, ...point2D};
  
      console.log(point3D);
    */

    // console.log(this.Sum.conF);

    // const url = {'applicationName': appName};

    // const teamTwo: any[] = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];

    // this.heroService.getTeams().pipe(
    //   tap(teams => console.log(teams)))
    //   .subscribe();

    //   console.log(teamTwo[0]);
    //   console.log(url);
  }

}

export abstract class  InterTwo {
  id: number;
  name: string;
  abstract address: string;


}