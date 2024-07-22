salarioM = 1300000

def sueldo(diasT,valorD):
    sueldoP = diasT * valorD
    return sueldoP

def subTrans(sueldo):
    sueldoP = sueldo
    if sueldoP <= salarioM:
        subTranss = 140000
    else:
        subTranss = 0
    return subTranss
def retencion(sueldo):
    sueldoP = sueldo
    if sueldoP >= salarioM*4:
        reten = sueldo * 0.04
    else:
        reten = 0
    return reten


def arl(sueldo):
    sueldoP = sueldo
    arlP = sueldoP * 0.052
    return arlP

def salud(sueldo):
    sueldoP = sueldo
    saludP = sueldoP * 0.12
    return saludP

def pension(sueldo):
    sueldoP = sueldo
    pensionP = sueldoP * 0.16
    return pensionP

def pagoT(sueldo):
    subsidio = subTrans(sueldo)
    retencionP = retencion(sueldo)
    arlP = arl(sueldo)
    saludP = salud(sueldo)
    pensionP = pension(sueldo)
    pagoTo = sueldo + subsidio - (arlP + pensionP + saludP + retencionP)
    return pagoTo

diasTrabjados = float(input("digite sus dias trabajados: "))
valorDia = float(input("digite el valor del dia: "))

suel = sueldo(diasTrabjados,valorDia)
sub = subTrans(suel)
rete = retencion(suel)
ar = arl(suel)
sal = salud(suel)
pen = pension(suel)
pagotota = pagoT(suel)

# print (f"Su sueldo es: ${suel} \n su sub es: ${sub} \n su pago total es: ${pagotota}")
print(f"Su sueldo es: ${suel}")
print(f"Su subsidio es: ${sub}")
print(f"Su retención es: ${rete}")
print(f"Su arl es: ${ar}")
print(f"Su salud es: ${sal}")
print(f"Su pension es: ${pen}")
print(f"Su pago total es: ${pagotota}")
