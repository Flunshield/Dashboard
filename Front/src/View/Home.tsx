import Layout from "../Composants/Layout";

export default function Home() {
    return (
        <Layout>
            <div className=" flex">
                <h1>Doctolib</h1>
                <iframe src="https://www.doctolib.com" title="Doctolib"></iframe>
            </div>
        </Layout>
    )
}