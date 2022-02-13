import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useCurrentHospitalResourcesQuery } from '../../graphql/generated'

import Layout from '../../components/Hospital/Layout'
import { useAuth } from '../../lib/auth'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const { data, loading, error } = useCurrentHospitalResourcesQuery()

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
      {data?.currentHospitalResource && (
        <>
          <div className="flex flex-wrap gap-8">
            <div className="inline-flex h-32 w-48 flex-1 flex-col items-center justify-center rounded-lg bg-white p-4 shadow">
              <p>Ventilators</p>
              <p className="text-3xl">
                <span>{data.currentHospitalResource.ventilatorAvailable}</span>/
                <span>{data.currentHospitalResource.ventilatorCapacity}</span>
              </p>
            </div>
            <div className="inline-flex h-32 w-48 flex-1 flex-col items-center justify-center rounded-lg bg-white p-4 shadow">
              <p>ICUs</p>
              <p className="text-3xl">
                <span>{data.currentHospitalResource.icuAvailable}</span>/
                <span>{data.currentHospitalResource.icuCapacity}</span>
              </p>
            </div>
            <div className="inline-flex h-32 w-48 flex-1 flex-col items-center justify-center rounded-lg bg-white p-4 shadow">
              <p>Beds</p>
              <p className="text-3xl">
                <span>{data.currentHospitalResource.bedAvailable}</span>/
                <span>{data.currentHospitalResource.bedCapacity}</span>
              </p>
            </div>
          </div>
          <hr className="mt-8 border border-gray-100" />
        </>
      )}
      <div className="my-8 flex flex-wrap gap-8">
        <Link href="/hospital/patients/create">
          <a className="inline-flex h-32 flex-1 items-center justify-center rounded-lg bg-white p-4 text-xl shadow">
            Admit New Patient
          </a>
        </Link>
        <Link href="/hospital/patients/search">
          <a className="inline-flex h-32 flex-1 items-center justify-center rounded-lg bg-white p-4 text-xl shadow">
            Search Patients
          </a>
        </Link>
        <Link href="/hospital/patients/view">
          <a className="inline-flex h-32 flex-1 items-center justify-center rounded-lg bg-white p-4 text-xl shadow">
            View Admitted Patients
          </a>
        </Link>
      </div>
      <div className="my-8 flex flex-wrap gap-8">
        <Link href="/hospital/nearby">
          <a className="inline-flex h-32 flex-1 items-center justify-center rounded-lg bg-white p-4 text-xl shadow">
            View Nearby Hospitals
          </a>
        </Link>
        <Link href="/hospital/doctors">
          <a className="inline-flex h-32 flex-1 items-center justify-center rounded-lg bg-white p-4 text-xl shadow">
            On Call Doctors
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Dashboard
