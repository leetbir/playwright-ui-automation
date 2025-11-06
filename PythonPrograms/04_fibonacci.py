# fibbonaci series will be printed


user_input = int(input("Enter the number of terms you want in Fibonacci series: "))

def fibonacci(n):
    a,b = 0,1
    series = []
    for _ in range(n):
        series.append(a)
        a,b = b, a+b
    return series

result = fibonacci(user_input)
print("Fibonacci series:", result)