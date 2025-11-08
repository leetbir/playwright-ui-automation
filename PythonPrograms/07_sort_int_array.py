interger_array=[34, 12, 5, 67, 23, 89, 1]

def sort_integer_array(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
printed_array=sort_integer_array(interger_array)
print("Sorted integer array:", printed_array)