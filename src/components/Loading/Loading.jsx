import {SyncLoader} from "react-spinners";

export default function Loading() {
    return (
        <div className=" py-10 container mx-auto flex justify-center items-center h-[50vh]">
            <SyncLoader color="#2D3A4B" size="10" />
        </div>
    )
}