set_of_string=["apple", "banana", "cherry", "watermelon", "kiwi"]
max_length=len(set_of_string[0])
for i in range(len(set_of_string)):
    if len(set_of_string[i])>max_length:
        max_length=len(set_of_string[i])
        longest_string=set_of_string[i]
print("The longest string in the array is:",longest_string)