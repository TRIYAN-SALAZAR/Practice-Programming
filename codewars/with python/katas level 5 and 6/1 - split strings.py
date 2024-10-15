def solution(s):
    splits = []
    st = ''
    for i, char in enumerate(s):
        if i % 2 != 1:
            if(len(s) - 1 == i):
                st = char
            else:
                st = char + s[i + 1]
            splits.append(st)
    
    if len(s) % 2 == 1:
        splits[-1] = splits[-1] + '_'
    return splits