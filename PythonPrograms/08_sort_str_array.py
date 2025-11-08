string_array = ["banana", "apple", "orange", "mango", "grape"]


def sort_string_array(arr):
    #length of the array
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
sorted_array = sort_string_array(string_array)
print("Sorted string array:", sorted_array)