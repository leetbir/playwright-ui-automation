# palindrome reverser and orginal is same
user_input = input("Enter a number or string:")


if type(user_input) == 'int':
    # convert number to string
    num_string = str(user_input)
else:
    # no action needed as input is already string
    num_string = user_input

reverse_num_string = num_string[::-1]

if user_input == reverse_num_string:
    print(f"{user_input} is a palindrome.")
else:
    print(f"{user_input} is not a palindrome.")
