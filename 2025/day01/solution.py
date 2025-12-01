from pathlib import Path

# get the current directory
current_dir = Path(__file__).parent

# get the input file
input_file = current_dir / "input.txt"

# read the input file
with open(input_file, "r") as file:
    input = file.read()
    
# parse the input
lines = input.split("\n")

# solve the problem
## variables
dialPosition = 50
numberOfTimesAtZero = 0
total_zeros = 0

def rotate_right(position, rotation):
    return (position + rotation) // 100

def rotate_left(position, rotation):
    if position == 0:
        return rotation // 100
    elif rotation >= position:
        return 1 + (rotation - position) // 100
    else:
        return 0

def rotateDial(rotateDirection, rotateAmount):
    global dialPosition
    global numberOfTimesAtZero
    global total_zeros

    if rotateDirection == "L":
        total_zeros += rotate_left(dialPosition, rotateAmount)
        dialPosition = (dialPosition - rotateAmount) % 100
    elif rotateDirection == "R":
        total_zeros += rotate_right(dialPosition, rotateAmount)
        dialPosition = (dialPosition + rotateAmount) % 100

    if dialPosition == 0:
        numberOfTimesAtZero += 1


def solve_part_1():
    for line in lines:
        rotateDirection = line[0]; # L or R
        rotateAmount = int(line[1:]); # amount to rotate
        rotateDial(rotateDirection, rotateAmount)

solve_part_1()

print("Part 1 solution: " + str(numberOfTimesAtZero)) 
print("Part 2 solution: " + str(total_zeros))


