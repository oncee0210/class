import { useState } from 'react'

export default function SignupStatePage () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const wEmail = (e) => {
    setEmail(e.target.value);
  }

  const wPassword = (e) => {
    setPassword(e.target.value);
  }

  const signUp = (e) => {
    console.log(email, password); //state 검사

    //Email에 @가 있는지
    if ( email.includes('@') === false ) {
      alert("이메일에 @를 포함시켜야 합니다.")
    }else{
      //Backend에 API 요청하기 (회원가입 api) -> 회원가입 검증 성공이면 아래 알림창 실행

      alert("회원가입을 축하합니다.")
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={wEmail} />
      비밀번호 : <input type="password" onChange={wPassword} />
      <button onClick={signUp}>회원가입</button>
    </>
  )
}