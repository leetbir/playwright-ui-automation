
import string

abcd=string.ascii_lowercase
vowels='aeiou'
consonants = ""     # initialize empty string

for ch in abcd:
    if ch in vowels:
        print(f"{ch} is a vowels not adding ❌")
    else:
        print(f"{ch} not vowels so adding✅")
        consonants += ch 

print(f"consonants is {consonants}")

sting = "apple"
vowelsCount=0
consonantsCount=0
for ch in sting:
    if ch in vowels:
        vowelsCount = vowelsCount+1
    else:
        consonantsCount= consonantsCount+1

print(f"total vowels is {vowelsCount} and consonants is {consonantsCount}")