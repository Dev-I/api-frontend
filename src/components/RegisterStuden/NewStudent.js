import React, {Fragment} from 'react'
import { AddStudentMutation } from '../../mutations';   
import {StudentRegistrer} from './FormRegistrer'


const NewStudent = ()=> {

    return  <Fragment>
               <AddStudentMutation> 
                   {
                       (register, {data,loading, error,})=>{
    
                           const handleSubmit = ({nombres,
                            apellido_paterno,
                            apellido_materno,
                            numero_control,
                            telefono,
                            carrera,
                            correo_electronico,
                            estilo_aprendizaje }) => {
    
                               const input = { nombres,
                                apellido_paterno,
                                apellido_materno,
                                numero_control,
                                telefono,
                                carrera,
                                correo_electronico,
                                estilo_aprendizaje }
                                const variables = { input }
                                register({ variables }).then((data) => {
                                    console.log('SE REGISTRARON LOS DATOS',data);
                                }).catch((e) => {
                                    console.log('A OCURRIDO UN ERROR AL REGISTRAR LOS DATOS: ',e);
                                }
                        );
                           }
                           const errorMSG = error && 'A OCURRIDO UN ERROR AL REGISTRAR LOS DATOS'
                           
                           return <StudentRegistrer error={errorMSG} disabled={loading} title='Registro de Estudiantes' onSubmit={handleSubmit} />
                            
                       }
                   }
               </AddStudentMutation> 
</Fragment>
}

export default NewStudent;