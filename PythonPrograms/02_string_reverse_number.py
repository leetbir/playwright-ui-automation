# getting number from input Method 1

"""
user_input = int(input("Enter a number:"))
# convert number to string
num_string = str(user_input)
reverse_num_string = num_string[::-1]
reversed_number = int(reverse_num_string)
# print the reversed number
print("The orginal number is:", user_input, "\nThe reversed number is:", reversed_number, end="")
"""

# getting number from input Method 2

user_input = int(input("Enter a number:"))
stored_user_input = user_input
reversed_number = 0

while user_input > 0:
    remainder = user_input % 10
    reversed_number = (reversed_number * 10) + remainder
    user_input = user_input // 10

print("The orginal number is:", stored_user_input, "\nThe reversed number is:", reversed_number, end="")
