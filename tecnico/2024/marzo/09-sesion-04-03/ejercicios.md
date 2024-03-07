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
```

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
