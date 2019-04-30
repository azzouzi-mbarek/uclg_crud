import gql from 'graphql-tag';




export const INSTITUTION_QUERY = gql`
  query institution($id:ID!) {
  institution(id :$id){
    id
    name
    logo
    acronym
    description
    foundation_year
    country_seat
    organe_tutelle
    areas_intervention
    target_beneficiary
    web_site
    email
    phone
    address
    localisation
    category {
      id
      name
    }
  }
  }`;


export const INSTITUTIONS_QUERY = gql`
  query institutions{
  institutions{
     id
    name
    logo
    acronym
    description
    foundation_year
    country_seat
    organe_tutelle
    areas_intervention
    target_beneficiary
    web_site
    email
    phone
    address
    localisation
    category {
      id
      name
    }
  }
  }`;




export const MUTATION_CREATE_INSTITUTION = gql`
    mutation CreateInstitution(
        $name:String ,
        $acronym:String ,
        $description: String,
        $foundation_year:Int,
        $country_seat: String,
        $organe_tutelle: String,
        $areas_intervention: String,
        $target_beneficiary: String,
        $phone: String,
        $email: String,
        $web_site: String,
        $address: String,
        $localisation: String,
        $institution_category_id: Int,
       ){
      CreateInstitution(
        name: $name ,
        acronym:$acronym ,
        description: $description,
        foundation_year  :  $foundation_year ,
        country_seat  : $country_seat,
        organe_tutelle : $organe_tutelle ,
        areas_intervention : $areas_intervention,
        target_beneficiary  :  $target_beneficiary ,
        phone : $phone ,
        email: $email ,
        web_site  : $web_site ,
        address :$address ,
        localisation :  $localisation ,
        institution_category_id : $institution_category_id ,
        ){
          id
    name
    logo
    acronym
    description
    foundation_year
    country_seat
    organe_tutelle
    areas_intervention
    target_beneficiary
    web_site
    email
    phone
    address
    localisation
    category {
      id
      name
    }
      }
    }
  `;








export const MUTATION_UPDATE_INSTITUTION = gql`
mutation UpdateInstitution(
        $id: ID!,
        $name:String ,
        $acronym:String ,
        $description: String,
        $foundation_year:Int,
        $country_seat: String,
        $organe_tutelle: String,
        $areas_intervention: String,
        $target_beneficiary: String,
        $phone: String,
        $email: String,
        $web_site: String,
        $address: String,
        $localisation: String,
        $institution_category_id: Int,
  ){
  UpdateInstitution(
        id: $id,
        name: $name ,
        acronym:$acronym ,
        description: $description,
        foundation_year  :  $foundation_year ,
        country_seat  : $country_seat,
        organe_tutelle : $organe_tutelle ,
        areas_intervention : $areas_intervention,
        target_beneficiary  :  $target_beneficiary ,
        phone : $phone ,
        email: $email ,
        web_site  : $web_site ,
        address :$address ,
        localisation :  $localisation ,
        institution_category_id : $institution_category_id ,
    ){
    id
    name
    logo
    acronym
    description
    foundation_year
    country_seat
    organe_tutelle
    areas_intervention
    target_beneficiary
    web_site
    email
    phone
    address
    localisation
    category {
      id
      name
    }
  }
}
`;



export const DELETE_INSTITUTION_MUTATION = gql`
mutation deleteInstitution($id: ID!){
  deleteInstitution(id: $id){
    id
    name
  }
} `;



///////////////   INSTITUTION  CATEGORY //////////////////////////

export const CATEGORY_QUERY = gql`
query category($id: ID!) {
  category(id : $id){
    id
    name
  }
} `;





export const INSTITUTION_CATEGORIES_QUERY = gql`
query institutionCategories{
  institutionCategories{
    id
    name
  }
} `;

export const MUTATION_CREATE_INSTITUTION_CATEGORY = gql`
mutation CreateInstitutionCategory($name: String){
  CreateInstitutionCategory(name: $name){
    id
    name
  }
}
`;

export const MUTATION_UPDATE_INSTITUTION_CATEGORY = gql`
mutation UpdateInstitutionCategory($id: ID!, $name: String){
  UpdateInstitutionCategory(id: $id, name: $name){
    id
    name
  }
}
`;



export const DELETE_INSTITUTION_CATEGORY_MUTATION = gql`
mutation deleteInstitutionCategory($id: ID!){
  deleteInstitutionCategory(id: $id){
    id
    name
  }
} `;











