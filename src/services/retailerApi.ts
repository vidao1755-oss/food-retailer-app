import { Retailer } from '../types';
// Demo records only: these are not verified stores or product availability.
export async function getNearbyRetailers(lat: number, lng: number): Promise<Retailer[]> { return [{id:'demo-1',name:'Example Market',address:'Demo location',distanceKm:1.2,lat,lng},{id:'demo-2',name:'Sample Grocer',address:'Demo location',distanceKm:2.4,lat:lat+0.01,lng:lng+0.01}]; }
