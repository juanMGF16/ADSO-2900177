- 1.
```py
# numero = 0.0

# while numero == 0:
#     try:
#         numero = float(input("digite un número: "))
#         if numero % 2==0:
#             print("el número es par")
#         else:
#             print("el número es impar")
#     except:
#         print("Digito no valido, solo se aceptan números")
#         numero = 0
```

- 2.
```py
# try: 
#     numero = float(input("digite un número: "))
#     if numero % 2==0:
#         print("el número es par")  
#     else:
#         print("el número es impar")  
#     if numero > 0 :
#         print("el numero es positivo")
#     else:
#         print("el numero es negativo") 
# except:
#     print("Digito no valido, solo se aceptan números")   
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
