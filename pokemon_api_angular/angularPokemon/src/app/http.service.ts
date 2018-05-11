import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
      let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      bulbasaur.subscribe(data => {
        console.log(data)
        console.log(`${data['name']} has a base exp of ${data['base_experience']}`)
        let species = this._http.get(data['abilities'][0]['ability']['url'])
        species.subscribe(data => {
          console.log(`${data['pokemon'].length} Pokemon have the Chlorophyll ability`)
        })
      })
  }
}
