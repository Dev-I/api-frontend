import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

export const ADDSTUDENT = gql`  
mutation addStudent($input: StudentInput){
    addStudent(input: $input){
      nombres
      apellido_paterno
      apellido_materno
      numero_control
      telefono
      carrera
      correo_electronico
      estilo_aprendizaje
    }
  }`;
export const AddStudentMutation = ({children})=> {
  return <Mutation mutation={ADDSTUDENT} >
  {children}
  </Mutation>
}

export const UPDATESTUDENT = gql`
mutation updateStudent($input: StudentInput!) {
  updateStudent(input: $input) {
    _id
    nombres
    apellido_paterno
    apellido_materno
    numero_control
    telefono
    carrera
    correo_electronico
    estilo_aprendizaje
  }
}
`
export const UpdateStudentMutation = ({children})=>{
  return <Mutation mutation={UPDATESTUDENT}  >
  {children}
  </Mutation>
}

