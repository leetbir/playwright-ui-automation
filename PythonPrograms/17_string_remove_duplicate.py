string="apple"
result =""

for ch in string:
    if ch not in result:
        result = result +ch
    else:
        print(f"{ch} already in string")
print(result)
