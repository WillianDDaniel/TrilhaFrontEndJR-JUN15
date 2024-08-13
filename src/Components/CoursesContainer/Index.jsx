import { useState } from 'react';
import './Style.css';

import { Courses } from '@/assets/js/Courses.js';

import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";

export default function CoursesContainer() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCourse = () => {

        if (currentIndex < Courses.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0)
        }

    }

    const prevCourse = () => {

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(Courses.length - 1)
        }

    }

    const course = Courses[currentIndex];

    return (
        <div className='courses-container'>
            <div className='course-selector'>

                <BiSolidLeftArrow
                    className='arrow'
                    onClick={prevCourse}
                />

                <h3>{course.name}</h3>

                <BiSolidRightArrow
                    className='arrow'
                    onClick={nextCourse}
                />

            </div>

            <div className='courses-info'>

                <div className='courses-left'>
                    <div className='course-school-duration'>

                        <div className='course-school'>
                            <p><b>Instituição:</b></p>
                            <p>{course.school}</p>
                        </div>

                        <div className='course-duration'>
                            <p><b>Duração:</b></p>
                            <p>{course.duration}</p>
                        </div>

                        <div className='course-status'>
                            <p><b>Status:</b></p>
                            <p>{course.status}</p>
                        </div>

                    </div>

                    <div className='course-content'>
                        <p><b>Conteúdo do Curso</b></p>
                        <p>{course.content}</p>
                    </div>

                    <div className='course-description'>
                        <p><b>Descrição</b></p>
                        <p>{course.description}</p>
                    </div>

                    <div className='course-code'>
                        <p><b>Código de Certificação</b></p>
                        <p>{course.certificationCode}</p>
                    </div>
                </div>

                <div className='courses-right' style={course.bg && { backgroundColor: course.bg }}>
                    <a href={course.schoolUrl} target='_blank'>
                        <img src={`${course.schoolLogo}`} alt="" className='school-logo' />
                    </a>

                    <img
                        className='certification-img'
                        src={`${course.certicationImg}`}
                        alt=""
                    />

                    <div
                        className='course-validate'
                        style={{
                            ...(course.certificationUrl ? {} : { textDecoration: 'line-through' }),
                            ...(course.bg ? { color: course.color } : {})
                        }}
                    >
                        <p><b>Verificar validade:</b></p>

                        <a
                            style={course.bg && { color: course.color }}
                            className='certification-link'
                            href={course.certificationUrl}
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            Clique aqui <BsArrowReturnLeft />
                        </a>
                    </div>
                </div>

            </div>

            <div></div>
        </div>
    );
}
