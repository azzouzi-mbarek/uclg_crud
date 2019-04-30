import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { environment } from 'src/environments/environment';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { INSTITUTIONS_QUERY, } from './../queries';

@Injectable( )
export class InstitutionService {
  restApiUrl = environment.baseUrlRest;
  private restBaseUrl = this.restApiUrl + '/countries/';

  constructor(
    private _apollo: Apollo,
    private _http: HttpClient
  ) {
    console.log('service institution executed');
  }




  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }


  getInstitutions(query) {
    return this._apollo.watchQuery({
      query: query
    });
  }



  getInstitution(query, id: number) {
    return this._apollo.query({
      query: query,
      variables: {
        id: id
      }
    });
  }



  // save(mutation, institution) {
  //   return this._apollo.mutate({
  //     mutation: mutation,
  //     variables: {
  //       name: institution.name
  //     }
  //   });
  // }

  // update(mutation, institution) {
  //   return this._apollo.mutate({
  //     mutation: mutation,
  //     variables: {
  //       id: institution.id,
  //       name: institution.name
  //     }
  //   });
  // }


  delete(mutation, institution_id) {
    return this._apollo.mutate({
      mutation: mutation,
      variables: {
        id: institution_id
      },
      update: (store, { data: { deleteInstitution } }) => {
        // Read the data from our cache for this query.
        const data: any = store.readQuery({ query: INSTITUTIONS_QUERY });
        // delete from cache data
        const index = data.institutions.findIndex((e) => e.id === institution_id);
        if (index !== -1) {
          data.institutions.splice(index, 1);

        }
        // Write our data back to the cache.
        store.writeQuery({ query: INSTITUTIONS_QUERY, data });
      },
    });
  }

  updateCache(query, institution) {
    // update store cache
    const store = this._apollo.getClient().store.getCache();
    const dataCache: any = store.readQuery({ query: query });
    // console.log(dataCache);
    dataCache.institutions.push(institution);
    store.writeQuery({ query: INSTITUTIONS_QUERY, data: dataCache });
  }


  institutionMutation(mutation, institution) {
    return this._apollo.mutate({
      mutation: mutation,
      variables: {
        id: institution.id,
        name: institution.name,
        acronym: institution.acronym,
        description: institution.description,
        foundation_year: institution.foundation_year,
        country_seat: institution.country_seat,
        organe_tutelle: institution.organe_tutelle,
        areas_intervention: institution.areas_intervention,
        target_beneficiary: institution.target_beneficiary,
        phone: institution.phone,
        email: institution.email,
        web_site: institution.web_site,
        address: institution.address,
        localisation: institution.localisation,
        institution_category_id: institution.category.id,
      },


    });

  }
}
