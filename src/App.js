import Modal from './Modal';
import { useRef } from 'react';

function App() {
	//자식 컴포넌트로부터 전달받을 모달 여는 함수가 담길 참조객체 생성
	const openFunc = useRef(null);

	const handleClick = () => {
		//console.log(openFunc.current);
		//openFunc.current객체안의 open키값에 담겨있는 함수 호출
		openFunc.current.open();
	};
	return (
		<div className='App'>
			<button onClick={handleClick}>open</button>
			{/* Modal 컴포넌트에서forwardRef-useImperativeHandle이 객체 형태로 전달해주는 modal여는 함수를 참조 */}
			<Modal ref={openFunc} />
		</div>
	);
}

export default App;

/*
JSX와는 다르게 컴포넌트를 useRef로 참조객체에 담을 수 없음
forwardRef로 자식 컴포넌트 특정 JSX요소를 참조객체에 담아 부모에 전달 할 수 있음(부모 컴포넌트에서 특정 컴포넌트를 참조가능)
useImperativeHandle: forwardRef참조 되어있는 컴포넌트 안에서 원하는 값을 객체 형태로 부모에 전달 가능
*/
