# prime number

user_input = int(input("Enter a number to check if it is prime:\n"))


def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

result = is_prime(user_input)
if result:
    print(f"{user_input} is a prime number.")
else:
    print(f"{user_input} is not a prime number.")
