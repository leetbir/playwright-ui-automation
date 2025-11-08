def check_odd_even(number):
    if number % 2 == 0:
        return "even"
    else:
        return "odd"
    
user_input = int(input("Enter a number to check if it is odd or even:\n"))
result = check_odd_even(user_input)
print(f"{user_input} is an {result} number.")
12