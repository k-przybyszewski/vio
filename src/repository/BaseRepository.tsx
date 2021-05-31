import axios from 'axios';

export const API_BASE_URL = "https://ttapi.detour.pl"

export class BaseRepository {
  
  constructor(private path: string) {}

  find(params?: any) {
    const s = Object.keys(params || {}).length === 0 ? "?" : ""
    params = new URLSearchParams(params || {})
    return axios.get(`${API_BASE_URL}/${this.path}${s}${(params.toString())}`)
  }

}
