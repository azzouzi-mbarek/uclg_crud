import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { QUERY_ACADEMIC_LEVEL, QUERY_ACADEMIC_LEVELS } from '../queries';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AcademicLevelService {
  restApiUrl = environment.baseUrlRest;


constructor(private _apollo: Apollo) { }


// tslint:disable-next-line:no-shadowed-variable
getAcademicLevels(query) {
  return this._apollo.watchQuery({
    query: query
  });
}


// tslint:disable-next-line:no-shadowed-variable
getAcademicLevel(query, id: number) {
  return this._apollo.query({
    query: query,
    variables: {
      id: id
    }
  });
}

updateCache(query, academicLevel) {
  // update store cache
  const store = this._apollo.getClient().store.getCache();
  const dataCache: any = store.readQuery({ query: query });
  // console.log(dataCache);
  dataCache.academicLevels.push(academicLevel);
  store.writeQuery({ query: QUERY_ACADEMIC_LEVELS, data: dataCache });
}

save(mutation, academicLevel) {
  return this._apollo.mutate({
    mutation: mutation,
    variables: {
      name: academicLevel.name
    }
  });

}

update(mutation, academicLevel) {
  return this._apollo.mutate({
    mutation: mutation,
    variables: {
      id: academicLevel.id,
      name: academicLevel.name,
      bac_level: academicLevel.bac_level
    }
  });
}


delete(mutation, academicLevel_id) {
  return this._apollo.mutate({
    mutation: mutation,
    variables: {
      id: academicLevel_id
    },
    update: (store, { data: { deleteAcademicLevel } }) => {
      // Read the data from our cache for this query.
      const data: any = store.readQuery({ query: QUERY_ACADEMIC_LEVELS });
      // delete from cache data
      const index = data.academicLevels.findIndex((e) => e.id === academicLevel_id);
      if (index !== -1) {
        data.academicLevels.splice(index, 1);

      }
      // Write our data back to the cache.
      store.writeQuery({ query: QUERY_ACADEMIC_LEVELS, data });
    },
  });
}

academiqueLevelMutation(mutation, academicLevel) {
  return this._apollo.mutate({
    mutation: mutation,
    variables: {
      id: academicLevel.id,
      name: academicLevel.name,
      bac_level: academicLevel.bac_level
    },
  });

}
}