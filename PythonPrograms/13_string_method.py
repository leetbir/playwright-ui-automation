string_sample = "Search,windows applications"

# string method 
# 1. split : Return a list of the substrings in the string, using sep as the separator string (list return type)

# split at space
sliced_string = string_sample.split(" ")
print(f"sliced string is {sliced_string} and type is {type(sliced_string)}")


# 2. find: return the index of the value in string , first occurence if there will be multiple occurence of value 

print(string_sample.find('a'))

