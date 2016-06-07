import os

# for value in range( 0, 10 ):
# 	print value;

moreThenFive = (v for v in range( 0, 10 ) if v > 5)
for value in moreThenFive:
	print value;
