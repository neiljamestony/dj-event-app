import { useRouter } from 'next/router'
export default function EventPage(){
    const router = useRouter()
    return(
        <div>
            <h1>MY EVENT</h1>
            <p>{ router.query.slug }</p>
        </div>
    )
}