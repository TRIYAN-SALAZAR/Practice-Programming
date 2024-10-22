def count(string, passedKey):
    words = []
    words = string.split()
    
    Dict = {}
    
    for word in words:
        if word == passedKey:
            Dict[word] = words.count(passedKey)
    
    print('Total count: ', Dict)
    