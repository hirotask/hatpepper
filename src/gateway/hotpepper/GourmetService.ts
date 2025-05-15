// src/gateway/hotpepper/GourmetService.ts
import axios from 'axios'
import { IGourmetService, Restaurant, Location } from '../../application/domain';

export interface HotPepperGourmetResponse {
  results: {
    api_version: string;
    results_available: number;
    results_returned: number;
    results_start: number;
    shop: Shop[];
  };
}

export interface Shop {
  id: string;
  name: string;
  name_kana: string;
  address: string;
  station_name: string;
  lat: string;
  lng: string;
  genre: Genre;
  budget: Budget;
  open: string;
  close: string;
  party_capacity: string;
  capacity: string;
  card: string;
  non_smoking: string;
  private_room: string;
  horigotatsu: string;
  tatami: string;
  course: string;
  free_drink: string;
  free_food: string;
  lunch: string;
  midnight: string;
  english: string;
  pet: string;
  child: string;
  parking: string;
  barrier_free: string;
  karaoke: string;
  band: string;
  tv: string;
  show: string;
  wifi: string;
  charter: string;
  wedding: string;
  urls: {
    pc: string;
  };
  coupon_urls: {
    pc: string;
    sp: string;
  };
  photo: {
    pc: {
      l: string;
      m: string;
      s: string;
    };
    mobile: {
      l: string;
      s: string;
    };
  };
  large_area: Area;
  service_area: Area;
  large_service_area: Area;
  middle_area: Area;
  small_area: Area;
  catch: string;
  other_memo: string;
  shop_detail_memo: string;
  logo_image: string;
  ktai_coupon: string;
  mobile_access: string;
  access: string;
  budget_memo: string;
}

export interface Genre {
  name: string;
  catch: string;
  code: string;
}

export interface Budget {
  code: string;
  name: string;
  average: string;
}

export interface Area {
  code: string;
  name: string;
}


const ENDPOINT = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/'

export class GourmetService implements IGourmetService {
    private apiKey: string

    constructor() {
        const key = process.env.HATPEPPER_API_KEY
        if (!key) {
            throw new Error('HATPEPPER_API_KEY が設定されていないのだ')
        }
        this.apiKey = key
    }

    private convertToRestaurant(response: HotPepperGourmetResponse): Restaurant[] {
        if (response.results.results_returned === 0) {
            return []
        }
        return response.results.shop.map((shop) => ({
            name: shop.name,
            genre: shop.genre.name,
            address: shop.address,
            latitude: parseFloat(shop.lat),
            longitude: parseFloat(shop.lng)
        }))
    }


    async findNearbyAsync(location: Location): Promise<Restaurant[]> {
        const endpoint = `${ENDPOINT}?key=${this.apiKey}&lat=${location.latitude}&lng=${location.longitude}&range=3&format=json`
        const response = await axios.get(endpoint)
        const data: HotPepperGourmetResponse = response.data

        const restaurants = this.convertToRestaurant(data)

        return restaurants
    }
}
