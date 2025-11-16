def count_characters(sample):
    dictionary_object={}
    count=0
    for i in range(len(sample)):
        character=sample[i]
        if character not in dictionary_object:
            print(character, "is not in dictionary")
            dictionary_object[character]=1
            print(dictionary_object)
        else:
            print(character, "is in dictionary")
            print("Value of character is",dictionary_object[character])
            dictionary_object[character]+=1
    return dictionary_object

sample="banana"
result=count_characters(sample)
print("count of each chracter in string is",result)
