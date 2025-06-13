# Suma de los primeros n números de Fibonacci usando un ciclo for
n = 10  # Puedes cambiar este valor para sumar más o menos términos
a, b = 0, 1
suma = 0

for _ in range(n):
    suma += a
    a, b = b, a + b

print(f"La suma de los primeros {n} números de Fibonacci es: {suma}")