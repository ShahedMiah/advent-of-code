from pathlib import Path

# get the current directory
current_dir = Path(__file__).parent

# get the input file
input_file = current_dir / "input.txt"

# read the input file
with open(input_file, "r") as file:
    input_data = file.read().strip()


def find_invalid_ids_in_range(start, end):
    """Find all invalid IDs in a range efficiently."""
    invalid_ids = []

    # Determine the digit lengths we need to check
    min_digits = len(str(start))
    max_digits = len(str(end))

    for total_digits in range(min_digits, max_digits + 1):
        # Only even total digits can be repeated patterns
        if total_digits % 2 != 0:
            continue

        half_digits = total_digits // 2

        # Generate all numbers with half_digits digits (no leading zeros)
        if half_digits == 1:
            half_start = 1
        else:
            half_start = 10 ** (half_digits - 1)
        half_end = 10 ** half_digits - 1

        for half_num in range(half_start, half_end + 1):
            # Create the repeated number
            repeated = int(str(half_num) * 2)
            if start <= repeated <= end:
                invalid_ids.append(repeated)

    return invalid_ids


# Parse the input - ranges separated by commas
ranges = input_data.split(",")

total_invalid_sum = 0
all_invalid_ids = []

for r in ranges:
    start, end = map(int, r.split("-"))
    invalid_ids = find_invalid_ids_in_range(start, end)
    all_invalid_ids.extend(invalid_ids)
    total_invalid_sum += sum(invalid_ids)

print("Part 1 solution:", total_invalid_sum)


def find_invalid_ids_in_range_part2(start, end):
    """Find all invalid IDs (sequence repeated at least twice) in a range."""
    invalid_ids = set()

    # Determine the digit lengths we need to check
    min_digits = len(str(start))
    max_digits = len(str(end))

    for total_digits in range(min_digits, max_digits + 1):
        # For each possible pattern length that divides total_digits
        # Pattern must repeat at least twice, so pattern_len <= total_digits // 2
        for pattern_len in range(1, total_digits // 2 + 1):
            if total_digits % pattern_len != 0:
                continue

            repetitions = total_digits // pattern_len
            if repetitions < 2:
                continue

            # Generate all patterns with pattern_len digits (no leading zeros)
            if pattern_len == 1:
                pattern_start = 1
            else:
                pattern_start = 10 ** (pattern_len - 1)
            pattern_end = 10 ** pattern_len - 1

            for pattern in range(pattern_start, pattern_end + 1):
                # Create the repeated number
                repeated = int(str(pattern) * repetitions)
                if start <= repeated <= end:
                    invalid_ids.add(repeated)

    return invalid_ids


# Part 2
total_invalid_sum_p2 = 0
all_invalid_ids_p2 = []

for r in ranges:
    start, end = map(int, r.split("-"))
    invalid_ids = find_invalid_ids_in_range_part2(start, end)
    all_invalid_ids_p2.extend(invalid_ids)
    total_invalid_sum_p2 += sum(invalid_ids)

print("Part 2 solution:", total_invalid_sum_p2)
