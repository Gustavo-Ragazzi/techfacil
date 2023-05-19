export default function BlockingLayer(props: any) {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50 z-40" onClick={props.handleSidebar}></div>
    )
}