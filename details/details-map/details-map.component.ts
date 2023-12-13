import { Component, Input, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LatLng, latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-details-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './details-map.component.html',
  styleUrl: './details-map.component.css'
})
export class DetailsMapComponent implements OnInit {
  @Input() corrdinates!: LatLng

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng(46.879966, -121.726909)
  };

  ngOnInit(): void {
    this.options.center.lat = this.corrdinates.lat;
    this.options.center.lng = this.corrdinates.lng;
  }


}
