import React from 'react';

const studentName = 'Evaristo Boquet';
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux'];
const alerts = { m1: 'Aprobado', m2: 'En curso' };

export default function Bienvenido() {
	// el código de tu componente acá
	return (
		<>
			<div>
				<h1>Hola! Soy Henry!!!</h1>
				<h3>{studentName}</h3>
				<ul>
					{techSkills.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>
			</div>
		</>
	);
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
