# URI

> uniform resource identifier

### URI

> URI는 locator, name 또는 둘 다 추가로 분류될 수 있다.

- resource: 자원, URI로 식별할 수 있는 모든 것 (제한 없음)
- identifier: 식별자

### URL

> 리소스 로케이터
> scheme://[userinfo@]host[:port][/path][?query][#fragment]

- scheme: 프로토콜
- userinfo: 거의 사용하지 않음
- host: 호스트명, ip주소를 직접 입력 가능
- port: 생략 가능, http: 80포트, https: 443포트
- path: 리로스가 있는 경로, 계층적 구조를 가짐
- query: key-value 형태, 웹 서버에 제공하는 파라미터, 문자 형태
- fragment: 서버에 전송하는 정보는 아니다. html 내부 북마크에 사용

### URN

> 리소스 네임

# 웹 브라우저 요청 흐름

- DNS 서버를 조회한다.
- 그래서 IP를 찾고, HTTP 요청 메세지를 생성한다.
- 브라우저 소켓 통신을 통해서 TCP/IP 패킷을 생성해서 서버에 보낸다.
- 서버가 해당 요청 메세지를 확인해서 해당 요청에 대한 HTTP 응답 메세지를 보낸다.
- 그럼 클라이언트가 응답 메세지를 열어서 HTML를 렌더링을 하는 것.
