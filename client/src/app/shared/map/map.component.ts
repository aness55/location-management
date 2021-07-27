import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
import { point } from './point'
import { proj, View } from 'openlayers'
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs'
import { GeoLocationService } from '../../core/services/geo-location.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [HttpClient, GeoLocationService]
})
export class MapComponent implements OnInit, OnDestroy {
  @Input()
  clickable = true;

  @Input()
  geoReverseService = 'https://nominatim.openstreetmap.org/reverse?key=iTzWSiYpGxDvhATNtSrqx5gDcnMOkntL&format=json&addressdetails=1&lat={lat}&lon={lon}'

  @Input()
  width: string = '150px';
  @Input()
  height: string = '150px';

  @Input()
  latitude = 43.8515575
  @Input()
  longitude = 18.3826487

  @Input()
  latitudePointer = 43.8515575
  @Input()
  longitudePointer = 18.3826487

  @Input()
  showControlsZoom: boolean
  @Input()
  titleZoomIn = 'Zoom in'
  @Input()
  titleZoomOut = 'Zoom out'
  @Input()
  showControlsCurrentLocation: boolean
  @Input()
  titleCurrentLocation = 'Current location'

  @Input()
  showDebugInfo: boolean
  @Input()
  opacity = 1
  @Input()
  zoom = 16

  markerImage = point

  reverseGeoSub: Subscription = null
  pointedAddress: string
  pointedAddressOrg: string
  position: any
  dirtyPosition

  @Output()
  addressChanged = new EventEmitter<String>()

  constructor(private httpClient: HttpClient, private geoLocationService: GeoLocationService) {
  }

  ngOnInit() {
    if (this.showControlsCurrentLocation) {
      this.geoLocationService.getLocation().subscribe((position) => {
        this.position = position
        if (!this.dirtyPosition) {
          this.dirtyPosition = true
          this.longitude = this.longitudePointer = this.position.coords.longitude
          this.latitude = this.latitudePointer = this.position.coords.latitude
        }
      })
    }
  }

  ngOnDestroy() {
    if (this.reverseGeoSub) {
      this.reverseGeoSub.unsubscribe()
    }
  }
  onSingleClick(event) {
    if (this.clickable) {
      const lonlat = proj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326')
      this.longitudePointer = lonlat[0]
      this.latitudePointer = lonlat[1]
      this.reverseGeo()
    }
  }
  increaseOpacity() {
    this.opacity += 0.1
  }

  decreaseOpacity() {
    this.opacity -= 0.1
  }
  increaseZoom() {
    this.zoom++
  }
  decreaseZoom() {
    this.zoom--
  }

  reverseGeo() {
    const service = (this.geoReverseService || '')
      .replace(new RegExp('{lon}', 'ig'), `${this.longitudePointer}`)
      .replace(new RegExp('{lat}', 'ig'), `${this.latitudePointer}`)
    this.reverseGeoSub = this.httpClient.get(service).subscribe(data => {
      const address = data['address']
      const name = address.city || address.county || address.village || address.municipality || address.region
      const val = {
        name: name,
        city: address.city || '',
        address: (address.road?address.road+', ':'')+(address.house_number?address.house_number+', ':'')+(address.postcode?address.postcode+', ':'')+(name?name+', ':'')+(address.country?address.country:''),
        latitude: Number(data['lat']),
        longitude: Number(data['lon']),
      }
      this.addressChanged.emit(JSON.stringify(val))
    })
  }
}