import './Equipe.css';
import data from '../../chickenTab.json';
import Cards from './Cards';

function Equipe() {
  const teachers = data.chickenTab.filter(poulet => poulet.position === 'Teacher');
  const students = data.chickenTab.filter(poulet => poulet.position === 'Student');
  const dev = data.chickenTab.filter(poulet => poulet.position === 'Développeuse');
  


  return (
    <div className='container'>
      <h2>Equipe pédagogique</h2>
      <section className='chickensContainer'>
        {teachers.map((teacher) => (
          <Cards
            key={teacher.name}
            imgSrc={teacher.imgSrc}
            name={teacher.name}
            position={teacher.position}
            biography={teacher.biography}
          />
        ))}
      </section>
      <h2>Camarades</h2>
      <section className='chickensContainer'>
        {students.map((student) => (
          <Cards
            key={student.name}
            imgSrc={student.imgSrc}
            name={student.name}
            position={student.position}
            biography={student.biography}
          />
        ))}
      </section>
      <h2>Développeurs</h2>
      <section className='chickensContainer'>
        {dev.map((dev) => (
          <Cards
            key={dev.name}
            imgSrc={dev.imgSrc}
            name={dev.name}
            position={dev.position}
            biography={dev.biography}
          />
        ))}
      </section>
    </div>
  );
}

export default Equipe;
  
