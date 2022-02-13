import Link from 'next/link'
import Layout from '../../components/Hospital/Layout'

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
                {data?.me?.hospital?.doctorSet.length > 0 &&
                    data?.me?.hospital?.doctorSet.map((doctor) => {
                        return (
                            <div className="p-4 w-64 bg-white rounded-lg shadow">
                                <p>
                                    <span className="block text-sm font-semibold leading-tight uppercase">
                                        Name
                                    </span>
                                    Dr. {doctor.name} <br />
                                    <span className="block mt-4 text-sm font-semibold leading-tight uppercase">
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
