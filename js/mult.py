array = []


def retMultiples():
    # enter number of multiples
    n = int(input(("How many multiples?")))
    # enter the value of array
    while True:
        arr = input("Enter your array, type done to finish")
        if arr == "done":
            break
        array.append(arr)
    print(array)
    # loop through array and multiply in range
    for numb in array:
        for x in range(1, n+1):
            print(numb, ":", int(x)*int(numb))


retMultiples()

yes = map(retMultiples(), array)

print(yes)
