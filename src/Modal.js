import { forwardRef, useImperativeHandle, useState } from 'react';

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
	//Modal 자체적으로 자신을 열고 닫는 state값 생성
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});

	return (
		<>
			{Open && (
				<aside style={modalStyle}>
					<span style={btn} onClick={() => setOpen(false)}>
						close
					</span>
				</aside>
			)}
		</>
	);
});

export default Modal;
