# test driver bottom up / bottom ready up not ready down
# temporary calls a lower level function

# test stub top down / top ready down not ready up



def calculate_bill(amount):
    tax = get_tax(amount)  # Stub will be used
    return amount + tax

# --- STUB ---
def get_tax(amount):
    return 10  # stub value to mimic tax logic

# Test
print(calculate_bill(100))  # Output: 110


# now opposite will be calculate_bill is not ready yet but get_tax is ready
