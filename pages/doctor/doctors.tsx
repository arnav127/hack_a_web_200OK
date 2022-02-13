import Link from 'next/link'
import Layout from '../../components/Doctor/Layout'

import { useAllDoctorsQuery } from '../../graphql/generated'

const Dashboard = () => {
  const { data, loading, error } = useAllDoctorsQuery()
  const styles = {
    colHead:
      'px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left',
    rowHead:
      'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700',
    td: 'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4',
  }

  return (
    <Layout title="Hospital Doctors">
      <div className="flex flex-wrap gap-4">
        {data?.me?.doctor?.hospital?.doctorSet.length > 0 &&
          data?.me?.doctor?.hospital?.doctorSet.map((doctor) => {
            return (
              <div className="w-64 rounded-lg bg-white p-4 shadow">
                <p>
                  <span className="block text-sm font-semibold uppercase leading-tight">
                    Name
                  </span>
                  Dr. {doctor.name} <br />
                  <span className="mt-4 block text-sm font-semibold uppercase leading-tight">
                    Specialization
                  </span>
                  {doctor.specialization}
                </p>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default Dashboard