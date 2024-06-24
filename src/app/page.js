import Profile from "@/app/components/Profile";
import TripManager from "@/app/components/TripManager";
import Layout from "@/app/layout";

export default function Home() {
    return (
        <Layout>
            <TripManager />
            <Profile />
        </Layout>
    );
}
