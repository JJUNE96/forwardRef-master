import { forwardRef, useImperativeHandle } from 'react';

const modalStyle = {
	width: 400,
	height: 300,
	background: '#222',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: 50,
	color: '#fff',
};
const btn = {
	color: 'orange',
	fontSize: 20,
	cursor: 'pointer',
};

//modal 컴포넌트 자체를 부모로 전달
const Modal = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => {
		return { name: 'David' };
	});

	return (
		<aside style={modalStyle} ref={ref}>
			<span style={btn}>close</span>
		</aside>
	);
});

export default Modal;
