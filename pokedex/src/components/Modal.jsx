import ReactDom from 'react-dom'

export default function Modal(props) {
  const { children, handlCloseModal  } = props
  return ReactDom.createPortal(
    <div className='modal-container'>
      <button onClick={handlCloseModal} className='modal-anderlay' />
      <div className='modal-content'>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}