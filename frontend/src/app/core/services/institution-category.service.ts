import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { INSTITUTION_CATEGORIES_QUERY } from '../queries';
import { environment } from 'src/environments/environment';


@Injectable()
export class InstitutionCategoryService {

  restApiUrl = environment.baseUrlRest;

  constructor(private _apollo: Apollo) {
    console.log('service institution category executed');

  }


  // tslint:disable-next-line:no-shadowed-variable
  getCategories(query) {
    return this._apollo.watchQuery({
      query: query
    });
  }
 


  // tslint:disable-next-line:no-shadowed-variable
  getCategory(query, id: number) {
    return this._apollo.query({
      query: query,
      variables: {
        id: id
      }
    });
  }


  updateCache(query, category) {
    // update store cache
    const store = this._apollo.getClient().store.getCache();
    const dataCache: any = store.readQuery({ query: query });
    // console.log(dataCache);
    dataCache.institutionCategories.push(category);
    store.writeQuery({ query: INSTITUTION_CATEGORIES_QUERY, data: dataCache });
  }



  save(mutation, category) {
    return this._apollo.mutate({
      mutation: mutation,
      variables: {
        name: category.name
      }
    });
  }

  update(mutation, category) {
    return this._apollo.mutate({
      mutation: mutation,
      variables: {
        id: category.id,
        name: category.name
      }
    });
  }


  delete(mutation, category_id) {
    return this._apollo.mutate({
      mutation: mutation,
      variables: {
        id: category_id
      },
      update: (store, { data: { deleteInstitutionCategory } }) => {
        // Read the data from our cache for this query.
        const data: any = store.readQuery({ query: INSTITUTION_CATEGORIES_QUERY });
        // delete from cache data
        const index = data.institutionCategories.findIndex((e) => e.id === category_id);
        if (index !== -1) {
          data.institutionCategories.splice(index, 1);
  
        }
        // Write our data back to the cache.
        store.writeQuery({ query: INSTITUTION_CATEGORIES_QUERY, data });
      },
    });
  }


  institutionCategoryMutation(mutation, category) {
    console.log(category)
    return this._apollo.mutate({
      mutation: mutation,
      variables: {
        id: category.id,
        name: category.name
      }
    });

  }

}
