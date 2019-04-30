import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { environment } from 'src/environments/environment';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import {PERSONS_QUERY} from './../queries'


@Injectable()
export class PersonService {

    restApiUrl = environment.baseUrlRest;

    constructor(
        private _apollo: Apollo,
        private _http: HttpClient
    ) { }


    errorHandler(error: HttpErrorResponse) {
        return throwError(error);
    }

    getPersons(query) {
        return this._apollo.watchQuery({
            query: query
        });
    }

    getPerson(query, id: number) {
        return this._apollo.query({
            query: query,
            variables: {
                id: id
            }
        });
    }


    delete(mutation, person_id) {
        return this._apollo.mutate({
            mutation: mutation,
            variables: {
                id: person_id
            },
            update: (store, { data: { deletePerson } }) => {
                // Read the data from our cache for this query.
                const data: any = store.readQuery({ query: PERSONS_QUERY });
                const index = data.persons.findIndex((e) => e.id === person_id);
                if (index !== -1) {
                    data.persons.splice(index, 1);

                }


                // Add our comment from the mutation to the end.


                // Write our data back to the cache.
                store.writeQuery({ query: PERSONS_QUERY, data });
            },
        });
    }


    updateCache(query, person) {
        // update store cache
        const store = this._apollo.getClient().store.getCache();
        const dataCache: any = store.readQuery({ query: query });
        // console.log(dataCache);
        dataCache.Persons.push(person);
        store.writeQuery({ query: PERSONS_QUERY, data: dataCache });
      }

      personMutation(mutation, person) {
        return this._apollo.mutate({
          mutation: mutation,
          variables: {
            id: person.id,
            first_name: person.first_name,
            last_name: person.last_name,
            image_url: person.image_url,
            sex: person.sex,
            birthday: person.birthday,
            profession: person.profession,
            nationality: person.nationality,
            study_area: person.study_area,
            short_biography: person.short_biography,
            email: person.email,
            number_phone: person.number_phone,
            academic_level_id: person.academic_level_id,
    
          }
        });
    
      }


}