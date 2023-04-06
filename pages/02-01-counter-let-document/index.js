export default function CounterLetDocumentPage () {
  let count = 0;

  function plusCount () {
    count += 1;

    document.getElementById('number').innerHTML = count;
  }

  function minusCount () {
    count -= 1;

    document.getElementById('number').innerHTML = count;
  }

  return (
    <>
    <span id="number">{count}</span>
    <button onClick={plusCount}>증가</button>
    <button onClick={minusCount}>감소</button>
    </>
  )
}