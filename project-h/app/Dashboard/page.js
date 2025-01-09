import DashboardCard from "@/components/page/Dashboard/DashboardCard";
import "./page.css";

export default function Dashboard(){

    return (
        <div className="dashboard-wrapper">
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
        </div>
    );
}