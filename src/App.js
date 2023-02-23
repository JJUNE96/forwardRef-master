import Modal from './Modal';
import { useRef } from 'react';
function App() {
	const modal = useRef(null);
	const handleClick = () => {
		console.log(modal.current);
	};
	return (
		<div className='App'>
			<button onClick={handleClick}>open</button>
			<Modal ref={modal} />
		</div>
	);
}

export default App;

/*
JSX와는 다르게 컴포넌트를 useRef로 참조객체에 담을 수 없음
forwardRef로 자식 컴포넌트 특정 JSX요소를 참조객체에 담아 부모에 전달 할 수 있음(부모 컴포넌트에서 특정 컴포넌트를 참조가능)
useImperativeHandle: forwardRef참조 되어있는 컴포넌트 안에서 원하는 값을 객체 형태로 부모에 전달 가능
*/
