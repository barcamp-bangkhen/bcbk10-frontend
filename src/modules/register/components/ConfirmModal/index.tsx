import React from 'react'

import styled from 'styled-components'

import { ButtonGroup, PreviousButton, SubmitButton } from 'common/components/ButtonGroup'

const CloseButton = styled(PreviousButton)`
	margin: 1rem;
	width: 5rem;
`
const YesButton = styled(SubmitButton)`
	margin: 1rem;
	width: 5rem;
`

const Modal = styled.div`
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`

const ModalCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 1rem;
	width: 40vw;
	padding: 1rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

	@media screen and (max-width: 768px) {
		width: 80vw;
	}
`

const ConfirmModal = ({ open, onClose, onSubmit }) => {
	if (!open) return null
	return (
		<Modal>
			<ModalCard>
				<h1>Confirm</h1>
				<p>Are you sure?</p>
				<ButtonGroup>
					<CloseButton onClick={onClose}>Cancel</CloseButton>
					<YesButton onClick={onSubmit}>Yes</YesButton>
				</ButtonGroup>
			</ModalCard>
		</Modal>
	)
}

export default ConfirmModal
