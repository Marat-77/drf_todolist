import requests

my_url = '127.0.0.1'
my_port = '8088'
my_path = 'api-token'
test_user = 'apideveloper'
test_psw = 'admin'

response = requests.post(f'http://{my_url}:{my_port}/{my_path}/',
                         data={
                             'username': test_user,
                             'password': test_psw
                         })
print(response.status_code)
print(response.json())
print(response.text)
