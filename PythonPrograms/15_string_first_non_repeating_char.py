# The get() method returns the value of the item with the specified key.
# keyname 	Required. The keyname of the item you want to return the value from
# value 	Optional. A value to return if the specified key does not exist.
# Default value None

s = "swiss"
freq={}

for character in s:
    print("Character is", character)
    freq[character]=freq.get(character,0) + 1
    print("Dictionary",freq)

print("final dictionary",freq)

for ch in s:
    if freq[ch]==1:
        print(f"occurence of {ch} character is single", freq[ch],"time", "so it will be first non repeating character")
        break
    else:
        print(f"occurence of {ch} character is repeating", freq[ch], "times")