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

#14
x, y, z = map(int, input().split())
gold = 0

if (x == y and y == z and x == z):
    gold = 10000 + x * 1000

elif (x == y or x == z):
    gold = 1000 + x * 100

elif (y == z):
    gold = 1000 + y * 100
    
elif (x != y and y != z and x != z):
    gold = max(x, y, z) * 100

print(gold)

#15

1은 2cm, 2는 3cm, 0은 4cm를 차지
각 숫자 사이에 여백이 1cm 씩 2개
오른쪽, 왼쪽 경계에서 각각 여백이 1cm씩 차지

N = int(input())

while N != 0:
    
    space = 0
    S = str(N) #정수는 각 자릿수로 쪼갤 수 없기때문에 str함수 사용

    space = 2 + (len(S) - 1) # (양쪽 여백 2cm) + (숫자 사이 여백)
    
    for digit in S:
        if digit == '1':
            space = space + 2

        elif digit == '0':
            space = space + 4

        else:  # 2~9 
            space = space + 3

    print(space)

    N = int(input())
    
#16

N, Kim, Lim = map(int, input().split())
round = 0


while Kim != Lim:
    round = round + 1
    new_kim = (Kim + 1) // 2
    new_Lim = (Lim + 1) // 2

    Kim = new_kim
    Lim = new_Lim

print(round)

#17

blocks = int(input())

height = 1
total_blocks = 1
added_last_layer = 1  # A(1) = 1

while True:
    # A(h) 점화식 = A(h-1) + 4 * (h-1)
    # A(height + 1) = A(height) + 4 * height
    added_this_layer = added_last_layer + 4 * height
    
    if total_blocks + added_this_layer > blocks:
        break

    total_blocks = total_blocks + added_this_layer
    added_last_layer = added_this_layer  # 다음 루프를 위해 현재 층의 블록 수 저장
    height = height + 1

print(height)
    
#18

def solution(num_list):
    answer = [0, 0]

    for num in num_list:
        if num % 2 == 0:
            answer[0] += 1
        else:
            answer[1] += 1

    return answer

#19

def solution(cipher, code):
    answer = cipher[code-1::code]

    return answer
    
    



    

    

        

    


    
        
    

    

    



    


