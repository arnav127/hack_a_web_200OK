import Link from 'next/link'
import { useRouter } from 'next/router'
import { usePatientByIdQuery } from '../../../graphql/generated'

import Layout from '../../../components/Hospital/Layout'

const PatientRecord = () => {
    const router = useRouter()
    const { pid } = router.query

    const { data, loading, error } = usePatientByIdQuery({
        variables: {
            id: pid
        }
    })

    return (
        <Layout title="Patient Record">
            {(!loading && !error) && (
                <>{JSON.stringify(data)}</>
            )
            }
        </Layout>
    )
}

export default PatientRecord
