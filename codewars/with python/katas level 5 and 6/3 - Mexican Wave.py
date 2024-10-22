def wave(people):
    wave = []
    for i in range(0, len(people)):
        string = ''
        for j, char in enumerate(people):
            
            if i == j:
                string += char.upper()
            else:
                string += char
            
            if j == len(people) - 1 and people[i] != ' ':
                wave.append(string)
        print(string)
    return wave

print(wave("gap"))