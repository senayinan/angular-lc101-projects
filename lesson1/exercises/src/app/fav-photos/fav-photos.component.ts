import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images From The Movies';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn_02qpIcuPvfPiwADMOtBMJnYNsb064nug&usqp=CAU';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PATZ5JUi97JU4JlLkJ3sIuhKoJVGsha-wg&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6qIBfKhVuhMvBCEKHWNM82cvHuXoOtMKQw&usqp=CAU';
  image4 = 'https://images.immediate.co.uk/production/volatile/sites/3/2017/09/Frozen.jpg?quality=90&resize=200,200';

  constructor() { }

  ngOnInit() {
  }
  
}