s = "swiss"
freq={}

for character in s:
    print("Character is", character)
    freq[character]=freq.get(character,0) + 1
    print("Dictionary",freq)

print("final dictionary",freq)

max=0
for value in freq.values():
    print(f"checking {value}")
    if value>max:
        print(f"{value} is greater than {max}")
        print("replacing max with new value")
        max=value
    else:
        print(f"{value} is not greater than {max}")
        print("so not swapping")

def get_keyname(dictionary,targetvalue):
    for k,v in freq.items():
        if v == max:
            return k
    return None

print("Answer: maximum occuring character is",get_keyname(freq,max), f"that is {max} times")