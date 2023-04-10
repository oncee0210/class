import { gql, useMutation } from '@apollo/client'
import { useState } from 'react';

//보통 대문자로 만듬
const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { #데이터타입 적는곳
    createProduct( #실제 전달할 (데이터)변수 적는곳
      seller: $seller,
      createProductInput: $createProductInput
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [seller, setSeller] = useState("");
  const [prdName, setPrdName] = useState("");
  const [prdExpl, setPrdExpl] = useState("");
  const [prdPrice, setPrdPrice] = useState(0);

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }
  const onChangePrdName = (event) => {
    setPrdName(event.target.value)
  }
  const onChangePrdExpl = (event) => {
    setPrdExpl(event.target.value)
  }
  const onChangePrdPrice = (event) => {
    setPrdPrice(event.target.value)
  }

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: prdName,
          detail: prdExpl,
          price: parseInt(prdPrice)
        }
      }
    })
    console.log(result)
    alert(result.data.createProduct.message)
  }

  return (
    <>
      <div>
        <label>판매자</label>
        <input type="text" onChange={onChangeSeller} />
      </div>
      <div>
        <label>제품명</label>
        <input type="text" onChange={onChangePrdName} />
      </div>
      <div>
        <label>제품설명</label>
        <input type="text" onChange={onChangePrdExpl} />
      </div>
      <div>
        <label>가격</label>
        <input type="text" onChange={onChangePrdPrice} />
      </div>
      <button onClick={onClickSubmit}>등록</button>
    </>
  )
}