- Ejercicio 1
```py
        msgError = "Error, su inversión no es válida."
        msgOk = "Su Inversión fue registrada con éxito."
        msgInput = "Digite la inversión de la persona "
        msgOutput = "El porcentaje de inversión de la persona  "

        p1 = float(input(msgInput + "1: "))
try:
    p1 = float(input(msgInput + "1: "))
    if p1 > 0:
        print(msgOk)
        p2 = float(input(msgInput + "2: "))
        if p2 > 0:        
            print(msgOk)
            p3 = float(input(msgInput + "3: "))
            if p3 > 0:
                print(msgOk)
                # Cuando el programa llega a este punto, es porque todas las inversiones son válidas.
                it = p1 + p2 + p3

                pp1 = (p1/it)*100
                pp2 = (p2/it)*100
                pp3 = (p3/it)*100

                #Salida 
                print(msgOutput + "1: " + str(pp1)+"%")
                print(msgOutput + "2: " + str(pp2)+"%")
                print(msgOutput + "3: " + str(pp3)+"%")
            else: 
                print(msgError)
        else: 
            print(msgError)

    else: 
        print(msgError)
except ValueError:
        print("El valor ingresado no es un número válido.")
```
- Ejercicio 2
```py
try:
    msgError = "Error, dato no válida."
    msgOk = "dato correcto, ok."
    msgInput = "Favor, indique la nota de la Evaluacion "
    msgInputT = "Favor, indique la nota de la Tarea "
    msgOutput = "El promedio de "
    msgg = "El promedio general es: "

    examenM = float(input(msgInput + "de Matematicas: "))
    if examenM >= 1.0 and examenM <= 5.0:
        print(msgOk)
        tM1 = float(input(msgInputT + "1: "))
        if tM1 >= 1.0 and examenM <= 5.0:
            print(msgOk)
            tM2 = float(input(msgInputT + "2: "))
            if tM2 >= 1.0 and examenM <= 5.0:
                print(msgOk)
                tM3 = float(input(msgInputT + "3: "))
                if tM3 >= 1.0 and examenM <= 5.0:
                    print(msgOk)
                    examenF = float(input(msgInput + "de Fisica: "))
                    if examenF >= 1.0 and examenM <= 5.0:
                        print(msgOk)
                        tF1 = float(input(msgInputT + "1: "))
                        if tF1 >= 1.0 and examenM <= 5.0:
                            print(msgOk)
                            tF2 = float(input(msgInputT + "2: "))
                            if tF2 >= 1.0 and examenM <= 5.0:
                                print(msgOk)
                                examenQ = float(input(msgInput + "de Quimica: "))
                                if examenQ >= 1.0 and examenM <= 5.0:
                                    print(msgOk)
                                    tQ1 = float(input(msgInputT + "1: "))
                                    if tQ1 >= 1.0 and examenM <= 5.0:
                                        print(msgOk)
                                        tQ2 = float(input(msgInputT + "2: "))
                                        if tQ2 >= 1.0 and examenM <= 5.0:
                                            print(msgOk)
                                            tQ3 = float(input(msgInputT + "3: "))
                                            if tQ3 >= 1.0 and examenM <= 5.0:
                                                print(msgOk)
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

                                                print(msgOutput + "Matematicas es de: "+str(promedioM))
                                                print(msgOutput + "Fisica es de: "+str(promedioF))
                                                print(msgOutput + "Quimica es de: "+str(promedioQ))
                                                print(msgg + str(promedioGeneral))
                                        else:
                                            print(msgError)    
                                    else:
                                        print(msgError)
                                else:
                                    print(msgError)
                            else:
                                print(msgError)    
                        else:
                            print(msgError)
                    else:
                        print(msgError)
                else:
                    print(msgError)
            else:
                print(msgError)
        else:
            print(msgError)
    else:
        print(msgError)
except:
    print(msgError)

```
- Ejercicio 3
```py
try:
    numero = float(input("Digite un número: "))

    if numero > 0:
        print("El número es positivo")
    else:
        print("El número es negativo")
except:
    print("Digitos no validos")
```
- Ejercicio 4
```py
try:
    numero = float(input("Digite un número: "))

    if numero > 200:
        print("El número es mayor a 200")
    else:
        print("El número es menor o igual a 200") 
except:
    print("Digitos no validos")
```
- Ejercicio 5
```py
try:
    numero = float(input("Digite un número: "))

    if numero >= 50 and numero <= 100 :
        print("El número esta en el rango de 50 y 100")
    else:
        print("El número no esta en el rango de 50 y 100")
except:
    print("Digitos no validos")
```
