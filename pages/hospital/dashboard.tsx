import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useCurrentHospitalResourcesQuery } from '../../graphql/generated'

import Layout from '../../components/Hospital/Layout'
import { useAuth } from '../../lib/auth'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    const { data, loading, error } = useCurrentHospitalResourcesQuery();

    useEffect(() => {
        const loadUser = () => {
            const isAuthenticated = localStorage.getItem('user')
            if (!isAuthenticated) router.replace('/hospital/login')
        }
        loadUser()
        setIsLoading(false)
    }, [])

    return isLoading ? (
        'Loading...'
    ) : (
        <Layout title="Dashboard">
            <h2 className="mb-2 font-bold">Resources</h2>
            {data?.currentHospitalResource &&
                <>
                    <div className="flex flex-wrap gap-8">
                        <div className="inline-flex flex-col flex-1 justify-center items-center p-4 w-48 h-32 bg-white rounded-lg shadow">
                            <p>Ventilators</p>
                            <p className="text-3xl">
                                <span>{data.currentHospitalResource.ventilatorAvailable}</span>/<span>{data.currentHospitalResource.ventilatorCapacity}</span>
                            </p>
                        </div>
                        <div className="inline-flex flex-col flex-1 justify-center items-center p-4 w-48 h-32 bg-white rounded-lg shadow">
                            <p>ICUs</p>
                            <p className="text-3xl">
                                <span>{data.currentHospitalResource.icuAvailable}</span>/<span>{data.currentHospitalResource.icuCapacity}</span>
                            </p>
                        </div>
                        <div className="inline-flex flex-col flex-1 justify-center items-center p-4 w-48 h-32 bg-white rounded-lg shadow">
                            <p>Beds</p>
                            <p className="text-3xl">
                                <span>{data.currentHospitalResource.bedAvailable}</span>/<span>{data.currentHospitalResource.bedCapacity}</span>
                            </p>
                        </div>
                    </div>
                    <hr className="border border-gray-100 mt-8" />
                </>
            }
            <div className="flex flex-wrap gap-8 my-8">
                <Link href="/hospital/patients/create">
                    <a className="p-4 inline-flex items-center justify-center text-xl h-32 bg-white rounded-lg shadow flex-1">
                        Admit New Patient
                    </a>
                </Link>
                <Link href="/hospital/patients/search">
                    <a className="p-4 inline-flex items-center justify-center text-xl h-32 bg-white rounded-lg shadow flex-1">
                        Search Patients
                    </a>
                </Link>
                <Link href="/hospital/patients/view">
                    <a className="p-4 inline-flex items-center justify-center text-xl h-32 bg-white rounded-lg shadow flex-1">
                        View Admitted Patients
                    </a>
                </Link>
            </div>
            <div className="flex flex-wrap gap-8 my-8">
                <Link href="/hospital/nearby">
                    <a className="p-4 inline-flex items-center justify-center text-xl h-32 bg-white rounded-lg shadow flex-1">
                        View Nearby Hospitals
                    </a>
                </Link>
                <Link href="/hospital/doctors">
                    <a className="p-4 inline-flex items-center justify-center text-xl h-32 bg-white rounded-lg shadow flex-1">
                        On Call Doctors
                    </a>
                </Link>
            </div>
        </Layout>
    )
}

export default Dashboard
