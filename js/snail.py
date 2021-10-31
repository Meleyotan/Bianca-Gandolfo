distance = 7
slip_distance = 2
hole_depth = int(input("Depth of hole>>  "))
no_of_days = 0

hole_depth = hole_depth - 7
no_of_days = no_of_days + 1

print(hole_depth)

while True:
    if ((hole_depth > 0) and (hole_depth % 5 == 0)):
        hole_depth = hole_depth - 5
        no_of_days = no_of_days + 1
        print(hole_depth)
        print(no_of_days)
