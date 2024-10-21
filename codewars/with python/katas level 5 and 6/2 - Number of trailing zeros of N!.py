# I CAN'T RESOLVE THIS PROBLEM, THOUGH IT'S A SOLUTION
# THIS SOLUTION ISN'T MINE
def zeros(n):
    pow_of_5 = 5
    zeros = 0
    
    while n >= pow_of_5:
        zeros += n // pow_of_5
        pow_of_5 *= 5
        
    return zeros