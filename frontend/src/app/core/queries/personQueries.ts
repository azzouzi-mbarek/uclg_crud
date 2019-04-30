import gql from 'graphql-tag';


///////////////   PERSON QUERIES AND MUTATION    //////////////////////////

export const PERSON_QUERY = gql`
    query person($id:ID!) {
      person(id :$id){
          id
          image_url
          first_name
          last_name
          sex
          birthday
          profession
          nationality
          study_area
          short_biography
          email
          number_phone
          academicLevel{
            id
            name
          }
    }
  }`;

export const PERSONS_QUERY = gql`
  query persons{
    persons{
      id
          image_url
          first_name
          last_name
          sex
          birthday
          profession
          nationality
          study_area
          short_biography
          email
          number_phone
          academicLevel{
            id
            name
          }
  }
  }`;


export const MUTATION_CREATE_PERSON = gql`
    mutation createPerson(
    $first_name:String,
    $last_name:String,
    $image_url:String,
    $sex:String,
    $birthday:Date,
    $profession:String,
    $nationality:String,
    $study_area:String,
    $short_biography:String,
    $email:String,
    $number_phone:String,
    $academic_level_id: Int,

    ){
    
    createPerson(
    
    first_name: $first_name,
    last_name: $last_name,
    sex: $sex
    birthday:$birthday
    profession: $profession
    nationality: $nationality
    study_area:$study_area
    short_biography:$short_biography
    email:$email
    number_phone:$number_phone
    academic_level_id:$academic_level_id
     
     ){
      id
      image_url
      first_name
      last_name
      sex
      birthday
      profession
      nationality
      study_area
      short_biography
      email
      number_phone
      academicLevel{
        id
        name
      }
      }
    }
  `;

export const MUTATION_UPDATE_PERSON = gql`
mutation updatePerson(
  $id:ID!,
  $first_name:String,
  $last_name:String,
    $image_url:String,
    $sex:String,
    $birthday:Date,
    $profession:String,
    $nationality:String,
    $study_area:String,
    $short_biography:String,
    $email:String,
    $number_phone:String,
    $academic_level_id: Int,
  ){
  updatePerson(
    id:$id,
    first_name: $first_name,
    last_name: $last_name,
    sex: $sex
    birthday:$birthday
    profession: $profession
    nationality: $nationality
    study_area:$study_area
    short_biography:$short_biography
    email:$email
    number_phone:$number_phone
    academic_level_id:$academic_level_id
     ){
      id
      image_url
      first_name
      last_name
      sex
      birthday
      profession
      nationality
      study_area
      short_biography
      email
      number_phone
      academicLevel{
        id
        name
      }
  }
}`;

export const MUTATION_DELETE_PERSON = gql`
mutation deletePerson($id:ID!){
  deletePerson(id: $id){
    id
    first_name
    last_name
  }
}
`;

///////////////   ACADEMIC LEVEL QUERIES AND MUTATION    //////////////////////////

export const QUERY_ACADEMIC_LEVEL = gql`
    query academicLevel($id:ID!) {
      academicLevel(id :$id){
      id
      name
      bac_level
    }
  }`;

export const QUERY_ACADEMIC_LEVELS = gql`
  query academicLevels{
    academicLevels{
    id
    name
    bac_level
  }
  }`;


export const MUTATION_CREATE_ACADEMIC_LEVEL = gql`
    mutation createAcademicLevel(
      $name:String,
      $bac_level:String
    ){
      createAcademicLevel(name: $name, bac_level: $bac_level){
        id
        name
        bac_level
      }
    }
  `;

export const MUTATION_UPDATE_ACADEMIC_LEVEL = gql`
mutation updateAcademicLevel($id:ID!, $name:String, $bac_level:String){
  updateAcademicLevel(id:$id, name:$name, bac_level: $bac_level){
    id
    name
    bac_level
  }
}`;

export const MUTATION_DELETE_ACADEMIC_LEVEL = gql`
mutation deleteAcademicLevel($id:ID!){
  deleteAcademicLevel(id: $id){
    id
    name
    bac_level
  }
}
`;

