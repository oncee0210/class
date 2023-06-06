//보통 대문자로 만듬
import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) { #데이터타입 적는곳
    createBoard( #실제 전달할 (데이터)변수 적는곳
      writer: $writer,
      title: $title,
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;