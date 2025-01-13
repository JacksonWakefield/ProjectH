import DashboardCard from "@/components/page/dashboard/DashboardCard";
import "./page.css";

export default function Dashboard(){

    return (
        <div className="dashboard-wrapper">
            <DashboardCard text="Recipes" href="/dashboard/recipes"></DashboardCard>
            <DashboardCard text="Grocery Lists" href="/dashboard/grocery-lists"></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
        </div>
    );
}