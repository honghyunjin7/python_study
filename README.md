# python_study
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

