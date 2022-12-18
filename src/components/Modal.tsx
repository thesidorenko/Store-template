interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

export const Modal = (props: ModalProps) => {
    return (
        <div className='fixed bg-black/50 inset-0 text-right'>
            <div className='w-[500px] p-5 rounded bg-white absolute left-1/2 top-1/4 -translate-x-1/2'>
            <button onClick={props.onClose}>&#10060;</button>
            <p className='text-center'>{props.title}</p>
            { props.children }
            </div>
        </div>
    )
}