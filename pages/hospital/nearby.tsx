import Layout from '../../components/Hospital/Layout'

import { useAllHospitalsQuery } from '../../graphql/generated'

const Nearby = () => {
    const { data, loading, error } = useAllHospitalsQuery();
    return (
        <Layout title="Nearby Hospitals">
            <div className="flex flex-wrap gap-8">
                {data?.allHospitals.length > 0 && data?.allHospitals.map(h => {
                    return (
                        <div className='flex bg-white rounded-lg'>
                            {h.name}
                            {h.address}
                            {h.phone}
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Nearby
