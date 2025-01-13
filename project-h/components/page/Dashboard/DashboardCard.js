import Link from "next/link"

export default function DashboardCard(props){
    return (
        <Link className="dashboard-card-outline" href={`${props.href}`}>
            <p className="dashboard-card-text">
                {props.text}
            </p>
        </Link>
    )
}