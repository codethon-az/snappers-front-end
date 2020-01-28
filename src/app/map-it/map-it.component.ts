import { Component, OnInit } from '@angular/core';

import * as atlas from 'azure-maps-control';


@Component({
  selector: 'app-map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./map-it.component.scss']
})
export class MapItComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    let map = new atlas.Map('myMap', {
      view: 'Auto',
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: '_iE98wMyxMH5x0BLJkcFDAGRPLP94M34uMktJOqIJno'
      }
    });

    map.events.add('ready', function () {
      map.markers.add(new atlas.HtmlMarker({
        color: 'DodgerBlue',
        text: '10',
        position: [0, 0]
      }));
    });

  }
}
