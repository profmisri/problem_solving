from collections import deque


def search(lines, pattern, history=5):
    pervious_lines = deque(maxlen=history)
    for line in lines:
        if pattern in line:
            yield line, pervious_lines
        pervious_lines.append(line)


if __name__ == '__main__':
    with open('/home/a/Projects/problem solving/groupAnagrams.py') as f:
        for line, prevlines in search(f, "python", 5):
            for pline in prevlines:
                print(pline, end="")
            print(line, end='')
            print("-"*20)
