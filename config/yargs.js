const argv = require('yargs')
	.command('crear', 'Crear un elemento por hacer', {
		descripcion: {
			demand: true,
			alias: 'd',
			desc: 'Descripción de la tarea por hacer',
		},
	})
	.command(
		'actualizar',
		'Actualizar el estado completado de una tarea',
		{
			descripcion: {
				demand: true,
				alias: 'd',
				desc: 'Descripción de la actualización de la tarea',
			},
			completado: {
				default: true,
				alias: 'c',
				desc: 'Marca como completado o pendiente la tarea',
			},
		}
	)
	.command('borrar', 'Borrar una tarea', {
		descripcion: {
			demand: true,
			alias: 'd',
			desc: 'Descripción de la tarea por eliminar',
		},
	})
	.help().argv

module.exports = {
	argv,
}
