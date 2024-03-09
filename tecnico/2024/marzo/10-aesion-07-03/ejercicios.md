- 1
```py
numero = 0.0

while numero == 0:
    try:
        numero = float(input("digite un número: "))
        if numero % 2==0:
           print("el número es par")
        else:
           print("el número es impar")
    except:
        print("Digito no valido, solo se aceptan números")
        numero = 0
```

- 2
```py

try: 
    numero = float(input("digite un número: "))
    if numero % 2==0:
        print("el número es par")  
    else:
        print("el número es impar")  
    if numero > 0 :
        print("el numero es positivo")
    else:
        print("el numero es negativo") 
except:
    print("Digito no valido, solo se aceptan números")   
```
   
- 3
```py
try: 
    n1 = float(input("digite el primer número: "))
    n2 = float(input("digite el segundo número: "))
    
    if n2 <0 and n1 % 2 != 0: 
        if n1 > n2:
            print(n1,"," ,n2)
        else:
            print(n2,",",n1)
    else:
        if n1 > n2:
            print(n2,",",n1)
        else:
            print(n1,",",n2)
except:
    print("Digito no valido, solo se aceptan números")   

```
- 4
```py
try:
    n1 = float(input("digite el primer número: "))
    n2 = float(input("digite el segundo número: "))
    n3 = float(input("digite el tercer número: "))

    if n1 > n2 and n1 > n3:
        print ("el número ",n1," es mayor")
        if n2 > n3:
            print("el número ",n2," es el intermedio")
            if n2 < n3:
                 print("el numero ",n2," es el menor")   
            else:
                print("el número ",n3," es menor")
        else:
            print("el número ",n3," es el intermedio")
    else:
        if n2 > n1 and n2 > n3:
            print ("el número ",n2," es mayor")
            if n1 > n3:
                print("el número ",n1," es el intermedio")
                if n1 < n3:
                    print("el número ",n1," es el menor")   
                else:
                    print("el número ",n3," es menor")
            else:
                print("el número ",n3," es el intermedio")
        else:
            if n3 > n1 and n3 > n1:
                print ("el número ",n3," es mayor")
                if n1 > n2:
                    print("el número ",n1," es el intermedio")
                    if n1 < n2:
                        print("el número ",n1," es el menor")   
                    else:
                        print("el número ",n2," es menor")
                else:
                    print("el número ",n2," es el intermedio")
            else:
                if (n1 == n2 == n3):
                    print("digitos no validos para hacer el proceso")
except:
    print("Digito no valido, solo se aceptan números")   
```
