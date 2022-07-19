import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from 'ontimize-web-ngx';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, OntimizeWebModule]
})




export class LandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(NavigationService) public navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.navigation.setVisible(true);
  }

  getStaticData() {
    return [{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","lat":-37.3159,"lng":81.1496,"phone":"1-770-736-8031 x56442","website":"hildegard.org","companyname":"Romaguera-Crona","companycatchPhrase":"Multi-layered client-server neural-net","companybs":"harness real-time e-markets","thumbnailUrl":"assets/images/placehold/100-30ac17.png","image":"assets/images/placehold/600-30ac17.png","body":"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora\n    quo necessitatibus\ndolor\n    quam autem quasi\nreiciendis et nam sapiente accusantium"},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","lat":-43.9509,"lng":-34.4618,"phone":"010-692-6593 x09125","website":"anastasia.net","companyname":"Deckow-Crist","companycatchPhrase":"Proactive didactic contingency","companybs":"synergize scalable supply-chains","thumbnailUrl":"assets/images/placehold/100-dff9f6.png","image":"assets/images/placehold/600-dff9f6.png","body":"est natus enim nihil est dolore omnis voluptatem\n     numquam\net omnis occaecati quod ullam at\nvoluptatem error\n     expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","lat":-68.6102,"lng":-47.0653,"phone":"1-463-123-4447","website":"ramiro.info","companyname":"Romaguera-Jacobson","companycatchPhrase":"Face to face bifurcated interface","companybs":"e-enable strategic applications","thumbnailUrl":"assets/images/placehold/100-1941e9.png","image":"assets/images/placehold/600-1941e9.png","body":"quia molestiae reprehenderit quasi aspernatur\naut expedita\n    occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe\n     quia accusamus maiores nam est\ncum et ducimus et vero voluptates\n      excepturi deleniti ratione"},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","lat":29.4572,"lng":-164.299,"phone":"493-170-9623 x156","website":"kale.biz","companyname":"Robel-Corkery","companycatchPhrase":"Multi-tiered zero tolerance productivity","companybs":"transition cutting-edge web services","thumbnailUrl":"assets/images/placehold/100-39e985.png","image":"assets/images/placehold/600-39e985.png","body":"non et atque\noccaecati deserunt quas accusantium unde odit\n    nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net\n    qui rerum deleniti ut occaecati"},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","lat":-31.8129,"lng":62.5342,"phone":"(254)954-1289","website":"demarco.info","companyname":"Keebler LLC","companycatchPhrase":"User-centric fault-tolerant solution","companybs":"revolutionize end-to-end systems","thumbnailUrl":"assets/images/placehold/100-7735a.png","image":"assets/images/placehold/600-7735a.png","body":"harum non quasi et ratione\ntempore iure ex voluptates\n    in ratione\nharum architecto fugit inventore cupiditate\nvoluptates\n    magni quo et"},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","lat":-71.4197,"lng":71.7478,"phone":"1-477-935-8478 x6430","website":"ola.org","companyname":"Considine-Lockman","companycatchPhrase":"Synchronised bottom-line interface","companybs":"e-enable innovative applications","thumbnailUrl":"assets/images/placehold/100-aef555.png","image":"assets/images/placehold/600-aef555.png","body":"laudantium enim quasi est quidem magnam voluptate´\n    ipsam eos\ntempora quo necessitatibus\ndolor quam autem\n    quasi\nreiciendis et nam sapiente accusantium"},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","lat":24.8918,"lng":21.8984,"phone":"210.067.6132","website":"elvis.io","companyname":"Johns Group","companycatchPhrase":"Configurable multimedia task-force","companybs":"generate enterprise e-tailers","thumbnailUrl":"assets/images/placehold/100-c672a0.png","image":"assets/images/placehold/600-c672a0.png","body":"est natus enim nihil est dolore omnis voluptatem numquam\net\n    omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil\n     sint nostrum voluptatem reiciendis et"},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","lat":-14.399,"lng":-120.7677,"phone":"586.493.6943 x140","website":"jacynthe.com","companyname":"Abernathy Group","companycatchPhrase":"Implemented secondary concept","companybs":"e-enable extensible e-tailers","thumbnailUrl":"assets/images/placehold/100-412ffd.png","image":"assets/images/placehold/600-412ffd.png","body":"quia molestiae reprehenderit quasi aspernatur\naut\n    expedita occaecati aliquam eveniet laudantium\nomnis quibusdam\n    delectus saepe quia accusamus maiores nam est\ncum et ducimus\n    et vero voluptates excepturi deleniti ratione"},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","lat":24.6463,"lng":-168.8889,"phone":"(775)976-6794 x41206","website":"conrad.com","companyname":"Yost and Sons","companycatchPhrase":"Switchable contextually-based project","companybs":"aggregate real-time technologies","thumbnailUrl":"assets/images/placehold/100-15c072.png","image":"assets/images/placehold/600-15c072.png","body":"non et atque\noccaecati deserunt quas accusantium unde\n     odit nobis qui voluptatem\nquia voluptas consequuntur itaque\n     dolor\net qui rerum deleniti ut occaecati"},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","lat":-38.2386,"lng":57.2232,"phone":"024-648-3804","website":"ambrose.net","companyname":"Hoeger LLC","companycatchPhrase":"Centralized empowering task-force","companybs":"target end-to-end models","thumbnailUrl":"assets/images/placehold/100-e65eee.png","image":"assets/images/placehold/600-e65eee.png","body":"harum non quasi et ratione\ntempore iure ex voluptates in\n      ratione\nharum architecto fugit inventore cupiditate\nvoluptates\n       magni quo et"}];
  }

  loginPrincipal() {
    this.router.navigate(['./login']);
  }



}
