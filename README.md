# Python_Study
Input-Output

split함수를 쓰는 이유는 input함수가 한 줄 통째로 문자열로 받아들이기 때문에 공백을 기준으로 리스트를 만들어 문자열을 쪼개주는 역할이 필요하기 때문이다.

map함수를 쓰는 이유는 분리된 각각의 문자열들을 원하는 타입으로 바꿔주기 위한 역할이다.

#1
a, b = map(int, input().split())
print(f'a = {a}')
print(f'b = {b}')

#2
a, b = map(int, input().split())
print(f'{a} + {b} = {a+b}')

#3
str, n = input().split()
print(str*int(n))

#4
str1, str2 = input().split()
print(str1+str2)

#5
N = int(input())
for k in range(1, N+1):
    print(k*"*")

-Operator-

#6
a, b = map(int, input().split())

print(a+b)
print(a-b)
print(a*b)
print(a//b)
print(a%b)

#7
ef solution(num1, num2):
    answer = num1//num2
    return answer

#8
def solution(n_str):
    return int(n_str)

#9
def solution(n, k):
    result = 12000 * n + 2000 * k - n // 10 * 2000

    return result

#10
def solution(slice, n):
    if n%slice == 0:
        return n//slice
    else:
        return n//slice + 1

#11
a, b = map(int, input().split())

a_x = (a-1) % 4
a_y = (a-1) // 4

b_x = (b-1) % 4
b_y = (b-1) // 4

distance = abs((a_x - b_x)) + abs((a_y - b_y))

print(distance)

-Control+Statements-
else는 100% 선택 사항이라 안 써도 아무 문제 없다.
else는 "위의 if나 elif 조건에 하나도 해당하지 않는 모든 나머지 경우"를 의미할 때만 쓰는 것

#12
def solution(num1, num2):
    if num1 == num2:
        return 1
    else:  # '같지 않은 나머지 모든 경우'라는 뜻
        return -1

def solution(num1, num2):

    if num1 == num2:
        return 1

    elif num1 != num2:
        return  -1

#13
def solution(angle):
    if (0 < angle < 90):
        return 1

    elif(angle == 90):
        return 2

    elif (90 < angle < 180):
        return 3

    elif (angle == 180):
        return 4


    


