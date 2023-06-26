_t1 = range(1,9)
_t2 = []
_t3 = []
def solve(disk , source, dest, aux):
 	if disk >= 1:
 		solve(disk-1, source, aux, dest)
 		dest.append(source.pop())
 		solve(disk-1, aux, dest, source)
 	else:
 		return;

print len(_t1)
solve(len(_t1), _t1, _t3, _t2)
print _t3