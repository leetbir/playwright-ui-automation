string="apple fruit"

new_string = string.split(" ")  # This line has no effect
print(new_string)

for word in new_string:
    reversed_word = word[::-1]
    reversed_stirng =" ".join(reversed_word)
    print(reversed_stirng, end=" ")