## 1. Para crear un encabezado, agrega entre uno y seis símbolos # antes del encabezado del texto. 
```
 - # A first-level heading
 - ## A second-level heading
 - ### A third-level heading
```
- # A first-level heading
- ## A second-level heading
- ### A third-level heading

## 2. Estilos de texto
Puedes indicar énfasis con texto en negrita, cursiva, tachado, o de subíndice o superíndice en los campos de comentarios y archivos .md.

- Bold	  ** ** o __ __		**Esto es texto en negrita**.
- Cursiva	* * o _ _  	_Este texto está en cursiva_	
- Tachado	~~ ~~		  ~~Este texto está equivocado~~	
- Cursiva en negrita y anidada	** ** y _ _		**Este texto es extremadamente importante**	
- Todo en negrita y cursiva	*** ***		***Todo este texto es importante***	
- Subscript <sub> </sub>	This is a <sub>subscript</sub> text	Se trata de un texto de subíndice
- Superscript	<sup> </sup>	Ninguno	This is a <sup>superscript</sup> text	Se trata de un texto de superíndice

## 3. Entrecomillado de texto
Puede entrecomillar texto con >.

Text that is not a quote

> Text that is a quote

Al texto entre comillas se le ha aplicado sangría 

## 4. Imagenes
![hgjdfk gs](img/descarga.png)

## 5. Listas
Puedes crear una lista sin ordenar. Para ello, coloca -, * o + antes de una o más líneas de texto.
```
- George Washington
* John Adams
+ Thomas Jefferson
```
- George Washington
* John Adams
+ Thomas Jefferson

Para ordenar tu lista, antecede cada línea con un número.

1. James Madison
2. James Monroe
3. John Quincy Adams

Listas anidadas
Puedes crear una lista anidada al dejar sangría en uno o más elementos de la lista debajo de otro elemento.

Para crear una lista anidada Escribe los caracteres con espacio frente al elemento de la lista anidada hasta que el carácter del marcador de lista (- o *) se encuentre directamente debajo del primer carácter del texto en el elemento que se encuentra debajo.

1. First list item
   - First nested list item
     - Second nested list item


## 6. Listas de tareas
Para crear una lista de tareas, debe añadir como prefijo un guion y espacio, seguido de [ ] a los elementos de la lista. Para marcar una tarea como completada, use [x].
```
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
```
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

Si la descripción de un elemento de la lista de tareas comienza por un paréntesis, necesitará agregar el carácter de escape \:

```
- [ ] \(Optional) Open a followup issue
```

## 7. Usar emojis
Puedes agregar emoji a la escritura escribiendo :EMOJICODE:, dos puntos seguidos del nombre del emoji.
```
@octocat :+1: This PR looks great - it's ready to merge! :shipit:
```
@octocat :+1: This PR looks great - it's ready to merge! :shipit:

Escriba : mostrará una lista de emojis sugeridos. La lista se filtrará a medida que escriba, por lo que una vez que encuentre el emoji que está buscando, pulse Tab o Entrar para completar el resultado resaltado.

Para obtener una lista completa de los códigos y emoji disponibles, consulta la hoja de referencia rápida de los emoji.

## 8. Notas al pie
Puedes agregar notas al pie para tu contenido si utilizas esta sintaxis de corchetes:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].
```
```
[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
```
## 9. Código de cita
Puedes indicar un código o un comando dentro de un enunciado con comillas simples. El texto dentro de las comillas simples no será formateado. T
```
Use `git status` to list all new or modified files that haven't yet been committed.
```
Use `git status` to list all new or modified files that haven't yet been committed.

Para formatear código o texto en su propio bloque distintivo, usa comillas triples.

Some basic Git commands are:
```
git status
git add
git commit
```




