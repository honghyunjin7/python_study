# Python_Study
# <왜 이게 이렇게 코드가 동작하는지 고민하고 이해하는데 시간 투자하기>
Input-Output

end=" "를 쓰는 이유는 문제의 출력 예시가 1 4 2 3처럼 한 줄에 공백으로 구분되어 나오게 하기 위함이다.

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

=Arrays-
파이썬에서의 배열은 list
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
    
#20

def solution(n):
    answer = []

    for i in range(1, n+1):

        if n % i == 0:
            answer.append(i)

    return answer
                
#21
def solution(array, height):
    tall_person = 0
    
    for i in array:
        if i > height:
            tall_person += 1

    return tall_person
            
    

#22

def solution(numbers, k):
    # 1. k번째 순서가 되려면, (k-1)번 만큼 이동해야 합니다.
    #    (첫 번째 사람은 이미 공을 갖고 시작하니까 0번 이동)
    # 2. 한 번 이동할 때마다 오른쪽으로 2칸씩(한 명 건너뛰기) 갑니다.
    index = (k - 1) * 2
    
    # 3. 계산된 위치가 사람 수(배열 길이)를 넘어가면 
    #    다시 앞쪽으로 돌아오게 나머지(%)를 구합니다.
    target_index = index % len(numbers)
    
    # 4. 그 위치에 있는 사람 번호를 반환합니다.
    return numbers[target_index]

#23

paper = [[0 for k in range(101)] for k in range(101)]

paper_amount = int(input())

for k in range(paper_amount):
    x, y = map(int, input().split())

    for i in range(x, x + 10):
        for j in range(y, y + 10):
            paper[i][j] = 1

total_area = 0
for row in paper:
    total_area += row.count(1)

print(total_area)

#24

def get_distance(x1, y1, x2, y2):
    squared_value = ((x2 - x1) ** 2) + ((y2- y1) ** 2)
    distance = squared_value ** 0.5

    return distance

x1, y1, x2, y2 = map(int, input().split())

result = get_distance(x1, y1, x2, y2)

if result.is_integer():
    print(int(result))

else:
    print(result)

#26

def factorial(N):
    if N == 0:
        return 1
    
    return N * factorial(N-1)

N = int(input())
print(factorial(N))

#27

def func(n):

    if n == 0:
        return 0
    elif n == 1:
        return 1

    return func(n-1) + func(n-2)

n = int(input())

print(func(n))

#28

def d(n):
  next_num = n + sum(map(int, str(n)))
  return next_num
  
generated_nums = set()
   set()을 변수에 대입하면 **"여러 개를 담을 수 있는 변수"**가 되는 건 맞지만, **리스트(List)**가 된 건 아니에요.
   set()는 중복된 값은 제거한다

for i in range(1, 10001):
  generated_nums.add(d(i))
    
  
for i in range(1, 10001):
    if i not in generated_nums:
        print(i)

#29

N = int(input())

def chat(k):
  under_bar = "____" * k
  
  print(under_bar + '"재귀함수가 뭔가요?"')
  
  if k == N:
    print(under_bar + '"재귀함수는 자기 자신을 호출하는 함수라네"')
    print(under_bar + "라고 답변하였지.")
    return
  
  print(under_bar + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.')
  print(under_bar + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.')
  print(under_bar + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."') 
  
  chat(k + 1)
  
  print(under_bar + "라고 답변하였지.")
  
# --- 프로그램 시작 ---  
print("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.")
chat(0)

  

#40 
sort()함수로 숫자 정렬하면 간단하다

n = int(input())
nums = []

for k in range(n):
  nums.append(int(input()))
  
nums.sort()

for num in nums:
  print(num)

#41

n = int(input())
words = []
for i in range(n):
    words.append(input())

words_set = set(words)
words = list(words_set)
words.sort() #알파벳 순으로 정렬
words.sort(key=len) # 길이 순으로 정렬

for word in words:
    print(word)

        

    


    
        
    

    

    



    


