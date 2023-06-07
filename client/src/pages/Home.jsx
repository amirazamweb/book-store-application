import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

const Home = () => {
    const [auth] = useAuth();
    return (
        <Layout title={'Home'}>
            <pre>{JSON.stringify(auth, "", 4)}</pre>
        </Layout>
    )
}

export default Home