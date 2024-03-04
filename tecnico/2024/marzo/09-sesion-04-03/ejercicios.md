1. imprimir si una persona es mayor de edad o no.

##  solución 
```
INICIO

  DEFINIR edad como entero
  
  ESCRIBA"Digite su edad: "
  LEA edad
  
  SI edad >=18 ENTONCES
    ESCRIBA"Usted es mayor de edad"
  SI NO
    ESCRIBA"Usted es menor de edad"
  FIN SI

FIN
```
```py
edad = 0

edad = int(input("Digite su edad: "))

if edad >=18 :
    print("Usted es mayor de edad")
else:
    print("Usted es menor de edad")
```
