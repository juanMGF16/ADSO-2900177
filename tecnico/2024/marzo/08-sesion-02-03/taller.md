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

        ESCRIBA "Digite la primera inversión: "
        LEA inversion1

        ESCRIBA "Digite la segunda inversión: "
        LEA inversion2

        ESCRIBA "Digite la tercera inversión: "
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
    
    inversion1 = float(input("Digite la primera inversión: "))
    inversion2 = float(input("Digite la segunda inversión: "))
    inversion3 = float(input("Digite la tercera inversión: "))
    
    total = inversion1 + inversion2 + inversion3
    
    print("El total de la inversión es de: "+str(total))
    print("El porcentaje de la primera inversión es de: ",(inversion1 * 100)/total,"%")
    print("El porcentaje de la segunda inversión es de: ",(inversion2 * 100)/total,"%")
    print("El porcentaje de la tercera inversión es de: ",(inversion3 * 100)/total,"%")
    ```
- Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas.

    ```
    INICIO
        DEFINIR promedioGeneral, promedioM, promedioF, promedioQ, examenM, examenF, examenQ,
        tareasM, tareasF, tareasQ, tM1, tM2, tM3, tF1, tF2, tQ1, tQ2, tQ3, porcientoTM,
        porcientoEM, porcientoTF, porcientoEF, porcientoTQ, porcientoEQ COMO REAL
    
        promedioGeneral = 0.0
        promedioM = 0.0
        promedioF = 0.0
        promedioQ = 0.0
        examenM = 0.0
        examenF = 0.0
        examenQ = 0.0
        tareasM = 0.0
        tareasF = 0.0
        tareasQ = 0.0
        tM1 = 0.0
        tM2 = 0.0
        tM3 = 0.0
        tF1 = 0.0
        tF2 = 0.0
        tQ1 = 0.0
        tQ2 = 0.0
        tQ3 = 0.0
        porcientoTM = 0.0
        porcientoEM = 0.0
        porcientoTF = 0.0
        porcientoEF = 0.0
        porcientoTQ = 0.0
        porcientoEQ = 0.0

        ESCRIBA"Digite la calificación de su examen de matematicas: "
        LEA examenM
        ESCRIBA"Digite la calificación de su primera tarea de matematicas: "
        LEA tM1
        ESCRIBA"Digite la calificación de su segunda tarea de matematicas: "
        LEA tM2
        ESCRIBA"Digite la calificación de su tercera tarea de matematicas: "
        LEA tM3

        ESCRIBA"Digite la calificación de su examen de fisica: "
        LEA examenF
        ESCRIBA"Digite la calificación de su primera tarea de fisica: "
        LEA tF1
        ESCRIBA"Digite la calificación de su segunda tarea de fisica: "
        LEA tF2
    
        ESCRIBA"Digite la calificación de su examen de quimica: "
        LEA examenQ
        ESCRIBA"Digite la calificación de su primera tarea de quimica: "
        LEA tQ1
        ESCRIBA"Digite la calificación de su segunda tarea de quimica: "
        LEA tQ2
        ESCRIBA"Digite la calificación de su tercera tarea de quimica: "
        LEA tQ3
        tareasM = (tM1 + tM2 + tM3) / 3
        porcientoEM = (examenM * 90) / 100
        porcientoTM = (tareasM * 10 ) / 100
        promedioM = (porcientoEM + porcientoTM )
        
        tareasF = (tF1 + tF2) / 2
        porcientoEF = (examenF * 80) / 100
        porcientoTF = (tareasF * 20) / 100
        promedioF = (porcientoEF + porcientoTF)
        
        tareasQ = (tQ1 + tQ2 + tQ3) / 3
        porcientoEQ = (examenQ * 85) / 100
        porcientoTQ = (tareasQ * 15) / 100
        promedioQ = (porcientoEQ + porcientoTQ)
            
        promedioGeneral = (promedioM + promedioF + promedioQ) / 3
    
        ESCRIBA"El promedio de la materia de matematicas es de: ",promedioM
        ESCRIBA"El promedio de la materia de fisica es de: ",promedioF
        ESCRIBA"El promedio de la materia de quimica es de: ",promedioQ
        ESCRIBA""El promedio general de las materias:  ",promedioGeneral
    FIN
    ```
    ```py
    promedioGeneral = 0.0
    promedioM = 0.0
    promedioF = 0.0
    promedioQ = 0.0
    examenM = 0.0
    examenF = 0.0
    examenQ = 0.0
    tareasM = 0.0
    tareasF = 0.0
    tareasQ = 0.0
    tM1 = 0.0
    tM2 = 0.0
    tM3 = 0.0
    tF1 = 0.0
    tF2 = 0.0
    tQ1 = 0.0
    tQ2 = 0.0
    tQ3 = 0.0
    porcientoTM = 0.0
    porcientoEM = 0.0
    porcientoTF = 0.0
    porcientoEF = 0.0
    porcientoTQ = 0.0
    porcientoEQ = 0.0
    
    examenM = float(input("Digite la calificación de su examen de matematicas: "))
    tM1 = float(input("Digite la calificación de su primera tarea de matematicas: "))
    tM2 = float(input("Digite la calificación de su segunda tarea de matematicas: "))
    tM3 = float(input("Digite la calificación de su tercera tarea de matematicas: "))
    
    examenF = float(input("Digite la calificación de su examen de fisica: "))
    tF1 = float(input("Digite la calificación de su primera tarea de fisica: "))
    tF2 = float(input("Digite la calificación de su segunda tarea de fisica: "))
    
    examenQ = float(input("Digite la calificación de su examen de quimica: "))
    tQ1 = float(input("Digite la calificación de su primera tarea de quimica: "))
    tQ2 = float(input("Digite la calificación de su segunda tarea de quimica: "))
    tQ3 = float(input("Digite la calificación de su tercera tarea de quimica: "))
    
    tareasM = (tM1 + tM2 + tM3) / 3
    porcientoEM = (examenM * 90) / 100
    porcientoTM = (tareasM * 10 ) / 100
    promedioM = (porcientoEM + porcientoTM )
    
    tareasF = (tF1 + tF2) / 2
    porcientoEF = (examenF * 80) / 100
    porcientoTF = (tareasF * 20) / 100
    promedioF = (porcientoEF + porcientoTF)
    
    tareasQ = (tQ1 + tQ2 + tQ3) / 3
    porcientoEQ = (examenQ * 85) / 100
    porcientoTQ = (tareasQ * 15) / 100
    promedioQ = (porcientoEQ + porcientoTQ)
        
    promedioGeneral = (promedioM + promedioF + promedioQ) / 3
    
    print("El promedio de la materia de matematicas es de: "+str(promedioM))
    print("El promedio de la materia de fisica es de: "+str(promedioF))
    print("El promedio de la materia de quimica es de: "+str(promedioQ))
    print("El promedio general de las materias: "+str(promedioGeneral))
    ```
- Leer un real e imprimir si el número es positivo o negativo.
    ```
    INICIO
        DEFINIR numero COMO REAL
        
        numero = 0.0
        
        ESCRIBA"Digite un número: "
        LEA numero
    
        SI numero > 0 ENTONCES
            ESCEIBA"El número es positivo"
        SI NO
            ESCRIBA"El número es negativo"
        FIN SI
    FIN
    ```
    ```py
    numero = 0.0

    numero = float(input("Digite un número: "))
    
    if numero > 0:
        print("El número es positivo")
    else:
        print("El número es negativo")
    ```
- Leer un real e imprimir si el número es mayor a 200 o no.
    ```
    INICIO
        DEFINIR numero COMO REAL
        
        numero = 0.0
        
        ESCRIBA"Digite un número: "
        LEA numero
    
        SI numero > 200 ENTONCES
            ESCEIBA"El número es mayor a 200"
        SI NO
            ESCRIBA"El número es menor o igual a 200"
        FIN SI
    FIN
    ```
    ```py
    numero = 0.0

    numero = float(input("Digite un número: "))
    
    if numero > 200:
        print("El número es mayor a 200")
    else:
        print("El número es menor o igual a 200")    
    ```
- Leer un real e imprimir si el número está en el rango de 50 y 100.
     ```
    INICIO
        DEFINIR numero COMO REAL
        
        numero = 0.0
        
        ESCRIBA"Digite un número: "
        LEA numero
    
        SI  numero >= 50 Y numero <= 100 ENTONCES
            ESCEIBA"El número esta en el rango de 50 y 100"
        SI NO
            ESCRIBA"El número no esta en el rango de 50 y 100"
        FIN SI
    FIN
    ```
    ```py
    numero = 0.0

    numero = float(input("Digite un número: "))
    
    if numero >= 50 and numero <= 100 :
        print("El número esta en el rango de 50 y 100")
    else:
        print("El número no esta en el rango de 50 y 100")
    ```
