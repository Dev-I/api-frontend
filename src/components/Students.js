import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import {GETSTUDENTS_QUERY} from '../queries/Queries'
import {Link} from 'react-router-dom';

const  Students = () => (
    <Query query={GETSTUDENTS_QUERY} pollInterval={1000}>

        {({loading, error, data,startPolling, stopPolling }) => {
            if (loading) return "cargando"
            if (error) return `error: ${error.message}`;
            console.log(data.getStudents);
            return(
                <Fragment>
                  <h2 className="h2 text-center mt-4"> Listado de Estudiantes</h2>
                  <ul className="list-group mt-4">
                          {data.getStudents.map(student => (
                              <li key={student._id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                        <div className="col-md-8 d-flex justify-content-between align-items-center">
                                            {student.nombres} {student.apellido_paterno} {student.apellido_materno} - {student.carrera}
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-end ">
                                      
                                          <Link to={`/student/edit/${student._id}`} className="btn btn-success d-block d-md-inline-block">Editar estudiante</Link>
                                         </div>
                                </div>
                              </li>
                          ))}
                  </ul>
                </Fragment>
              )
        }}
    </Query>
    );   
    export default Students;