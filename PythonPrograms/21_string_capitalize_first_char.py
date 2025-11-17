stings = "hello world from python"

#split by space
splited = stings.split(" ")


for i in range(len(splited)):
    splited[i]=splited[i].capitalize()

print(splited)

result = " ".join(splited)
print(result)


# method 2
stingss = "hello world from python"
results = stingss.title()
print(results)