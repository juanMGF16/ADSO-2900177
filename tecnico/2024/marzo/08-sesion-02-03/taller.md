1.	Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

2.	Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

    -	La calificación de Matemáticas se obtiene de la siguiente manera:
        Examen 90%
        Promedio de tareas 10%
        En esta materia se pidió un total de tres tareas.
        
    -	La calificación de Física se obtiene de la siguiente manera:
        Examen 80%
        Promedio de tareas 20%
        En esta materia se pidió un total de dos tareas.
        
    -	La calificación de Química se obtiene de la siguiente manera:
        Examen 85%
        Promedio de tareas 15%
    En esta materia se pidió un promedio de tres tareas.

3. Leer un real e imprimir si el número es positivo o negativo.
4.	Leer un real e imprimir si el número es mayor a 200 o no.
5.	Leer un real e imprimir si el número está en el rango de 50 y 100.

## solución

- Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.
    ```
    INICIO
        DEFINIR inversion1, inversion2, inversion3, total COMO REAL
    
        inversion1 = 0.0
        inversion2 = 0.0
        inversion3 = 0.0
        total = 0.0

        ESCRIBA "Dijite la primera inversión: "
        LEA inversion1

        ESCRIBA "Dijite la segunda inversión: "
        LEA inversion2

        ESCRIBA "Dijite la tercera inversión: "
        LEA inversion3

        total = inversion1 + inversion2 + inversion3

        ESCRIBA "El total de la inversión es de: ",total

        ESCRIBA "El porcentaje de la primera inversión es de: ",(inversion1 * 100) / total,"%"
        ESCRIBA "El porcentaje de la segunda inversión es de: ",(inversion2 * 100) / total,"%"
        ESCRIBA "El porcentaje de la tercera inversión es de: ",(inversion3 * 100) / total,"%"
    FIN
    ```
    ```py
    inversion1 = 0.0
    inversion2 = 0.0
    inversion3 = 0.0
    total = 0.0
    
    inversion1 = float(input("Dijite la primera inversión: "))
    inversion2 = float(input("Dijite la segunda inversión: "))
    inversion3 = float(input("Dijite la tercera inversión: "))
    
    total = inversion1 + inversion2 + inversion3
    
    print("El total de la inversión es de: "+str(total))
    print("El porcentaje de la primera inversión es de: ",(inversion1 * 100)/total,"%")
    print("El porcentaje de la segunda inversión es de: ",(inversion2 * 100)/total,"%")
    print("El porcentaje de la tercera inversión es de: ",(inversion3 * 100)/total,"%")
    ```
